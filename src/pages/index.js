import AuthenticationLayout from "@/components/AuthenticationLayout";
import { Button, Input } from "@/components/Elements";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  return (
    <AuthenticationLayout>
      <div className=" flex flex-col  px-6 w-full max-w-md">
        <h4 className="mb-8 text-lg italic font-medium"> CITY GUIDE</h4>
        <Formik
          initialValues={{ did: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            let james = values.did;
            // try {
            //   const { web5, did: james } = await Web5.connect();
            //   router.push("/home");
            //   console.log("Connected to web5:", web5);
            //   console.log("did", did);
            // } catch (error) {
            //   console.error("Error connecting to web5:", error);
            // } finally {
            //   setSubmitting(false);
            // }
          }}
        >
          {({ isSubmitting, handleChange, handleBlur }) => (
            <Form className="flex flex-col gap-y-6">
              <Input
                label="DID"
                name="did"
                placeholder="did:"
                onChange={handleChange}
                onBlur={handleBlur}
              ></Input>
              <p>
                Don't have a DID?{" "}
                <span
                  onClick={() => router.push("/signup")}
                  className="underline"
                >
                  Sign up
                </span>
              </p>

              <Button disabled={isSubmitting}>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthenticationLayout>
  );
}
