"use client";

import { useState } from "react";

interface Collection {
  id: string;
  name: string;
  itemsCount: number;
  updatedAt: string;
}

interface SaveToCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collections: Collection[];
  onSave: (collectionId: string) => void;
}

const SaveToCollectionModal = ({
  isOpen,
  onClose,
  collections,
  onSave,
}: SaveToCollectionModalProps) => {

  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-2xl bg-primary p-6 shadow-xl">
        
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold ">
            Save to Collection
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-400  cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Collection List */}
        <div className="space-y-3">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2 transition
                ${
                  selectedCollection === collection.id
                    ? "border-green-500 bg-secondary"
                    : "border-primary-line bg-secondary hover:border-zinc-500"
                }
              `}
            >

              {/* Thumbnail Placeholder */}
              <div className="h-12 w-12 rounded-lg bg-background" />

              {/* Info */}
              <div className="flex-1 text-left">
                <p className="text-sm font-medium ">
                  {collection.name}
                </p>
                <p className="text-xs text-zinc-400">
                  {collection.itemsCount} items · Updated {collection.updatedAt}
                </p>
              </div>

              {/* Selected Indicator */}
              {selectedCollection === collection.id && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-black">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex items-center justify-between">
          <button
            className="flex cursor-pointer items-center gap-1 text-sm text-green-400 hover:text-green-300"
          >
            ＋ Create new
          </button>

          <button
            disabled={!selectedCollection}
            onClick={() => selectedCollection && onSave(selectedCollection)}
            className={`rounded-lg px-5 py-2 text-sm font-medium cursor-pointer
              ${
                selectedCollection
                  ? "bg-green-600 text-white hover:bg-green-500"
                  : "cursor-not-allowed bg-zinc-700 text-zinc-400"
              }
            `}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveToCollectionModal;
