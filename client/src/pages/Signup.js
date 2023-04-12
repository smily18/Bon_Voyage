import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName, lastName, gender, dob, email, password)
    await signup(firstName, lastName, gender, dob, email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>First Name :</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        vaule={firstName}
      />

      <label>Last Name :</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        vaule={lastName}
      />

      <label>Email :</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        vaule={email}
      />

      <label>Gender:</label>
      <div className="rad">
        <input type="radio" value="Male" name="gender" onChange={(e) => setGender(e.target.value)}/> Male
        <input type="radio" value="Female" name="gender" onChange={(e) => setGender(e.target.value)}/> Female
        <input type="radio" value="Other" name="gender" onChange={(e) => setGender(e.target.value)}/> Other
      </div>

      <label>Date of Birth :</label>
      <input
        type="text"
        onChange={(e) => setDob(e.target.value)}
        vaule={dob}
        placeholder="eg:19/04/2002"
      />

      <label>Password :</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        vaule={password}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
