export const getCollections = async (): Promise<string[]> => {
  const res = await fetch("/api/get-data?level=collections");
  if (!res.ok) throw new Error("API error");
  return (await res.json()).collections;
};

export const getSheets = async (collection: string): Promise<string[]> => {
  const res = await fetch(`/api/get-data?level=sheets&collection=${encodeURIComponent(collection)}`);
  if (!res.ok) throw new Error("API error");
  return (await res.json()).sheets;
};

export const getSheetData = async (collection: string, sheet: string) => {
  const res = await fetch(
    `/api/get-data?level=data&collection=${encodeURIComponent(collection)}&sheet=${encodeURIComponent(sheet)}`
  );
  if (!res.ok) throw new Error("API error");
  return (await res.json()).data;
};
