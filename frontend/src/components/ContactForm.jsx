import {useHistory} from 'react-router-dom';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import {useForm} from '../hooks/form_hook';
import {VALIDATOR_REQUIRE, VALIDATOR_EMAIL} from '../util/validators';
import './ContactForm.css';

const ContactForm = props => {
    const history = useHistory();

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false
            },
            email: {
                value: "",
                isValid: false
            },
            phone: {
                value: "",
                isValid: false
            },
            address: {
                value: "",
                isValid: false
            },
            message: {
                value: "",
                isValid: false
            }
        },
        false
    );

    const formSubmitHandler = event => {
        event.preventDefault();
        history.push('/thanks');
    };

    return (
        <section className={`contact-section ${props.modal && 'contact-section-modal'}`}>
            {!props.modal && <h2 className="contact-heading">Contact</h2>}
            <h5 className={`contact-subheading ${props.modal && 'contact-subheading-modal'}`}>
                Request a Consultation, or Call  us at [Phone Number]
            </h5>
            <form className="contact-form" onSubmit={formSubmitHandler}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    className="contact-input"
                    onInput={inputHandler}
                />
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter an email."
                    className="contact-input"
                    onInput={inputHandler}
                />
                <Input
                    id="phone"
                    element="input"
                    type="text"
                    label="Phone"
                    placeholder="Enter your phone number"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a phone number."
                    className="contact-input"
                    onInput={inputHandler}
                />
                <Input
                    id="address"
                    element="input"
                    type="text"
                    label="Address"
                    placeholder="Enter your address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter an address."
                    className="contact-input"
                    onInput={inputHandler}
                />
                <Input
                    id="message"
                    element="textarea"
                    type="text"
                    label="Message"
                    placeholder="Enter your message"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a message."
                    className="contact-input"
                    onInput={inputHandler}
                />
                <div className="contact-button-container">
                    <Button disabled={!formState.isValid} big type="submit" className="contact-button">
                        Book a Consultation
                    </Button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;