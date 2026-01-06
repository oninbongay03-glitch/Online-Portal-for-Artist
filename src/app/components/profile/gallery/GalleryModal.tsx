"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateGalleryModal from "./CreateGalleryModal";
import { CreateGalleryData } from "@/types/gallery";
import Image from "next/image";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    galleryData: CreateGalleryData;
}

const GalleryModal = ({
  isOpen,
  onClose,
  galleryData,
}: GalleryModalProps) => {
  const [createOpen, setCreateOpen] = useState(false);

  const handleCreateGallery = (data: CreateGalleryData) => {
    // console.log(data);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1280px] w-full  flex flex-col">
        <div className="bg-secondary flex justify-between items-center px-6 py-4 ">
          <h2 className="text-lg font-semibold">Gallery</h2>
          <button onClick={onClose} className="text-xl cursor-pointer">✕</button>
        </div>

       
        <div className="flex-1 p-6 bg-primary">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-semibold">Gallery</p>
              <p className="text-xs opacity-60">
                Create, rename, and delete your galleries.
              </p>
            </div>

            <button
              onClick={() => setCreateOpen(true)}
              className="border px-4 py-2 text-sm rounded flex items-center gap-2 cursor-pointer hover:bg-foreground hover:text-background transition"
            >
               + New Gallery
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                galleryData.map(i => {
                return(
                    <div key={i.title} className=' bg-secondary h-full cursor-pointer '>
                        <div className="h-50 w-full p-2">
                            <Image 
                                height={40}
                                width={40}
                                className="rounded-md object-cover h-50 w-100" 
                                src={i?.coverImagePreview || null}
                                alt="" 
                            />
                        </div>
                        <div className='flex items-center gap-2 mt-2 px-2'>
                        </div>
                        <div className='flex mt-2 px-2 pb-1'>
                            <p className='text-bold mr-2'>{i?.title || "Title"}</p>
                            <p className='opacity-50'><b>0</b></p>
                        </div>
                     </div>
                )})
            }
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4  bg-secondary  flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-400 text-black rounded font-semibold"
          >
            Done
          </button>
        </div>
      </Modal>

      {/* Create Gallery Popup */}
      <CreateGalleryModal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={handleCreateGallery}
      />
    </>
  );
};

export default GalleryModal;
