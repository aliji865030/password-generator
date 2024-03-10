// App.js
import React from "react";
import PasswordGenerator from "./../src/components/PasswordGenerator";

function App() {
  return (
    <div
      className="text-white"
      style={{
        // backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1700502264441-cf38978031fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PasswordGenerator />
    </div>
  );
}

export default App;
