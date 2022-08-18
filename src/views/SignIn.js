import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector, fetchUser } from "../features/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(authSelector);

  useEffect(() => {
    if (user) {
      return navigate("/home");
    }
  }, [user]);

  const [userData, setUserData] = useState({
    user_email: "",
    user_password: "",
  });
  console.log(userData);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const loggedUser = {
      ...userData,
      [name]: value,
    };

    setUserData(loggedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_email: userData.email,
      user_password: userData.password,
    };

    dispatch(fetchUser(data));
  };

  return (
    <div className="grow flex flex-col justify-center items-center space-y-6">
      <span className="text-white text-3xl font-bold">Login</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-white w-56 space-y-2"
      >
        <label htmlFor="email" className=" text-lg">
          email
        </label>
        <input
          type="text"
          name="email"
          value={userData.user_email}
          onChange={handleChange}
          className="rounded-xl bg-gray-900 outline-none p-2"
        />
        <label htmlFor="password" className="text-lg">
          password
        </label>
        <input
          type="password"
          name="password"
          value={userData.user_password}
          onChange={handleChange}
          className="rounded-xl bg-gray-900 outline-none p-2"
        />
        <button
          type="submit"
          className="h-10 w-40 font-semibold text-md rounded-md bg-cyan-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
