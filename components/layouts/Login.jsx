// import React from "react";

// export default function Login() {
//     let [open, setOpen] = useState(false);
//     return (
//         <div>
//             <div
//                 onClick={() => setOpen(!open)}
//                 className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
//             >
//                 <ion-icon name={open ? "close" : "menu"}></ion-icon>
//             </div>

//             <ul
//                 className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//                     open ? "top-20 " : "top-[-490px]"
//                 }`}
//             >
//                 <div className="drawer drawer-end">
//                     <input
//                         id="my-drawer-4"
//                         type="checkbox"
//                         className="drawer-toggle"
//                     />

//                     <div className="drawer-side z-10 ">
//                         <label
//                             htmlFor="my-drawer-4"
//                             className="drawer-overlay"
//                         ></label>

//                         <form className="menu align-middle w-80 min-h-full bg-white py-10">
//                             <h1 className="text-black font-bold text-2xl ">
//                                 Login
//                             </h1>
//                             <label className="label text-black mt-5">
//                                 <span className="label-text text-black">
//                                     Email
//                                 </span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Email"
//                                 className="input border border-black w-full max-w-xs bg-white text-black"
//                             />
//                             <label className="label">
//                                 <span className="label-text text-black">
//                                     Password
//                                 </span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Password"
//                                 className="mb-5 input border border-black w-full max-w-xs bg-white text-black"
//                             />
//                             <a
//                                 href=""
//                                 className="text-center text-blue-500 mt-5"
//                             >
//                                 Forgot Password?
//                             </a>
//                             <button className="btn btn-outline btn-sm px-8 my-3 bg-black w-30 text-white hover:bg-white hover:text-black">
//                                 Login
//                             </button>
//                             <span className="text-black flex justify-end">
//                                 Don't have an account?
//                                 <a href="" className="ml-1 text-blue-500">
//                                     Sign Up
//                                 </a>
//                             </span>
//                             {/* Sidebar content here */}
//                         </form>
//                     </div>
//                 </div>
//             </ul>
//         </div>
//     );
// }
