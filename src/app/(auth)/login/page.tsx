'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import Logo from "@/app/components/ui/Logo";
import {login} from "@/lib/actions/auth";
import {validateAll} from "@/utils/validator"
import {loginPatterns} from "@/utils/patterns";

export default function LoginPage() {
  let isRememberMe = document.querySelector('#remember') as HTMLInputElement | null;
  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const {gmail, password, isRememberMe} = e.target as typeof e.target & {
      gmail: {value: string};
      password: {value: string};
      isRememberMe: {value: boolean};
    };

    const formData = {
      gmail: gmail.value,
      password: password.value,
      isRememberMe: isRememberMe.value,
    };

    const errors = validateAll(formData, loginPatterns);

    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    } else {
      console.log("Form data is valid. Submitting...")
    }
  }

  return (
    <div className="w-full relative shadow-xl min-h-[100dvh] border-white border-2 shadow-white flex flex-col justify-center items-center h-[100dvh] bg-[url('https://static.vecteezy.com/system/resources/previews/006/595/713/non_2x/silhouettes-of-panoramic-mountains-view-landscape-vector.jpg')] bg-cover bg-center h-64 w-full)">
        <div className="z-20 flex justify-center  h-[40em] rounded-md overflow-hidden">
          <div className="hidden text-white md:block w-1/2 bg-cover p-8 pt-24 leading-6" style={{backgroundImage: `url(form-background.jpg)`}}>
            <h1 className="text-5xl text-start font-bold leading-[1.2em]">JOIN THE <br />FUTURE OF <br /> ART & <br />CREATIVITY</h1>
            <p className="text-lg text-start mt-8 leading-[2em] pr-8">Showcase your talent, connect with fellow <br /> artist, and open door to opportunities. <br /> Whether you're a traditional or digital artist, <br />share your work, gain appreciation, and build meaningful collaboration.</p>
          </div>

          <div className="w-[90dvw] md:w-1/2 bg-white py-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10" id="login-form">
              <h3 className="text-3xl font-bold text-center text-black">Welcome back</h3>
              <button onClick={() => login()} className="border border-cyan-500 p-5 text-black rounded-xl flex items-center justify-center gap-3">
                <FcGoogle />
                <p>Continue with Google</p>
              </button>

              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-cyan-500"></div>
                  <span className="px-3 text-gray-500 text-sm">or</span>
                <div className="flex-grow h-px bg-cyan-500"></div>
              </div>
              
              <div className="relative w-full">
                <TfiEmail className="absolute left-4 top-6 text-2xl text-gray-500"/>
                <input name="gmail" id="gmail" className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none" type="email" placeholder="Email" />
              </div>
              
              <div className="relative w-full">
                <CiLock className="absolute left-4 top-6 text-2xl text-gray-700"/>
                <input name="password" id="password" className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none" type="password" placeholder="Password" />
              </div>

              <div className="flex justify-between">
                <div>
                  <input name="isRememberMe" type="checkbox" id="remember"/>
                  <label className="text-black" htmlFor="remember"> Remember me</label>
                </div>
                <a className="text-blue-600" href="#">Forgot Password?</a>
              </div>

              <button className="border p-5 bg-blue-500  rounded-xl" type="submit">Login</button>
              <p className="text-center text-black">Don't have an account? <Link className="text-blue-600" href="/register">Create an account</Link></p>
            </form>
          </div>
        </div>

        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:top-12 md:left-22 text-white  md:block">
          <Logo />
        </div>
      </div>
  );
}
