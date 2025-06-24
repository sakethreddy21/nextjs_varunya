import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const uri =
  process.env.MONGO_URI ??
  "mongodb+srv://saketh:Srm12345@cluster0.elogcnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "vaarunya";

let cachedClient: MongoClient | null = null;

async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }
  return cachedClient.db(dbName);
}

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const level = params.get("level");
    const colName = params.get("collection");
    const sheetKey = params.get("sheet");

    const db = await getDb();

    // 1️⃣ All collections
    if (level === "collections" || (!level && !colName)) {
      const collections = await db.listCollections().toArray();
      return NextResponse.json({
        collections: collections.map((c) => c.name),
      });
    }

    // 2️⃣ Sheet keys in a collection
    if (level === "sheets" && colName) {
      const doc = await db.collection(colName).findOne({}, { projection: { _id: 0 } });
      if (!doc)
        return NextResponse.json({ sheets: [] });
      return NextResponse.json({ sheets: Object.keys(doc) });
    }

    // 3️⃣ Data in a sheet
    if (level === "data" && colName && sheetKey) {
      const doc = await db.collection(colName).findOne(
        { [`${sheetKey}`]: { $exists: true } },
        { projection: { [sheetKey]: 1, _id: 0 } }
      );
      const data = (doc && (doc as any)[sheetKey]) ?? [];
      return NextResponse.json({ data });
    }

    // 🚫 Invalid query combo
    return NextResponse.json(
      {
        error:
          "Invalid query. Use:\n" +
          "  ?level=collections\n" +
          "  ?level=sheets&collection=COL\n" +
          "  ?level=data&collection=COL&sheet=SHEET"
      },
      { status: 400 }
    );
  } catch (err) {
    console.error("Mongo API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
