import React, { useState } from "react";
import "./LoginPage.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

const LoginPage = () => {
  const [addclass, setaddclass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const Emailchange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const nameChange = (e) => setName(e.target.value);

  const submitregister = (e) => {
    
    if (email === "" || password === "" || name === "")
      alert("Please fill all the details");
  };

  const submitLogin = (e) => {
    
    if (email === "" || password === "")
      alert("Please fill all the details");
  };

  const SSO = (provider) => {
    switch (provider) {
      case "google":
        window.location.href = "https://accounts.google.com/signin";
        break;
      case "facebook":
        window.location.href = "https://www.facebook.com/login";
        break;
      default:
        break;
    }
  };

  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <br></br>
          <label className="data">
            <PersonIcon className="img"/>
            <input type="text" value={name} onChange={nameChange} placeholder="NAME" />
          </label>
          <label className="data">
            <EmailIcon className="img"/>
            <input type="email" value={email} onChange={Emailchange} placeholder="EMAIL" />
          </label>
          <label className="data">
            <KeyIcon className="img"/>
            <input type="password" value={password} onChange={passwordChange} placeholder="PASSWORD" />
          </label>
          <button id="forgot-btn">Forgot password?</button>
          <button type="submit" onClick={submitregister}>REGISTER</button>
          <p>Or Sign-Up With</p>
          <div className="sso-buttons">
            <button className="google-sso circle" onClick={() => SSO("google")}>
              <GoogleIcon/>
            </button>
            <button className="facebook-sso circle" onClick={() => SSO("facebook")}>
              <FacebookIcon/>
            </button>
          </div>
        </form>
      </div>



      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <br></br>
          <label className="data">
            <EmailIcon className="img"/>
            <input type="email" value={email} onChange={Emailchange} placeholder="EMAIL" />
          </label>
          <label className="data">
            <KeyIcon className="img"/>
            <input type="password" value={password} onChange={passwordChange} placeholder="PASSWORD" />
          </label>
          <button id="forgot-btn">Forgot password?</button>
          <button type="submit" onClick={submitLogin}>LOGIN</button>
          <p>Or Login With</p>
          <div className="sso-buttons">
            <button className="google-sso circle" onClick={() => SSO("google")}>
              <GoogleIcon/>
            </button>
            <button className="facebook-sso circle" onClick={() => SSO("facebook")}>
              <FacebookIcon/>
            </button>
          </div>
        </form>
      </div>



      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 id="txt">Welcome Back!</h1>
            <br></br>
            <button className="ghost" id="signIn" onClick={() => setaddclass("")}>
              GO TO LOGIN
            </button>
          </div>


          <div className="overlay-panel overlay-right">
            <h1 id="txt">Join Us</h1>
            <br></br>
            <button className="ghost" id="signUp" onClick={() => setaddclass("right-panel-active")}>
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
