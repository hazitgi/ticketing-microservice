import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "POST",
    body: {
      email,
      password,
    },
  });

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      await doRequest();
      alert("Signed up successfully");
      Router.push("/");
    } catch (err) {}
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
