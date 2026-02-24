import "./Styles/form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form-row" style={{ margin: "50px 50px 30px 50px" }}>
        <div className="form-column half-width">
          <div className="form-label-row">
            <div>Name</div>
            <div className="required">*</div>
          </div>
          <input type="text" className="input" />
        </div>
        <div className="form-column half-width">
          <div className="form-label-row">
            <div>Email</div>
            <div className="required">*</div>
          </div>
          <input type="email" className="input" />
        </div>
      </div>

      <div className="form-row" style={{ margin: "30px 50px" }}>
        <div className="form-column full-width">
          <div className="form-label-row">Subject</div>
          <input type="text" className="input" />
        </div>
      </div>

      <div className="form-row" style={{ margin: "30px 50px" }}>
        <div className="form-column full-width">
          <div className="form-label-row">Message</div>
          <textarea />
        </div>
      </div>

      <div className="form-footer">
        <button className="button">SEND</button>
      </div>
    </div>
  );
};

export default Form;
