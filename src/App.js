// App.js
import React from "react";
import PasswordGenerator from "./../src/components/PasswordGenerator";

function App() {
  return (
    <div
      className=""
      style={{
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      }}
    >
      <PasswordGenerator />
    </div>
  );
}

export default App;
