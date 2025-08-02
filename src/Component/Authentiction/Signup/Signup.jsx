import React, { useState } from "react";
import ContactUser from "./Component/ContactUser";
import AddressUser from "./Component/AddressUser";
import PasswordUser from "./Component/PasswordUser";

const Signup = ({ setScreen }) => {
  const [userDetails, setUserDetails] = useState({
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
      <div className="text-2xl font-extrabold text-orange-500 text-center">
        Signup
      </div>
      <div>
        {stage == 0 && (
          <ContactUser
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setStage={setStage}
          />
        )}
        {stage == 1 && (
          <AddressUser
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setStage={setStage}
          />
        )}
        {stage == 2 && (
          <PasswordUser
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setStage={setStage}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
