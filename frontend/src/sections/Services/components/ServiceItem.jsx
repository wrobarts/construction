import './ServiceItem.css';

const ServiceItem = props => {
    return (
        <div className="service-item-container">
            <div className="service-item-title-container">
                <h4 className="service-item-title">{props.service.title}</h4>
            </div>
            <p className="service-item-description">{props.service.description}</p>
        </div>
    );
};

export default ServiceItem;