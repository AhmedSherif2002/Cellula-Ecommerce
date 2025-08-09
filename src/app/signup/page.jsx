import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-start pl-0 p-8 sm:gap-36 gap-16">
      {/* <img src="signup.jpg" alt="" width={900}/> */}
      <div className="w-1/2 sm:w-1/2 h-auto flex justify-center items-center bg-red-500">
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
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-sm font-inter mb-4">Create an account</h1>
            <p className="sm:text-md text-sm">Enter your details below</p>
            <form className="flex flex-col gap-6 mt-8">
                <input type="text" placeholder="Name" className="border-b border-gray-300 py-2 outline-none" />
                <input type="text" placeholder="Email or Phone Number" className="border-b border-gray-300 py-2 outline-none" />
                <input type="password" placeholder="Password" className="border-b border-gray-300 py-2 outline-none" />
                <button type="submit" className="text-white rounded px-6 py-4 text-lg mt-5 cursor-pointer" style={{backgroundColor: "#DB4444"}}>Create Account</button>
                <Link href="" className="bg-white text-black border-2 border-gray-300 rounded flex justify-center items-center gap-3 px-6 py-4 text-lg cursor-pointer">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1231_3336)">
                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1231_3336">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="ml-2">Sign up with Google</span>
                    {/* Sign up with Google */}
                </Link>
                <p className="text-sm">Already have an account?&nbsp;&nbsp;<Link href="/login" className="text-gray-600 font-bold underline underline-offset-4">Log in</Link></p>
            </form>
        </div>
    </div>
  );
}