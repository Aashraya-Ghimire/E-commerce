import SecureFetch from "./ApiConfiguration";

const signupApi = async (userDetail, setStage, navigate, setUserDetails) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/signup",
    "Post",
    { "contain-type": "application/json" },
    userDetail
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("userDetails", JSON.stringify(response));
    navigate("/");
  } else {
    setUserDetails({
      userName: "",
      contactNumber: "",
      email: "",
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(0);
  }
};
export default signupApi;
