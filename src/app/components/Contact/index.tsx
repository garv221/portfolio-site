import Form from "./form";
import "./Styles/form.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-inner">
          <div className="contact-heading-row">
            <div className="contact-heading-icon"></div>
            <div className="contact-heading-text">Let's Talk</div>
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
