import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <>
            <Header />
            <section className="thank-you">
                <h2 className="thank-you-title">Thank You!</h2>
                <p className="thank-you-text">
                    We have recieved your email and will get back to you as soon as possible.
                </p>
                <Link to="/" className="thank-you-link">Back Home</Link>
            </section>
        </>
    );
};

export default ThankYou;