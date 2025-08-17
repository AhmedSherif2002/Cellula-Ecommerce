import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-start pl-0 p-8 sm:gap-36 gap-16">
      {/* <img src="signup.jpg" alt="" width={900}/> */}
      <div className="w-1/2 sm:w-1/2 h-auto flex justify-center items-center bg-red-500 hidden sm:block">
            <Image 
            src="/signup.jpg"
            alt="Signup Image"
            width={1000}
            height={1000}
            layout="responsive"
            className="w-full sm:w-1/2 h-auto object-cover"
            />
        </div>  
        <div className="signup-form flex flex-col sm:w-1/4 w-11/12">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-inter font-bold mb-4">Log in to Exclusive</h1>
            <p className="sm:text-md text-sm">Enter your details below</p>
            <form className="flex flex-col gap-6 mt-8">
                <input type="text" placeholder="Email or Phone Number" className="border-b border-gray-300 py-2 outline-none" />
                <input type="password" placeholder="Password" className="border-b border-gray-300 py-2 outline-none" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5">
                    <button type="submit" className="text-white rounded px-6 py-4 md:text-lg cursor-pointer md:w-1/2 w-full" style={{backgroundColor: "#DB4444"}}>Log In</button>
                    <Link href="" className="underline" style={{color: "#DB4444"}}>Forgot password?</Link>
                </div>
                
            </form>
        </div>
    </div>
  );
}