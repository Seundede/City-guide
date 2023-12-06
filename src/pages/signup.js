import AuthenticationLayout from "@/components/AuthenticationLayout";
import React from "react";
import { Button } from "@/components/Elements";
import { useRouter } from "next/router";


const SignUp = () => {
    const router = useRouter();
    const handleClick =  () => {
      //   const myDid = await Web5.did.create("ion");
      //   console.log(myDid);
       router.push("/home");
    };
  return (
    <AuthenticationLayout>
      <Button onClick={handleClick}>Sign Up</Button>
    </AuthenticationLayout>
  );
};

export default SignUp;
