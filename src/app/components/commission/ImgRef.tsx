"use client";
import { useEffect, useState } from "react";
import { TbFolderUp } from "react-icons/tb";
import {notify} from "@/utils/toastHelper";
import { MdImage } from "react-icons/md";

interface ImgRefProps {
  images: { file: File; url: string }[];
  setImages: React.Dispatch<React.SetStateAction<{ file: File; url: string }[]>>;
  goNext: React.Dispatch<React.SetStateAction<number>>;
  func: (value: boolean) => void
}


const ImgRef = ({
    images,
    setImages,
    goNext,
    func
  }: ImgRefProps) => {
 

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; //filelist not an array
    if (!files) return;

    //convert the files into array to use array methods
    const fileArray = Array.from(files);

    for (let file of fileArray) {
      if (images.length >= 3) {
        notify("You can only upload 3 images", 'error');
        return;
      }

      const duplicate = images.some(
        (img) => img.file.name === file.name && img.file.size === file.size
      );

      if (duplicate) {
        notify("This image is already uploaded", 'error');
        return;
      }

      const newImage = {
        file,
        url: URL.createObjectURL(file), //creates a temporary URL that points to a file stored in memory (a Blob or File).
      };

      setImages((prev) => [...prev, newImage]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(images.length == 0 ){
      notify("Select at least 1 image to continue", 'error')
      return;
    }

    goNext(1)
  }
  return (
    <div className="bg-secondary rounded-md p-6 w-full max-w-xl mx-auto">
      <h4 className="text-left font-bold text-2xl">Upload a new reference</h4>

      <p className="text-left text-sm opacity-50 mt-2">
        Provide visual references to guide the artist in creating your artwork
      </p>

      <form 
        method="get"
        onSubmit={handleSubmitForm}
        className="mt-5 p-4 py-6 rounded-xl">
        {/* Upload Section */}
        <div className="bg-primary">
          <label className="h-full cursor-pointer w-full p-4 text-center" htmlFor="img-reference">
            <TbFolderUp className="text-7xl mx-auto opacity-50" />
            <p className="text-md mt-4 font-bold">Click to upload or drag and drop</p>
            <p className="opacity-50 font-400 text-sm mt-4">Maximum file size 5mb</p>
          </label>
        </div>

        <input
          className="opacity-0"
          id="img-reference"
          name="img-reference"
          type="file"
          multiple
          onChange={handleImageUpload}
        />

        <div className="flex gap-4 mt-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative bg-primary h-29 w-30 text-4xl flex justify-center items-center rounded-md opacity-80 hover:opacity-100 overflow-hidden group"
            >

              {images[index] && (
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute z-10 top-0 right-2 text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition"
                >
                  X
                </button>
              )}

              {images[index] ? (
                <img
                  src={images[index].url}
                  alt="uploaded preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <MdImage className="bg-primary p-2 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            type="button"
            onClick={() => {func(true)}}
            className="text-sm p-2 border w-35  rounded-sm transition hover:opacity-80 cursor-pointer">Cancel</button>
         
          <button 
            type="submit"
            className="text-sm p-2 font-bold border w-35 hover:opacity-80 transition rounded-sm bg-white text-black cursor-pointer">
            Next Step
          </button>
        </div>
      </form>

    </div>
  );
};

export default ImgRef;
