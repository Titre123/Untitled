import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logoUI/logo";
import Mobile from "../assets/signup.png";
import { LoginPattern, GoogleIcon } from "../components/svg/svg";

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div className="LogoPageWithImage h-screen w-screen overflow-hidden flex ipad:bg-gray-100">
      <div className="LoginPage h-full w-full py-12 ipad:bg-white ipad:py-0 ipad:w-[50%] relative">
      <a className="hidden ipad:block w-full absolute py-4 px-8" href="/">
          <Logo />
        </a>
        <div className="Container px-4 tablet:px-0 mx-auto max-w-[400px] h-full w-full ipad:my-auto flex flex-col gap-y-3 ipad:absolute ipad:top-[50%] ipad:translate-y-[-50%] ipad:left-[50%] ipad:translate-x-[-50%] ipad:h-max">
          <div className="Header flex flex-col gap-y-3 ipad:block">
            <div className="Logo cursor-pointer" onClick={() => navigate("/")}>
              <div className="Logomark shadow justify-start items-start inline-flex ipad:hidden">
                <div className="Content w-8 h-8 relative bg-gradient-to-b from-white to-gray-300 rounded-lg border border border border border-gray-300">
                  <div className="Grid w-8 h-8 left-0 top-0 asolute" />
                  <div className="Dot w-4 h-4 left-[8px] top-[8px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
                  <div className="Blur w-8 h-4 left-0 top-[16px] absolute bg-white bg-opacity-20 rounded-bl-lg rounded-br-lg backdrop-blur-[5px]" />
                </div>
              </div>
            </div>
            <div className="Welcome gap-2 flex flex-col ipad:gap-2">
              <p className="LoginText text-gray-900 text-[1.5rem] font-600 leading-[2rem] ipad:text-xl ipad:leading-[2.75rem]">
              Sign up
              </p>
              <p className="WelcomeText font-400 text-gray-500 text-base leading-normal ">
              Start your 30-day free trial.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="text-slate-700 text-sm font-medium leading-tight"
              for="userSignupName"
            >
              Name
            </label>
            <input
              className="w-full h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              type="text"
              name="name"
              id="userSignupName"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="text-slate-700 text-sm font-medium leading-tight"
              for="userSignupEmail"
            >
              Email
            </label>
            <input
              className="w-full h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              type="email"
              name="email"
              id="userSignupEmail"
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="text-slate-700 text-sm font-medium leading-tight"
              for="userSignupPassword"
            >
              Password
            </label>
            <input
              className="w-full h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              type="password"
              name="email"
              id="userSignupPassword"
            ></input>
          </div>
          <div className="flex justify-between items-center">
            <div className="justify-start items-center gap-2 flex">
              <input type="checkbox" className="accent-violet-500"/>
              <p className="text-slate-700 text-sm font-medium leading-tight">
                Remember for 30 days
              </p>
            </div>
            <a className="text-violet-700 text-sm font-semibold leading-tight" href="">
              Forgot password
            </a>
          </div>
          <div className="gap-y-4 flex flex-col">
            <button className="-full h-11 rounded-lg justify-center items-center px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 flex">
              <span className="text-white text-base font-semibold leading-normal">
                Sign up
              </span>
            </button>
            <button className="w-full h-11 flex flex gap-2 justify-center items-center px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300">
              <GoogleIcon />
              <span className="text-slate-700 text-base font-semibold leading-normal">
                Sign in with Google
              </span>
            </button>
          </div>
          <p className="text-gray-500 text-sm font-normal leading-tight self-center">
          Already have an account?{" "}
            <a href="/login">
              <span className="text-violet-700 text-sm font-semibold leading-tight">
                Log in
              </span>
            </a>
          </p>
        </div>
        <div className="w-full px-8 py-4 justify-start items-end hidden ipad:flex absolute bottom-[0px]">
          <span className="text-gray-500 text-sm font-normal leading-tight">
            © Untitled UI 2077
          </span>
        </div>
      </div>
      <div className="LoginImage hidden ipad:flex w-[50%] relative">
        <div className="ImageDiv h-[75%] aspect-[3/2] absolute top-[50%] translate-y-[-50%] ipad:left-[20%] desktop:left-[30%]">
          <img src={Mobile} className="h-full block" />
        </div>
      </div>
    </div>
  );
}
