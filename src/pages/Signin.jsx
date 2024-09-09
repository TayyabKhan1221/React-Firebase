import { Input, Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result=>", result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User=>", user);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("err=>", errorCode, errorMessage);

        // ...
      });
  };
  return (
    <div className="my-10 ">
      <form className="flex flex-col items-center">
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
        <Button color="primary">Sign In</Button>
        <h1 className="text-center my-10">or</h1>
        <Button onClick={handleSignInWithGoogle} color="primary">
          Sign In With Google
        </Button>
      </form>
    </div>
  );
}
export default Signin;
