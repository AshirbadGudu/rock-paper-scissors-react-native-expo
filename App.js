import { useState } from "react";
import { Counter, Welcome } from "./screens";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Welcome");
  return (
    <>
      {currentScreen === "Welcome" ? (
        <Welcome setCurrentScreen={setCurrentScreen} />
      ) : (
        <Counter />
      )}
    </>
  );
}
