import React, { useRef, useState } from "react";
import TextInput from "../../InputField/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router";
import loginApi from "../../Api/Auth/loginApi";

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(0);
  const handleLogin = () => {
    if (userNameRef.current?.value == "") {
      setErr(1);
    } else if (passwordRef.current?.value == "") {
      setErr(2);
    } else {
      setErr(0);
      loginApi(
        {
          userName: userNameRef.current?.value,
          password: passwordRef.current?.value,
        },
        navigate,
        setErr
      );
    }
  };

  return (
    <div className="text-2xl ">
      <div className="text-2xl font-extrabold text-orange-500 text-center">
        Login
      </div>
      <div>
        <TextInput
          err={err == 1 && true}
          label={"User Name"}
          placeholder={"Enter your User Name"}
          errormessage={"Please provide your valid user name"}
          ref={userNameRef}
        />
        <TextInput
          err={err == 1 && true}
          label={"Password"}
          placeholder={"Enter your Password"}
          errormessage={"Please provide your valid password"}
          ref={passwordRef}
        />
      </div>
      <div>
        <OrangeButton title={"Login"} onClick={() => handleLogin()} />
      </div>
      {err == 3 && (
        <p className="text-2xl text-red-500 text-center">
          Internal server error
        </p>
      )}
    </div>
  );
};

export default Login;
