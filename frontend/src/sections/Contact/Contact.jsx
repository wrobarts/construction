import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact = props => {
    return (
        <section ref={props.innerRef} className="contact-section-container">
            <div className="contact-triangle"></div>
            <ContactForm />
        </section>
    );
};

export default Contact;