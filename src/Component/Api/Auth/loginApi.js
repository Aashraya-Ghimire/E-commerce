import SecureFetch from "./ApiConfiguration";

const loginApi = async (userInfo, navigate, setErr) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/login",
    "Post",
    {
      "content-type": "application/json",
    },
    userInfo
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("userDetail", JSON.stringify(response));
    navigate("/");
  } else {
    setErr(3);
  }
};
export default loginApi;
