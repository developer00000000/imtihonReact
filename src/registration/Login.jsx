import useRegister from "./useRegister";
import { Link } from "react-router-dom";


  const Login = () => {
  const {
    firstName,
    password,
    handlePasswordChange,
    handleFirstNameChange,
    handleSubmit,
    error,
  } = useRegister();

  

  return (
    <div className="login-form">
      <img src='' alt="" />
      <h3>Log in to YouTube</h3>
      <form  onSubmit={(e) => handleSubmit(e, true)}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Name"/>
        {error.firstName && <p>{error.firstName}</p>}
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password} placeholder="Password"
        />
        {error.password && <p>{error.password}</p>}
        <button type="submit">Log In</button>
      </form>
      <div className="logIn">
        <span className="login">Forgot password?</span>
        <span><Link to='/register' className="login">Sign up to YouTube</Link></span>
      </div>
    </div>
  );
};
export default Login