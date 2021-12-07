import "./home.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
function HomePage({ setActiveStep }) {
  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    email: yup
      .string("Enter Email")
      .email("Enter a valid email")
      .required("Email is required"),
    pan: yup.string("Enter PAN").required("PAN is required"),
    aadhar: yup.number("Enter Your Aadhar").required("Aadhar is required"),
    afhn: yup
      .string("Enter Applicant's Husband/Father name")
      .required("Name is required"),
    mn: yup.string("Enter mother's name").required("Mother's name is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pan: "",
      aadhar: "",
      afhn: "",
      mn: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setActiveStep((activeStep) => activeStep + 1);
    },
  });

  // console.log(formik.values);
  return (
    <>
      <form className="homeP" onSubmit={formik.handleSubmit}>
        <TextField
          id="text"
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        <TextField
          id="text"
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          id="text"
          label="Pan"
          name="pan"
          value={formik.values.pan}
          onChange={formik.handleChange}
          error={formik.touched.pan && Boolean(formik.errors.pan)}
        />
        <TextField
          id="text"
          label="Aadhar"
          name="aadhar"
          value={formik.values.aadhar}
          onChange={formik.handleChange}
          error={formik.touched.aadhar && Boolean(formik.errors.aadhar)}
        />
        <TextField
          id="text"
          label="Applicant's Father/Husband Name"
          name="afhn"
          value={formik.values.afhn}
          onChange={formik.handleChange}
          error={formik.touched.afhn && Boolean(formik.errors.afhn)}
        />
        <TextField
          id="text"
          label="Mother's Name"
          name="mn"
          value={formik.values.mn}
          onChange={formik.handleChange}
          error={formik.touched.mn && Boolean(formik.errors.mn)}
        />
        <hr />
        <div className="btn">
          <Button variant="contained" disabled>Back</Button>
          <Button variant="contained" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default HomePage;
