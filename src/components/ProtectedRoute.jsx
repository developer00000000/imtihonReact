import { useEffect } from "react";
import useRegister from "../registration/useRegister";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { logged } = useRegister();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("logged") ||
      localStorage.getItem("logged") == false
    )
      navigate("/register");
  }, [logged]);

  return children;
}

export default ProtectedRoute;