import Header from '../../components/Header';
import Home from '../../sections/Home/Home';
import Services from '../../sections/Services/Services';
import Projects from '../../sections/Projects/Projects';
import Testimonials from '../../sections/Testimonials/Testimonials';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../sections/Footer/Footer';
import {useScroll} from '../../hooks/scroll_hook';
import './Main.css';

const Main = () => {
    const {elementsRef, scrollToHandler} = useScroll();

    return (
        <>
            <Header main scrollToHandler={scrollToHandler} />
            <div>
                <Home innerRef={home => elementsRef.current[0] = home} />
                <Services innerRef={services => elementsRef.current[1] = services} />
                <Projects innerRef={projects => elementsRef.current[2] = projects} />
                <Testimonials innerRef={testimonials => elementsRef.current[3] = testimonials} />
                <Contact innerRef={contact => elementsRef.current[4] = contact} />
                <Footer />
            </div>
        </>
    );
};

export default Main;