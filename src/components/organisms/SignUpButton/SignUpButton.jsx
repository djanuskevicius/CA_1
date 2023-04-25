import { useState } from "react";
import SignUpForm from "../../molecules/SignUpForm";

const SignUpButton = ({ text }) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleButtonClick = () => {
    setShowSignUpForm(true);
  };

  return (
    <div>
      {!showSignUpForm && (
        <button color="primary" onClick={handleButtonClick}>
          Sign up
        </button>
      )}

      {showSignUpForm && <SignUpForm />}
    </div>
  );
};

export default SignUpButton;
