import RegisterForm from "./RegisterForm";
import Display from "./Display";

import { useState } from "react";

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return <>
    <RegisterForm email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword} />
    <Display email={email}
        password={password}
    />
  </>
}