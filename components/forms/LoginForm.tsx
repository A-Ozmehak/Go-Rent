import { Formik } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import signIn from "../../utils/loginFunc";
import TextInput from "../inputs/TextInput";

const LoginForm = () => {
  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Fyll i din email adress";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Ogiltig email adress";
    }

    return error;
  };

  return (
    <Box>
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
                validate={validateEmail}
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
                    error = "Lösenordet måste vara minst 6 tecken";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Text>Glömt ditt lösenord?</Text>
            <Center py="1rem">
              <Button variant="Primary" type="submit">
                Logga in
              </Button>
            </Center>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
