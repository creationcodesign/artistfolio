import { useState } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { Link } from "react-router-dom";

const Auth: React.FC = () => {
  const [isLoginAction, setIsLoginAction] = useState<boolean>(true);

  return (
    <div className="auth-page">
      <h1>Authorization </h1>
      {isLoginAction ?
        <Login setIsLoginAction={setIsLoginAction} />
        : <Register setIsLoginAction={setIsLoginAction} />
      }
      <Link to="/" className="auth-link-back">
        Back to Portfolio
      </Link>
    </div>
  );
};

export default Auth;