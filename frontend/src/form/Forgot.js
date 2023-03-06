import React from 'react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Forgot(props) {

  const [forgotForm, setForgotForm] = useState({
    email: "",
    new_password: "",
  })

  const onChangeForm = (label, event) =>{
    switch (label){
      case "email":
        setForgotForm({...forgotForm, email: event.target.value});
        break;
      case "new_password":
        setForgotForm({...forgotForm, new_password: event.target.value});
        break;
    }
  }
  

  return (
    <React.Fragment>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Forgot Password
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 -tracking-wide cursor-pointer mx-auto">
            Please update your password!
        </p>
        <form>
          <div className="space-y-4">
            <input 
                type="email" name="" id="" placeholder="Email"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                onChange={(event) => {
                  onChangeForm("email", event)
                }}
            />
            <input 
                type="password" name="" id="" placeholder="New Password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                onChange={(event) => {
                  onChangeForm("new_password", event)
                }}
            />
          </div>
          <div className="text-center mt-6">
            <button
                type="submit" 
                className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                >
                Update Password
            </button>
            <p>
              Already have an account?{" "}
              <Link
                to={"/?login"}
                onClick={() => {props.setPage("login")}}
              >
                <span className="underline cursor-pointer">Sign In</span>
              </Link>
            </p>
          </div>
        </form>
    </React.Fragment>
  )
}
