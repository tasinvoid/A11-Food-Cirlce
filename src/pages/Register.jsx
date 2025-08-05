import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser, googleUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  function handleRegisterBtn(e) {
    const notifySuccess = () => toast("Successfully Logged In");
    const notifyUnsuccess = () => toast("Couldn't Logged In");
    e.preventDefault();
    setErrorMsg(null);
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    //  email pass auth
    const { email, password, name, photoURL } = userData;
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        user.displayName = name;
        user.photoURL = photoURL;
        notifySuccess();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        // ..
        notifyUnsuccess();
      });
  }
  function handleGoogleBtn() {
    googleUser()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
      });
  }
  return (
    <div className="flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="hero-content flex-col lg:flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-yellow-500">Register now!</h1>
        </div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterBtn}>
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                name="name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Photo URL"
                name="photoURL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$"
                title="Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter."
              ></input>

              <div className="mt-5">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div className="mt-5 text-red-400">{errorMsg}</div>
              <div className="flex flex-col gap-5">
                <button className="btn btn-neutral mt-4">Register</button>
                <Link to={"/logIn"}>
                  {" "}
                  <button className="btn btn-neutral mt-4 w-full">
                    Log In
                  </button>
                </Link>

                {/* Google */}
              </div>
            </form>
            <button
              onClick={handleGoogleBtn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
