import React from 'react';

const LoginForm = ({ handleSubmit, handleChange }) => (
  <div className="w-full max-w-xs pt-10 pb-10 m-auto">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => {handleSubmit(e)}}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email-address">
            Email Address
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="email" onChange={(e) => { handleChange(e); }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email-address" type="text" placeholder="adam@alliedhealth.com" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="password" onChange={(e) => { handleChange(e); }} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-username" type="password" placeholder="******************" />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-2/3">
          <button onClick={(e) => {handleSubmit(e)}} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Sign In
          </button>
        </div>
        <div className="md:w-1/3">
          <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-puple-800" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </form>
  </div>
);

export default LoginForm;
