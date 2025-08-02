const loginApi = async (userInfo, navigate, setErr) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/login",
    "Post",
    { "contain-type": "application/json" },
    userInfo
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("userDetails", JSON.stringify(response));
  } else {
  }
};
export default loginApi;
