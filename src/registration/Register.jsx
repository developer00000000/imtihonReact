import useRegister from "./useRegister";
import { Link } from "react-router-dom";
  const Register = () => {

    const {firstName,email,password,confirmPassword,error,handleSubmit,handleFirstNameChange,
        handleEmailChange,handlePasswordChange,handleConfirmPasswordChange}=useRegister();

  return (
    <div className="register-twitter">
       <div className="twitter-img" ><img src='' alt="" /></div>
       <form className="form-register" onSubmit={handleSubmit}>
        <h3 className="form-text">Create an account</h3>
         <input className="input" type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Name"/>
         {error.firstName && <p>{error.firstName}</p>}
         <input className="input" type="email" onChange={handleEmailChange} value={email} placeholder="Email"/>
         {error.email && <p>{error.email}</p>}
         <input className="input" type="password" onChange={handlePasswordChange} value={password} placeholder="Password"/>
         {error.password && <p>{error.password}</p>}
         <input className="input" type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} placeholder="Confirm password"/>
         {error.confirmPassword && <p>{error.confirmPassword}</p>}
         <span><Link to='/login' className="login">I have login</Link></span>
         <button type="submit">Next</button>
       </form>
    </div>
  )
}
export default Register