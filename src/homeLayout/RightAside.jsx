import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../components/FindUs/FindUs";

const RightAside = () => {
  return (
    <div className="space-y-7">
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightAside;
