'use client';

import React, { useEffect, useState } from 'react';
import { getSheetData , getCollections, getSheets} from '../hooks/data-fetching-hooks';

const Page = () => {
  const [collections, setCollections] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [sheets, setSheets] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null);
  const [sheetData, setSheetData] = useState<any[] | null>(null);

  // Fetch all collections on mount
  useEffect(() => {
    getCollections()
      .then(setCollections)
      .catch(err => console.error("Error loading collections:", err));
  }, []);

  const handleCollectionClick = async (collection: string) => {
    setSelectedCollection(collection);
    setSelectedSheet(null);
    setSheetData(null);

    try {
      const sheets = await getSheets(collection);
      setSheets(sheets);
    } catch (err) {
      console.error("Error loading sheets:", err);
    }
  };

  const handleSheetClick = async (sheet: string) => {
    if (!selectedCollection) return;
    setSelectedSheet(sheet);

    try {
      const data = await getSheetData(selectedCollection, sheet);
      setSheetData(data);
    } catch (err) {
      console.error("Error loading sheet data:", err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">MongoDB Data Viewer</h1>

      {/* Collection List */}
      <div>
        <h2 className="text-xl">Collections</h2>
        <ul className="space-y-1">
          {collections.map(col => (
            <li
              key={col}
              onClick={() => handleCollectionClick(col)}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {col}
            </li>
          ))}
        </ul>
      </div>

      {/* Sheet List */}
      {sheets.length > 0 && selectedCollection && (
        <div>
          <h2 className="text-xl">Sheets in: {selectedCollection}</h2>
          <ul className="space-y-1">
            {sheets.map(sheet => (
              <li
                key={sheet}
                onClick={() => handleSheetClick(sheet)}
                className="cursor-pointer text-green-600 hover:underline"
              >
                {sheet}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sheet Data */}
      {sheetData && selectedSheet && (
        <div>
          <h2 className="text-xl">Data in: {selectedSheet}</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {JSON.stringify(sheetData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Page;
