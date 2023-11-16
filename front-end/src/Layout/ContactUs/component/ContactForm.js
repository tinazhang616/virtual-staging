import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission, including file upload
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("file", data.file[0]);

    try {
      const response = await axios.post(
        "http://localhost:5001/contact-us",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server response:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="row g-3 shadow-lg rounded m-3 p-5 fs-5"
    >
      <div className="col-12">
        <label className="form-label">Name:</label>
        <input className="form-control" {...register("name")} />
      </div>
      <div className="col-12">
        <label className="form-label">Email:</label>
        <input className="form-control" {...register("email")} />
      </div>
      <div className="col-12">
        <label className="form-label">Subject:</label>
        <input className="form-control" {...register("subject")} />
      </div>
      <div className="col-12">
        <label className="form-label">Message:</label>
        <textarea className="form-control" rows="5" {...register("message")} />
      </div>
      <div className="col-12">
        <label className="form-label">File:</label>
        <input
          className="form-control"
          type="file"
          onChange={(e) => setValue("file", e.target.files)}
        />
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100 mt-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
