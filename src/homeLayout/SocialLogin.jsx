import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5 text-2xl mt-10 ">Login With</h2>
      <div className="space-y-3 ">
        <button className="btn btn-outline btn-secondary w-full text-lg">
          <FcGoogle size={30} />
          Login with Googles
        </button>
        <button className="btn btn-outline w-full text-lg">
          <FaGithub size={30} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
