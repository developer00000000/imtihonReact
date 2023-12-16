import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState({
    firstName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(logged);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event, isLogin) => {
    event.preventDefault();

    let formValid = true;

    const updateError = {
      firstName: firstName ? "" : "FirstName is required",
      email: validateEmail(
        localStorage.getItem("email") ? localStorage.getItem("email") : email
      )
        ? ""
        : "Invalid email address",
      password: validatePassword(password)
        ? ""
        : "6 ta sondan kam bo`lmasligi kerak",
      confirmPassword:
        password ===
        (localStorage.getItem("password")
          ? localStorage.getItem("password")
          : confirmPassword)
          ? ""
          : "Password mos kelmadi",
    };

    Object.keys(updateError).forEach((key) => {
      if (updateError[key]) {
        console.log(updateError[key]);
        formValid = false;
      }
    });

    if (!formValid) {
      setError(updateError);
      return;
    }

    if (!localStorage.getItem("email")) {
      localStorage.setItem("email", email);
    }
    localStorage.setItem("password", password);
    localStorage.setItem("logged", true);

    if (isLogin && localStorage.getItem("logged")) {
      navigate("/library");
      return;
    }
    navigate("/login");
  };

  return {
    firstName,
    email,
    password,
    confirmPassword,
    error,
    logged,
    setLogged,
    handleFirstNameChange: (event) => {
      setFirstName(event.target.value);
      setError({ ...error, firstName: "" });
    },
    handleEmailChange: (event) => {
      setEmail(event.target.value);
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value);
      setError({ ...error, password: "" });
    },
    handleConfirmPasswordChange: (event) => {
      setConfirmPassword(event.target.value);
      setError({ ...error, confirmPassword: "" });
    },
    changeLogged: (value) => {
      setLogged(value);
    },
    handleSubmit,
  };
};
export default useRegister;