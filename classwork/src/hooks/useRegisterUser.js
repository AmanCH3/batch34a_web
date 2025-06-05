// hooks/useRegisterUser.js
import { useState } from "react";
import { registerUserService } from "../services/authService";

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async (formData) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await registerUserService(formData);
      setData(response);

      // ✅ Clear form on success
      setUsername("");
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");

      return response;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    data,
    error,
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  };
};
