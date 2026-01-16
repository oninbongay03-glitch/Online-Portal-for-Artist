import { LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdCard } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaPaperclip } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6  min-h-screen">
            <p className="font-bold text-2xl">My Purchases</p>
            <p>View all purchases artworks and commissions</p>

            <div className="flex justify-between mt-8 mb-4 gap-4">

                <div className="border-l-3 border-indigo-500 bg-primary shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Total Purchases
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 bg-primary shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Shop Purchases
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 bg-primary  shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Commissions
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 bg-primary  shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Digital Arts
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 bg-primary  shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            $1,600
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Total Spent
                    </p>
                </div>
            </div>


            <div className="flex gap-4 mt-8">

                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search by artwork name, artwork, or order ID..."
                        className="pl-12 py-3 w-full  rounded-lg border border-gray-700 placeholder-gray-500"
                    />
                    <CiSearch className="absolute top-3.5 left-4 text-gray-400 text-xl" />
                </div>

                <div className="w-45 pl-1 py-3 rounded-lg border border-gray-700">
                    <select className="opacity-50 font-thin outline-none" name="All types" id="all types">
                        <option value="all types">All types</option>
                        <option value="shop">Shop</option>
                        <option value="commission">Commission</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 rounded-lg bg border border-gray-700">
                    <select className="opacity-50 font-thin outline-none" name="All Delivery" id="all delivery">
                        <option value="all delivery">All Delivery</option>
                        <option value="digital">Digital</option>
                        <option value="physical">Physical</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All Status" id="all status">
                        <option value="all status">All Status</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="refunded">Refunded</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>

            </div>


            <div className="mt-8">
                <div className="flex justify-between gap-4">
                    <div className="rounded-[10px] border-t-4 bg-primary  border-[#00FF6A] shadow-xs shadow-gray-700 p-4 w-[50%]">

                        <div className="flex gap-2">
                            <img src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg" alt="dispaly picture" className="w-13 h-13 rounded-full mt-1" />
                            <div className="">
                                <div className="flex mt-1">
                                    <p className="font-bold text-md">Alex Morgan</p>
                                    <p className="border w-12 rounded-xl text-center font-bold text-sm relative left-[26.5em] text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A] opacity-70">Shop</p>
                                </div>
                                <div className="flex gap-2 mt-1 opacity-70">
                                    <p className="border w-12 rounded-xl text-center font-bold text-sm text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A]">Paid</p>
                                    <p className="border w-20 rounded-xl text-center font-bold text-sm text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A]">Delivered</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="mt-4">Fantasy Character Portrait</h2>
                        <hr className="mt-4 opacity-50" />

                        <div className="mt-4 text-sm opacity-50">
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <IoMdCard />
                                    <p>Gcash</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <IoMdCard />
                                    <p>Physical Delivery</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <CiCalendar />
                                    <p>November 12, 2025</p>
                                </div>
                                <p className="text-[#00FF6A] font-bold">$120.00</p>
                            </div>

                        </div>


                        <div className="mt-4 opacity-70 text-sm">
                            <p className="bg-[#1D2939] rounded-md w-35 text-center p-1">ID:PUR-1241EWASD</p>

                            <p className="bg-[#1D2939] rounded-md w-59 text-center mt-4 p-1">"Handle with care - framed artwork"</p>

                            <p className="mt-4">Completed: December 1, 2025</p>
                        </div>

                        <div className="flex mt-4 border border-gray-500 w-30 items-center justify-center gap-2 p-1 rounded-md text-sm cursor-pointer">
                            <FaPaperclip />
                            <p>Reciept</p>
                            <BsBoxArrowUpRight />
                        </div>

                    </div>


                    <div className="rounded-[10px] border-t-4 bg-primary  border-[#00FF6A] shadow-xs shadow-gray-700 p-4 w-[50%]">

                        <div className="flex gap-2">
                            <img src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg" alt="dispaly picture" className="w-13 h-13 rounded-full mt-1" />
                            <div className="">
                                <div className="flex mt-1">
                                    <p className="font-bold text-md">Alex Morgan</p>
                                    <p className="border w-12 rounded-xl text-center font-bold text-sm relative left-[26.5em] text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A] opacity-70">Shop</p>
                                </div>
                                <div className="flex gap-2 mt-1 opacity-70">
                                    <p className="border w-12 rounded-xl text-center font-bold text-sm text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A]">Paid</p>
                                    <p className="border w-20 rounded-xl text-center font-bold text-sm text-[#00FF6A] bg-[#00FF6A22] border-[#00FF6A]">Delivered</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="mt-4">Fantasy Character Portrait</h2>
                        <hr className="mt-4 opacity-50" />

                        <div className="mt-4 text-sm opacity-50">
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <IoMdCard />
                                    <p>Gcash</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <IoMdCard />
                                    <p>Digital Download</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <CiCalendar />
                                    <p>November 12, 2025</p>
                                </div>
                                <p className="text-[#00FF6A] font-bold">$120.00</p>
                            </div>

                        </div>


                        <div className="mt-4 opacity-70 text-sm">
                            <p className="bg-[#1D2939] rounded-md w-35 text-center p-1">ID:PUR-1241EWASD</p>

                            <p className="bg-[#1D2939] rounded-md w-59 text-center mt-4 p-1">"Handle with care - framed artwork"</p>

                            <p className="mt-4">Completed: December 1, 2025</p>
                        </div>

                        <div className="flex justify-between gap-4">
                            <div className="flex mt-4 border bg-[#00BE5F] border-gray-500 w-[430px] items-center justify-center gap-2 p-1 rounded-md text-sm font-semibold text-black cursor-pointer">
                                <MdOutlineFileDownload />
                                <p>Download</p>
                            </div>
                            <div className="flex mt-4 border border-gray-500 w-30 items-center justify-center gap-2 p-1 rounded-md text-sm cursor-pointer">
                                <FaPaperclip />
                                <p>Receipt</p>
                                <BsBoxArrowUpRight />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default page