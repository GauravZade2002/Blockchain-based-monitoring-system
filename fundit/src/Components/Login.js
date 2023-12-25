
import React from "react";
function Login() {
  return (
    <div className="container">
    <div className="login">
      <h1 >Login page</h1> <br />
      <form action="">
        <br />
        <label htmlFor="UserID">Username :</label> <br />
        <input type="text" placeholder="Enter your Username" />
        <br />
        <label htmlFor="Password">Password :</label> <br />
        <input type="Password" placeholder="Enter your password" />
        <br />
        <input type="button" value="submit" />
        
      </form>
    </div>
    </div>
  );
}

export default Login;
