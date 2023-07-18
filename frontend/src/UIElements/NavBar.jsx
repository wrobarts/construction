import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };

    return (
        <ul className='navbar'>
            <>
                <li onClick={() => scrollToHandler("services")}>
                    <p>Services</p>
                </li>
                <li onClick={() => scrollToHandler("projects")}>
                    <p>Projects</p>
                </li>
                <li onClick={() => scrollToHandler("testimonials")}>
                    <p>Testimonials</p>
                </li>
                <li onClick={() => scrollToHandler("contact")}>
                    <p>Contact</p>
                </li>
            </>
        </ul>
    );
};

export default NavBar;