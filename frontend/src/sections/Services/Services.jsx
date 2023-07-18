import ServiceItem from './components/ServiceItem';
import services from './util/services';
import './Services.css';

const Services = props => {
    return (
        <section ref={props.innerRef} className="services-section">
            <h2 className="services-title">Our Services</h2>
            <div className="services-container">
                <div className="services-wrapper">
                    {services.map((service, index) =>
                        <ServiceItem key={index} service={service} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;