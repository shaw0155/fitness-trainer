import ContactForm from "../components/contact/ContactForm";
import Header from "../components/contact/ContactHeader";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-body">
        <div className="form-container">
          <h1 className="contact-container-title">contact us</h1>
          <ContactForm />
        </div>
        <div className="right">
          <div className="address-container">
            <h1 className="contact-container-title">Address</h1>
            <p> this my address QQQXX</p>

            <hr className="right-line" />
          </div>
          <div className="right-down">
            <div>
              <h1 className="contact-container-title">Telephone</h1>
              <p>this my Telephone QQQXX</p>
            </div>
            <div>
              <h1 className="contact-container-title">email</h1>
              <p>this my email QQQXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
