'use client'; 

import { useRouter } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const GoBackBtn = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };

  return (
      <div onClick={handleBack} className="absolute hover:opacity-100 opacity-50 h transition duration-200 ease-in-out top-30 left-10 flex gap-2 cursor-pointer items-center">
            <MdOutlineKeyboardArrowLeft />
            <p className="">Back</p>
      </div>
  )
}

export default GoBackBtn
