import Image from 'next/image';
import React from 'react'
import { FaRegStar } from "react-icons/fa";
import {CreateGalleryData} from "@/types/gallery"

// interface GalleryProps {
//     item: CreateGalleryData
// }

const GalleryCard = (galleryData: CreateGalleryData) => {
    console.log("gallery datas", galleryData.title)
    return (
    <div className='shop-card flex my-4 gap-6 h-70'>
        <div className='p-2 w-90 bg-primary rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer'>
            <div className='w-full h-full cursor-pointer'>
                <div className='overflow-hidden'>
                    <Image 
                        height={40}
                        width={40}
                        className='rounded-md object-cover h-50 w-100 bg-secondary border-0 ' 
                        src={galleryData?.coverImagePreview || null}
                        alt="" 
                    />
                </div>
                <div className='flex items-center gap-2 mt-2 px-2'>
                </div>
                <div className='flex mt-2 px-2 pb-1'>
                    <p className='text-bold mr-2'>{galleryData?.title || "Title"}</p>
                    <p className='opacity-50'><b>0</b></p>
                </div>
            </div>
        </div>

</div>
  )
}

export default GalleryCard
