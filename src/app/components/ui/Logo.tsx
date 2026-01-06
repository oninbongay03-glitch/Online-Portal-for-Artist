import Link from "next/link"
import logo from "../../logo-light.png"
import Image from "next/image"

export default function Logo(){
    return (
        <Link href="/">
            <Image 
                width={120}
                height={120}
                alt="logo"
                src={logo}
                className="w-25"
            />
        </Link>
    )
}