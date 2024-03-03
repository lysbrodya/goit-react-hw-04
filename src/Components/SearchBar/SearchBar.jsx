import { Formik, Form, Field } from "formik";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSearch }) {
  return (
    <header className={css.clheader}>
      {" "}
      <Toaster />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
          if (values.query === "") {
            return toast.error("enter your request");
          }
        }}
      >
        <Form className={css.form}>
          <Field
            name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
