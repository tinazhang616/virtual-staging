import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {};
  return (
    <div>
      <form className="shadow-lg rounded row g-3 px-3 py-5 fs-5 fw-bolder">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={formData.name}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={onChange}
            value={formData.email}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            onChange={onChange}
            value={formData.subject}
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="subject"
            rows="4"
            name="message"
            onChange={onChange}
            value={formData.messgae}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="files" className="form-label">
            Attach Files
          </label>
          <input
            className="form-control"
            name="files"
            type="file"
            id="files"
            onChange={onChange}
            value={formData.files}
            multiple
          />
        </div>

        <div className="col-12 my-5">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
