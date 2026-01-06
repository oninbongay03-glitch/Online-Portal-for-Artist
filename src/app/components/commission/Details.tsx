"use client";

import Image from "next/image";
import React from "react";
import { CommissionFormData } from "@/types/commission";

interface DetailsProps {
  formData: CommissionFormData;
  tags: string[];
  inputValue: string;
  setInputValue: (v: string) => void;
  handleTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTag: (tag: string) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  submit: () => void;
  goBack: () => void;
  images: { file: File; url: string }[];
}

const Details = ({
  formData,
  tags,
  inputValue,
  setInputValue,
  handleTag,
  removeTag,
  handleChange,
  submit,
  goBack,
  images,
}: DetailsProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex flex-col gap-4"
    >
      <div className="bg-primary rounded-md md:flex gap-6 p-6">
        {/* LEFT FORM */}
        <div className="flex flex-col gap-6 md:w-[70%]">
          {/* Title */}
          <div>
            <label className="font-semibold">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 bg-secondary border border-primary-line rounded-sm"
              placeholder="e.g. Illustration, character design, etc.."
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Your assets descriptions"
              rows={4}
              className="w-full mt-1 p-3 bg-secondary border border-primary-line rounded-sm resize-none"
            />
          </div>

          {/* Art Type & Deadline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Art Type</label>
              <select
                name="artType"
                value={formData.artType}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-secondary border border-primary-line rounded-sm"
              >
                <option value="Digital Art">Digital Art</option>
                <option value="Physical Art">Physical Art</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 bg-secondary border border-primary-line rounded-sm"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="font-semibold">Tags</label>
            <div className="flex flex-wrap gap-2 p-2 border border-primary-line rounded-sm bg-secondary mt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 bg-green-700 text-white px-3 py-1 rounded text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleTag}
                placeholder="Press Enter to add"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="font-semibold">Budget</label>
            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              type="number"
              placeholder="₱500"
              className="w-full mt-1 p-3 bg-secondary border border-primary-line rounded-sm"
            />
          </div>
        </div>

        {/* RIGHT IMAGE PREVIEW */}
        <div className="md:w-[30%] flex flex-col gap-3">
          <p className="text-sm font-semibold opacity-70">
            Image Preview ({images.length})
          </p>

          {images.length > 0 ? (
            <>
              <div className="relative aspect-square w-full">
                <Image
                  src={images[0].url}
                  alt="main-preview"
                  fill
                  className="object-cover rounded-md border border-primary-line"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-square">
                    <Image
                      src={img.url}
                      alt={`thumb-${i}`}
                      fill
                      className="object-cover rounded-md border border-primary-line"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="aspect-square border border-dashed border-primary-line flex items-center justify-center text-xs opacity-50">
              No images uploaded
            </div>
          )}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={goBack}
          className="border px-6 py-2 rounded-md text-sm cursor-pointer hover:opacity-80 transition-all"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold cursor-pointer hover:opacity-80 transition-all"
        >
          Review
        </button>
      </div>
    </form>
  );
};

export default Details;
