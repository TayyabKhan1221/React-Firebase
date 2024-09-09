import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="my-10 ">
      <form className="flex flex-col items-center">
      <Input
          isRequired
          type="text"
          size={"lg"}
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          defaultValue="junior@nextui.org"
          className="max-w-xs my-4"
        />
        <Input
          isRequired
          type="email"
          size={"lg"}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          defaultValue="junior@nextui.org"
          className="max-w-xs my-4"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          defaultValue="junior@nextui.org"
          className="max-w-xs my-4"
        />
        <Button  color="primary">Sign Up</Button>
        <h1 className="text-center my-10">or</h1>
        <Button color="primary">Sign Up With Google</Button>
      </form>
    </div>
  );
}

export default SignUp;
