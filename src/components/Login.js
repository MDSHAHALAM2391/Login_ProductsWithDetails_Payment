/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const onSubmitForm = () => {
    navigate("/products");
  };
  return (
    <div className="login-wrapper">
      <div class="login-box">
        <h2 className="title">Please login to continue</h2>
        <form
          class="m-t"
          role="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >
          <div class="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              data-ng-pattern="/^\S*$/"
              required
            />
          </div>
          <button
            type="submit"
            class="primary-btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
