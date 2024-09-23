import React, { useState } from "react";
import { register as registerService } from "../services/httpService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputFormField from "../components/Input";
import {signUp, goToSignInPage, errorOccurred, regSuccessful, loginInfo} from '../constants/general';

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerService(email, password);
      alert(regSuccessful);
      navigate("/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.error || errorOccurred);
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="p-4">
        <h5>{loginInfo}</h5>
        <h2 className="text-2xl">Sign Up</h2>
        <InputFormField setEmail={setEmail} setPassword={setPassword} email={email} password={password} />

        <button className="bg-blue-500 text-white p-2 mt-2 mr-2" type="submit">
          {signUp}
        </button>
        <button className="mx-auto bg-blue-500 text-white p-2 mt-2" type="submit" onClick={() => navigate('/signin')}>
          {goToSignInPage}
        </button>
      </form>
    </>
  );
};

export default SignUp;
