import React, { useEffect, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
    <div className="form-container">
    <h2>Storage Form</h2>
    
      
        <form className="storage-form" onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />{" "}
         
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
       <button> Save</button>
        </form>
      
    </div>
    
    </>

  );
};

export default Form;
