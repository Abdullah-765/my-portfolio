import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
});
