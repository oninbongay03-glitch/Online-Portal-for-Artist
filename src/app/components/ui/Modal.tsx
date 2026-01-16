"use client";

import React from "react";
import { createPortal } from "react-dom";
import {ModalProps} from "@/types/modal"



const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative z-[101] bg-[#1b1f23] rounded-lg shadow-xl ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
