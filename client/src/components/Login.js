import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const defaultValues = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
    error: "",
  };

  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    setValues({
      credentials: {
        ...values.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", {
        username: values.credentials.username,
        password: values.credentials.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblesPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={values.credentials.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={values.credentials.password}
          placeholder="password"
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
