import { FaInstagram } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import Logo from "../ui/Logo";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="z-10 max-w-screen-2xl inset-0 relative mx-auto flex justify-between">
            <div className="z-10">
                <Logo/>
                <div>
                    <input type="text" name="" id="" placeholder="Enter your email" className="bg-white text-center text-slate-600 p-3 py-4"/>
                    <button className="bg-gradient-primary  p-3 py-4 cursor-pointer">Subscribe</button>
                </div>
            </div>

            <div className=" flex gap-12 leading-10 z-10">
                <div>
                    <h2>Learn More</h2>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="">FAQ</Link></li>
                        <li><Link href="">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h2><Link href="">Contact Us</Link></h2>
                    <ul>
                        <li><Link href="">Contact Number</Link></li>
                        <li><Link href="">Email Address</Link></li>
                    </ul>
                </div>

                <div>
                    <h2><Link href="">Social Media</Link></h2>
                    <div className="flex gap-2">
                        <Link href=""><FaInstagram /></Link>
                        <Link href=""><RiGithubLine/></Link>
                        <Link href=""><FiFacebook /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
