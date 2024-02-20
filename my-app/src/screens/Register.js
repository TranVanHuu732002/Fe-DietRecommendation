import React, { useEffect, useState } from "react";

function Login() {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container w-50 my-3 border rounded">
        <form className="p-5" onSubmit={submitHandler}>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              User Name
            </label>
            <input
              type="text"
              id="form2Example1"
              class="form-control"
              placeholder="Enter user name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Email address
            </label>
            <input
              type="email"
              id="form2Example2"
              class="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example3">
              Password
            </label>
            <input
              type="password"
              id="form2Example3"
              class="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="row mb-4 text-center">
            <p>
              I Have Acount?
              <a href="/login" className="link mx-2">
                Login
              </a>
            </p>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4 w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
