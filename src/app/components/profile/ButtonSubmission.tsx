"use client"

import {LOGGED_IN_USER_ID} from "@/lib/auth"
import { MdOutlineMail } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import CommissionForm from "../commission/CommissionForm";
import DarkBlur from "../ui/DarkBlur";
import Menu from './Menu';
import { usePopup } from '@/hooks/usePopup';
import ModalPortal from '../shared/ModalPortal';

interface NavLinksProps {
    userId: string;
}

const ButtonSubmission = ({userId}: NavLinksProps) => {
 const isOwner = LOGGED_IN_USER_ID == userId;

 const commissionPopup = usePopup({
    closeOnEsc: true,
    closeOnOutsideClick: true,
    closeOnRouteChange: true,
  });

  return (
    <div>
        {
        !isOwner && 
            <div className="flex gap-4 items-center">
            <Menu />
            <button className="flex bg-white px-4 py-2 text-nowrap items-center text-black rounded-md gap-2 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out hover:scale-102">
            <GoPlusCircle /> 
                <span>Follow</span>
                </button>

                <button 
                    onClick={commissionPopup.open}
                    className="flex bg-green-400 px-4 py-2 text-nowrap items-center text-black rounded-md gap-2 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out hover:scale-102">
                    <MdOutlineMail /> 
                    <span>Send Commission</span>
                </button>
            </div>
        }

        {
        }

        {commissionPopup.isOpen && (
            <>
            {/* Modal */}
            <ModalPortal>
                <div ref={commissionPopup.ref}>
                    <CommissionForm func={commissionPopup.close} userId={userId} />
                </div>

                {/* Backdrop */}
                    <DarkBlur />
            </ModalPortal>

            </>
        )}
    </div>
  )
}

export default ButtonSubmission
