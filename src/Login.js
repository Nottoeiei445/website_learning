import React from "react";
import { useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-slate-800 border-2 border-slate-50 rounded-md p-14 shadow-lg backdrop-blur-sm bg-opacity-30 relative ">
                <div className="text-center text-white font-bold text-4xl mb-16 ">
                    <h1>LOGIN</h1>
                </div>
                
                <form action="">
                <div className="relative my-6">
                    <input 
                        id = "email" 
                        type = "email" 
                        className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-none focus:text-white focus:border-black peer " 
                        placeholder=" " >    
                    </input>
                    <label 
                        htmlFor="" 
                        className="absolute  text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-8">
                            Email
                    </label>
                </div>
                <div className="relative my-4">
                    <input 
                        id = "Password"
                        type = "Password" 
                        className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer" 
                        placeholder=" ">
                    </input>
                    <label 
                        htmlFor="" 
                        className="absolute  text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0]  peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-8">
                            Password
                    </label>
                    
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <input type="checkbox" name="" id=""></input>
                        <label htmlFor="Remember Me">Remember Me</label>            
                    </div>
                    <div>
                        <a href="Forgot password page" 
                        className="hover:text-black">
                            Forgot Password?
                        </a>
                    </div>
                    
                </div>
                <button className="w-full mb-4 text-[18px] mt-6 rounded-md bg-white text-black hover:bg-black hover:text-white py-1 transition-colors duration-300" 
                        type="submit" 
                        onClick={()=>navigate("/home")}>
                    Login
                </button>
                 
                </form>
            </div>
        </div>

    );
};

export default Login;