"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "./RentForm.module.css";

interface RentFormValues {
  username: string;
  email: string;
  bookingDate: string;
  message: string;
}

const initialValues: RentFormValues = {
  username: "",
  email: "",
  bookingDate: "",
  message: "",
};

const RentFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default function RentForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (
    values: RentFormValues,
    { resetForm, setSubmitting }: FormikHelpers<RentFormValues>
  ) => {
    setSubmitting(true);

    setTimeout(() => {
      console.log("Booking submitted:", values);
      resetForm();
      setSubmitting(false);
      setSuccessMessage("Booking submitted successfully!");

      setTimeout(() => setSuccessMessage(""), 3000);
    }, 1000);
  };
    return (
        <div>
            <h2>Book your car now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues} validationSchema={RentFormSchema} onSubmit={handleSubmit}>
                <Form className={styles.form}>
                    <Field type="text" name="username" placeholder='Name*' />
                    <ErrorMessage name="username" component="div" className={styles.error} />
                    <Field type="email" name="email" placeholder='Email*' />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                    <Field type="date" name="bookingDate" placeholder = 'Booking date' />
                    <Field as="textarea" name="message" id="message" rows={3} placeholder = 'Comment' />
                    <button
                        className={styles.buttonRent}
                        type="submit"
                    >Send</button>
                </Form>
            </Formik>
            {successMessage && (
              <div className={styles.successMessage}>{successMessage}</div>
            )}
        </div>
    )
}