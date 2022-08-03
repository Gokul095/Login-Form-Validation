import { Button, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initialValues = {
    email : "",
    name : "",
    password : ""
}

const MaterialForm = () => {
    return (
        <div className="MaterialForm">
        <Formik 
           initialValues={initialValues} 
           onSubmit={(values, formikHelpers) => {
            console.log(values);
            formikHelpers.resetForm();
           }}
           validationSchema={object({
            email: string().required("Please enter email").email("Invalid email"),
            name: string().required("Please enter name").min(2,"Name too short"),
            password: string().required("Please enter password").min(8,"Password should be minimum 8 Characters"),
           })}
           >
          {({errors, isValid, touched, dirty}) => (
            <Form>
                <Field 
                  name="email" 
                  type="email" 
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Email"
                  fullWidth
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                 />
                <p></p>
                <Field 
                  name="name" 
                  type="name" 
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Name"
                  fullWidth
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                />
                <p></p>
                <Field 
                  name="password" 
                  type="password" 
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Password"
                  fullWidth
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                />
                <p></p>
                <Button 
                 type="submit" 
                 variant="contained"
                 color="primary"
                 size="large"
                 disabled={!dirty || !isValid}>
                    Sign Up
                </Button>
            </Form>
          )}
        </Formik>
    </div>
    );
};

export default MaterialForm;