import React from "react";
import './style.css';

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
 
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
<table align="center">
     <tr> <label>
        <td>Email:</td>
        <td><input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required /></td>
      </label></tr><br />

     <tr> <label>
        <td>Password:</td>
        <td><input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required /></td>
      </label></tr><br />


      <tr><label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label></tr><br />
	  
	        <button>Submit</button>
	  <demo/>
	  </table>

    </form>

  );
}