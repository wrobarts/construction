import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import testimonials from './util/testimonials';
import 'swiper/swiper.min.css';
import './Testimonials.css';

const Testimonials = props => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState();

    const handleSwipe = direction => {
        if (swiper) {
            if (direction === 'left') {
                swiper.slidePrev();
            } else if (direction === 'right') {
                swiper.slideNext();
            }
            console.log(swiper);
        }
    };

    return (
        <section ref={props.innerRef} className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>
            <h5 className="testimonials-subtitle">
                Don't just take our word for it. Listen to what our customers have to say.
            </h5>
            <div className="testimonials-container">
                <div className="swiper-left" onClick={() => handleSwipe("left")}>
                    <p className="swiper-arrow">{"<"}</p>
                </div>
                <div className="swiper-container">
                    <Swiper
                        ref={swiperRef}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={64}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {testimonials.map((testimonial, index) =>
                            <SwiperSlide key={index}>
                                <blockquote className="testimonials-quote">
                                    "{testimonial.quote}"
                                </blockquote>
                                <p className="testimonials-author">- {testimonial.author}</p>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className="swiper-right" onClick={() => handleSwipe("right")}>
                    <p className="swiper-arrow">{">"}</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;