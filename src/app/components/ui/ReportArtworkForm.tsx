"use client";

import { useState } from "react";

interface ReportArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkId: string;
  reportedArtistId: string;
  reporterById: string;
}

const ReportArtworkModal = ({
  isOpen,
  onClose,
  artworkId,
  reportedArtistId,
  reporterById,
}: ReportArtworkModalProps) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reportData = {
      ARTWORK_ID: artworkId,
      REPORTED_ARTIST_ID: reportedArtistId,
      REPORTER_BY_ID: reporterById,
      REASON: reason,
      DESCRIPTION: description,
      STATUS: "PENDING",
    };

    console.log("Report Submitted:", reportData);

    // TODO: connect to API
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl bg-primary p-6 shadow-xl">
        
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold ">
            Report Artwork
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-400 "
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Reason */}
          <div>
            <label className="mb-1 block text-sm ">
              Reason
            </label>
            <select
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full rounded-lg bg-secondary px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="Copyright Infringement">
                Copyright Infringement
              </option>
              <option value="Inappropriate Content">
                Inappropriate Content
              </option>
              <option value="Plagiarism">
                Plagiarism
              </option>
              <option value="Spam or Misleading">
                Spam or Misleading
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-sm ">
              Description
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more details about the report..."
              className="h-28 w-full resize-none rounded-lg bg-secondary px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-secondary px-4 py-2 text-sm hover:bg-zinc-600 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-500  cursor-pointer"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportArtworkModal;
