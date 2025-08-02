import React, { useState } from "react";
import ContactUser from "./Component/ContactUser";
import AddressUser from "./Component/AddressUser";
import PasswordUser from "./Component/PasswordUser";

const Signup = ({ setScreen }) => {
  const [userDetail, setUserDetail] = useState({
    userName: "",
    contactNumber: "",
    email: "",
    password: "",
    city: "",
    street: "",
    deliveryDescription: "",
  });
  const [stage, setStage] = useState(0);
  return (
    <div className="p-3">
      <div className="text-xl font-bold text-orange-500 text-center">
        SignUp
      </div>
      <div>
        {stage == 0 && (
          <ContactUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
        {stage == 1 && (
          <AddressUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
        {stage == 2 && (
          <PasswordUser
            userDetail={userDetail}
            setUserDetail={setUserDetail}
            setStage={setStage}
          />
        )}
      </div>
      <div className="text-xs text-center font-medium text-gray-500 my-4">
        Already have an account ?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setScreen(false)}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
