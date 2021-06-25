import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleContact = (event) => {
    const { name, value } = event.target;
    if (name === "fName") {
      setContact((prevValue) => {
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      });
    }
    if (name === "lName") {
      setContact((prevValue) => {
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      });
    }
    if (name === "email") {
      setContact((prevValue) => {
        return { fName: prevValue.fName, lName: prevValue.lName, email: value };
      });
    }
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
