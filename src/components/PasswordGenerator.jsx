import { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [characters, setCharscters] = useState(8);
  const [includeUppercase, setIncudeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  if(characters===0)setCharscters("")

  function generatePassword() {
    let allCharater = "";

    if (includeUppercase) allCharater += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) allCharater += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) allCharater += "1234567890";
    if (includeSymbols) allCharater += "!@#$%^&*(){}[]|\?/><";
    // console.log(allCharater);
    if (allCharater.length == 0) {
      alert("you have to check atleast one");
      setPassword("");
    } else if (characters < 8 || characters > 15) {
      alert("Length out of mentioned range");
    } else {
      setPassword("");
      let tempPassword = "";
      for (let i = 0; i < characters; i++) {
        let char = allCharater[Math.floor(Math.random() * allCharater.length)];
        tempPassword += char;
      }
      setPassword(tempPassword);
    }
  }

  function copyToClipboard() {
    if (password.length == 0) {
      alert("Password not available");
    } else {
      navigator.clipboard.writeText(password);
      alert("Password copy Done");
    }
  }

  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div
        className="w-11/12 md:w-9/12 p-4 rounded-xl"
        style={{
          // backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
          backgroundImage:"url(https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-bold p-3">
          Password Generator
        </h1>
        <div className="flex items-center gap-3 justify-center">
          <div
            style={{ backgroundColor: "#A9A9A9" }}
            className="text-center h-8 md:h-12 flex justify-center items-center w-11/12 mt-3 rounded-lg "
          >
            <p className="text-white text-xl md:text-3xl">{password}</p>
          </div>
          <div>
            <button onClick={copyToClipboard}>
              <i className="fa-solid fa-copy text-3xl md:text-5xl cursor-pointer hover:text-gray-500"></i>
            </button>
          </div>
        </div>
        <div className="text-center p-5">
          <button
            onClick={generatePassword}
            className="border p-1 px-5 rounded-md bg-green-500 hover:bg-green-700 text-sm sm:text-lg"
          >
            Generate Password
          </button>
        </div>

        <div className="flex  items-center justify-around">
          <div className="flex flex-col p-3 md:p-10 text-xs md:text-sm lg:text-lg">
            <label htmlFor="">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncudeUppercase(e.target.checked)}
              />
              Include Uppercase
            </label>

            <label htmlFor="">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
              Include Lowercase
            </label>

            <label htmlFor="">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Include Numbers
            </label>

            <label htmlFor="">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              Include Symbols
            </label>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-xs md:text-sm lg:text-lg">Password Length</p>
            <input
              type="number"
              value={characters}
              onChange={(e) => setCharscters(Number(e.target.value))}
              className="border border-black w-12 text-center rounded-lg text-black"
            />
            <p className=" text-xs text-red-600">* Between 8-15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
