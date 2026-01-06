'use client';

import { useEffect, useState } from "react";
import GalleryCard from "@/app/components/profile/gallery/GalleryCard";
import GalleryModal from "@/app/components/profile/gallery/GalleryModal";
import { getData } from '@/utils/storage';
import {CreateGalleryData} from "@/types/gallery"
import Image from "next/image";


const GalleryPage = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [galleryData, setGalleryData] = useState<CreateGalleryData[]>([]);;


  useEffect(() => {
    const data = getData<CreateGalleryData>('gallery');
    if (data) {
      setGalleryData(data);
    } else {
      setGalleryData([]);
    }
  }, []); 

  return (
    <div>
      <h1 className="text-xl font-bold -mt-6">Gallery</h1>

      <GalleryModal isOpen={isCreateOpen}  onClose={() => setIsCreateOpen(false)} galleryData={galleryData}/>

      {/* List of Gallery Card */}
      <div className="flex gap-4 flex-wrap">
        <div className="shop-card mt-4 h-70 p-2 w-90 bg-primary rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer">
          <div className="w-full h-full cursor-pointer">
            <div>
              <Image
                height={120}
                width={120}
                className="rounded-md object-cover h-50 w-100"
                src="https://i.pinimg.com/736x/a1/f2/82/a1f28223598a486427a9e9cf5416fc24.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center gap-2 mt-2 px-2"></div>
            <div className="flex mt-2 px-2 pb-1">
              <p className="text-bold mr-2">All</p>
              <p className="opacity-50">
                <b>54</b>
              </p>
            </div>
          </div>
        </div>
        
        {
          galleryData?.length > 0 &&  galleryData?.map((item, index) => <GalleryCard {...item} key={index}/>)
         
        }
        

        {/* Create new art shop button */}
        <div className="mt-4 shop-card w-90 h-70 bg-primary rounded-sm cursor-pointer">
          <div onClick={() => setIsCreateOpen(true)} className="opacity-50 hover:opacity-100 duration-200 ease-in-out">
            <p className="text-center mt-25 text-5xl">+</p>
            <p className="text-center">
              <b>Create new Art Shop</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
