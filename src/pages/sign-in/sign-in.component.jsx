import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.styles.scss";

async function loginUser(username, password) {
  const request_body = {
    username: username,
    password: password,
  };

  return fetch("https://api.extremecloudiq.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request_body),
  })
    .then((data) => data.json())
    .then((data) => (data["access_token"] ? data["access_token"] : null));
}

export default function SignIn({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    console.log("Received token: ", token);
    setToken(token);
  };

  return (
    <div className="sign-in">
      {/* <h2>I already have an account</h2> */}
      <h2>Sign in with your XIQ email and password</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="password"
          required
        />
        <div className="custom-button">
          <button type="submit"> Sign in </button>
        </div>
      </form>
    </div>
  );
}

// const SignInPage = ({ onLoginSuccess }) => (
//   <div className="sign-in">
//     <SignIn onLoginSuccess={onLoginSuccess} />
//   </div>
// );

// export default SignInPage;
