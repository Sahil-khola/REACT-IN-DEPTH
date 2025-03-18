import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    alert(`
            name = ${name}
            email = ${email}
            password = ${password}
            `);
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={handelSubmit}>
        <div>
          Name :-{" "}
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          Email :-{" "}
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          Password :-{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
