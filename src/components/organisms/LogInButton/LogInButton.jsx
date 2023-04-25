import { useState } from "react";

const LogInButton = ({ text }) => {
  const [showLogInForm, setShowLogInForm] = useState(false);

  const handleButtonClick = () => {
    setShowLogInForm(true);
  };

  return (
    <div>
      {!showLogInForm && (
        <button color="primary" onClick={handleButtonClick}>
          Log In
        </button>
      )}

      {showLogInForm && <LogInForm />}
    </div>
  );
};

export default LogInButton;
