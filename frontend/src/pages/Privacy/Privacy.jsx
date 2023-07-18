import Header from '../../components/Header';
import Footer from '../../sections/Footer/Footer';
import privacy from './util/privacy';
import './Privacy.css';

const Privacy = () => {
    return (
        <>
            <Header />
            <section className="privacy">
                {privacy.map((paragraph, index) =>
                    <div key={index} className="privacy-section-container">
                        <h5 className="privacy-section-title">{paragraph.title}</h5>
                        {paragraph.text.map((item, indexItem) =>
                            <p className="privacy-section-text" key={indexItem}>{item.textItem}</p>
                        )}
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Privacy;