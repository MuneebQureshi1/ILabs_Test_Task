import * as Yup from "yup";
export const AddPostValidationSchema = Yup.object().shape({
  title: Yup.string().required("Post title is required"),
  description: Yup.string().required("Description is required"),
});
