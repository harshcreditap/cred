import { Button, TextField } from "@mui/material";
import React from "react";
import "./address.css";
import { useFormik } from "formik";
import * as yup from "yup";
const Address = ({ setActiveStep }) => {
  const validationSchema = yup.object({
    house: yup.string("Required").required("Cannot be empty"),
    street: yup.string("required").required("Cannot be empty"),
    landmark: yup.string("Required").required("Cannot be empty"),
    city: yup.string("Required").required("Cannot be empty"),
    country: yup.string("Required").required("Cannot be empty"),
    pin: yup.string("Required").required("Cannot be empty"),
  });
  const formik = useFormik({
    initialValues: {
      house: "",
      street: "",
      landmark: "",
      city: "",
      country: "",
      pin: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleClick = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };
  const handleIncrement = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };
  // console.log(formik.values);
  return (
    <div className="contain">
      <div className="address">
        <h4>Current Address</h4>
        <form className="add" onSubmit={formik.handleSubmit}>
          <TextField
            className="addText"
            label="House/Door no."
            name="house"
            values={formik.values.house}
            onChange={formik.handleChange}
            error={formik.touched.house && Boolean(formik.errors.house)}
            helperText={formik.touched.house && formik.errors.house}
          />
          <TextField
            className="addText"
            label="Street,Area"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <TextField
            className="addText"
            label="Landmark"
            name="landmark"
            value={formik.values.landmark}
            onChange={formik.handleChange}
            error={formik.touched.landmark && Boolean(formik.errors.landmark)}
            helperText={formik.touched.landmark && formik.errors.landmark}
          />
          <TextField
            className="addText"
            label="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            className="addText"
            label="Country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
            className="addText"
            label="Pincode"
            name="pin"
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
          />
          <div className='btn'>

          <Button variant="contained" onClick={handleClick}>
            Back
          </Button>
          <Button variant="contained" type="submit" onClick={handleIncrement}>
            Next
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
