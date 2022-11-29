import { Formik } from "formik";
import {
  Button, FormControl,
  FormErrorMessage,
  FormLabel,
  Input, Text
} from "@chakra-ui/react";
import signIn from "../../utils/loginFunc";
import TextInput from "../inputs/TextInput";


const LoginForm = () => {
  const btnDiv = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          signIn(values);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextInput
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value.length < 5) {
                    error = "Skriv in en email";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Lösenord</FormLabel>
              <TextInput
                as={Input}
                id="password"
                name="password"
                type="password"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value.length < 5) {
                    error = "Lösenordet måste vara längre än 6 karaktärer";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Text>Glömt ditt lösenord?</Text>
            <div style={btnDiv}>
              <Button variant="Primary" type="submit">
                Logga in
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
