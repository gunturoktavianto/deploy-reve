"use client";

import React, { useState, useContext, useEffect } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import CartImage from "./CartImages";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const logoutHandler = () => {
  signOut();
};

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  console.log(data);

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  let Links = [
    { name: "Home", link: "/" },
    { name: "Catalogue", link: "/catalogue" },
    
  ];
  let [open, setOpen] = useState(false);

  const { error, registerUser, clearErrors } = useContext(AuthContext);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    registerUser({ email, password });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (data?.error) {
      toast.error(data?.error);
    }

    if (data?.ok) {
      router.push("/catalogue");
    }
  };
  return (
    <div className="w-full top-0">
      <div className="md:flex items-center justify-center bg-black py-3 px-7">
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <a href="/">
          <Image src={logo} alt="logo" className="mr-72" />
        </a>

        <ul className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-white">
                {link.name}
              </a>
            </li>
          ))}
          {/* <Login /> */}
          {/* DRAWER */}
          {!user ? (
            <>
              <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                {/* DRAWER 4 */}
                <div className="drawer-side z-10 ">
                  <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                  <form onSubmit={loginHandler} className="menu align-middle w-80 min-h-full bg-white py-10">
                    <h1 className="text-black font-bold text-2xl ">Login</h1>
                    <label className="label text-black mt-5">
                      <span className="label-text text-black">Email</span>
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="input border border-black w-full max-w-xs bg-white text-black" />
                    <label className="label">
                      <span className="label-text text-black">Password</span>
                    </label>
                    <input minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="mb-5 input border border-black w-full max-w-xs bg-white text-black" />

                    <button className="btn btn-outline btn-sm px-8 my-3 bg-black w-30 text-white hover:bg-white hover:text-black">Login</button>
                    <span className="text-black flex justify-end">
                      Don't have an account?
                      <a href="" className="ml-1 text-blue-500">
                        Sign Up
                      </a>
                    </span>
                    {/* Sidebar content here */}
                  </form>
                </div>
              </div>

              <div className="drawer drawer-end">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                {/* DRAWER 4 */}
                <div className="drawer-side z-10 ">
                  <label htmlFor="my-drawer-5" className="drawer-overlay"></label>

                  <form onSubmit={submitHandler} className="menu align-middle w-80 min-h-full bg-white py-10">
                    <h1 className="text-black font-bold text-2xl ">Sign Up</h1>
                    <label className="label text-black mt-5">
                      <span className="label-text text-black">Email</span>
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="input border border-black w-full max-w-xs bg-white text-black" />
                    <label className="label">
                      <span className="label-text text-black">Password</span>
                    </label>
                    <input type="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" className="input border border-black w-full max-w-xs bg-white text-black" />
                    <label className="label">
                      <span className="label-text text-black">Confirm Password</span>
                    </label>
                    <input type="password" id="confirm_password" placeholder="Confirm Password" className="mb-5 input border border-black w-full max-w-xs bg-white text-black" />
                    <button type="submit" className="btn btn-outline btn-sm px-8 my-3 bg-black w-30 text-white hover:bg-white hover:text-black">
                      Sign Up
                    </button>

                    {/* Sidebar content here */}
                  </form>
                </div>
              </div>

              <div className="drawer drawer-end">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                {/* navbar*/}
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-5" className="btn btn-outline btn-sm px-8 ml-8 w-30 text-white">
                    Register
                  </label>
                </div>
              </div>
              <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                {/* navbar*/}
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="btn btn-outline btn-sm px-8 ml-8 text-black bg-white">
                    Login
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link href="/closet" className="mx-5">
                Closet
              </Link>
              <h1 className="ml-4">Hi, {user?.email}</h1>
              <button onClick={logoutHandler} className="btn btn-outline btn-sm px-8 ml-8 text-black bg-white">
                Logout
              </button>
            </>
          )}
          <CartImage />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
