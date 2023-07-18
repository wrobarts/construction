import React, {useState} from 'react';
import Button from '../../FormElements/Button';
import HomeHero from './components/HomeHero';
import ContactForm from '../../components/ContactForm';
import Modal from '../../UIElements/Modal';
import './Home.css';

const Home = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <>
            <Modal onCancel={toggleModal} show={modalIsOpen}>
                <ContactForm modal />
            </Modal>
            <HomeHero innerRef={props.innerRef}>
                <section className="hero-content-container">
                    <h1 className="hero-content-title">
                        Innovative Construction Solutions for a Changing World
                    </h1>
                    <h3 className="hero-content-subtitle">
                        Trusted Contractors Delivering <strong>Timely</strong> and <strong>Cost-Effective</strong> Solutions
                    </h3>
                    <div className="hero-content-button-container">
                        <Button big className="hero-content-button" onClick={toggleModal}>
                            Book a Consultation
                        </Button>
                    </div>
                </section>
            </HomeHero>
        </>
    );
};

export default Home;