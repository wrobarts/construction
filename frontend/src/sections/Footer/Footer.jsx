import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2 className="footer-logo">APEX BUILDERS</h2>
                    <p className="footer-subtext">
                        Dependable construction solutions for every project
                    </p>
                </div>
                <div className="footer-top-right">
                    <h5 className="footer-subheading">Main Office</h5>
                    <p className="footer-text">Phone: [Phone Number]</p>
                    <p className="footer-text">Email: [Email Address]</p>
                    <p className="footer-text">Location: [Location]</p>
                </div>
            </div>
            <hr></hr>
            <div className="footer-bottom-container">
                <p className="footer-bottom">Apex Builders @ 2023</p>
                <p className="footer-bottom">Website by Weston Robarts</p>
                <Link to="privacy" className="footer-bottom">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;