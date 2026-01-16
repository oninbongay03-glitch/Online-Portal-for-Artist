'use client';

import React from 'react'
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import Modal from '../../ui/Modal';
import {ModalProps} from "@/types/modal"

const Checkout = ({isOpen, onClose, className}: ModalProps) => {
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1280px] w-full  flex flex-col">
      <div>
        <div className="flex items-center gap-1 cursor-pointer max-w-screen-xl mx-auto translate-x-[14.7em]">
         <MdOutlineKeyboardArrowLeft className="text-sm" />
         <p>Back</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer max-w-screen-xl mx-auto translate-x-[15em] mt-4">
         <h2 className="">CHECKOUT</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#FFFFFF] h-[520px] w-[50em] mx-auto gap-5 mt-6 mb-10 text-base text-black">
        <div className="py-6 px-20 gap-10 mt-8">
          <p className="text-center">Choose Payment Method</p>
       <div className="mt-6 flex flex-col items-center">
          <img className="h-7 w-7" src="https://images.seeklogo.com/logo-png/52/1/gcash-logo-png_seeklogo-522261.png" alt="GCash Logo"/>
          <p className="font-bold mt-2">GCash</p>
          <p className="text-sm mt-25 text-center">You’ll be redirected to GCash to complete this payment.</p>
        </div>
      </div>

      <div className= "bg-[#F2F2F2] p-6">
        <h2>Summary</h2>
        <hr className="mt-4 opacity-50" />
        <div className="flex justify-between mt-4 text-sm">
          <p>Machine Gun car <span className="font-bold">by William Gomez</span></p>
          <p className="font-bold">$10</p>
        </div>
        <div>
          <img className="mt-6"src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg" alt="Cat" />
        </div>
          <p className="mt-2">1 downloaded file</p>
          <div className="flex gap-2 mt-2 text-sm opacity-50">
            <CiImageOn className="h-10 w-10"/>
            <p>Machine_gun_car.jpg <br />
              4040 x 2312 - 5.12mb</p>  
        </div>
        <hr className="mt-4 opacity-50" />
        <div className="flex justify-between mt-2 text-xs">
          <p>Total</p>
          <p>$10</p>
        </div>
        <button className="border rounded-md bg-secondary text-white w-full mt-3 cursor-pointer p-2">Pay with Gcash</button>
      </div>
    </div>

    <div className="flex items-center gap-1 cursor-pointer max-w-screen-xl mx-auto translate-x-[14.7em]">
      <MdOutlineKeyboardArrowLeft className="text-sm" />
      <p>Back</p>
    </div>

    <div className="bg-[#FFFFFF] h-[350px] w-[25em] mx-auto gap-5 mt-6 mb-10 text-base text-black">
      <div className= "bg-[#F2F2F2] p-6">
        <h2>Summary</h2>
        <hr className="mt-4 opacity-50" />
        <div className="flex justify-between mt-4 text-sm">
          <p>Machine Gun car <span className="font-bold">by William Gomez</span></p>
          <p className="font-bold">$10</p>
        </div>
        <div>
          <img className="mt-6"src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg" alt="Cat" />
        </div>
          <p className="mt-2">1 downloaded file</p>
          <div className="flex gap-2 mt-2 text-sm opacity-50">
            <CiImageOn className="h-10 w-10"/>
            <p>Machine_gun_car.jpg <br />
              4040 x 2312 - 5.12mb</p>  
        </div>
        <hr className="mt-4 opacity-50" />
        <div className="flex justify-between mt-2 text-xs">
          <p>Total</p>
          <p>$10</p>
        </div>
        <button className="border rounded-md bg-secondary text-white w-full mt-3 cursor-pointer p-2">Download Art</button>
      </div>
    </div>

  </Modal>
  )
}

export default Checkout
