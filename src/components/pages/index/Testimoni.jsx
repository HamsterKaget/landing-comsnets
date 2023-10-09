import React from "react";
import "./Testimoni.css"; // Import your CSS file
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonies = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "~ John Doe",
    },
    {
        quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        author: "~ Jane Smith",
    },
    {
        quote: "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
        author: "~ Eckhart Tolle",
    }
];
  

const Testimoni = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };    
    return (
      <>
      <section id="testimoni" className="bg-slate-50">
      <div className="container mx-auto p-4">
        <div className="my-8">
          <div className="md:w-8/12 mx-auto text-center">
            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Testimonies</h1>
            <p className="text-slate-500 mt-2 mb-6">These are our testimonies.</p>
          </div>
        </div>
        <div className="testimoni-containers">
        <div className="testimoni-carousel">
        <Slider {...settings}>
        {testimonies.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="quote">{testimonial.quote}</div>
            <div className="author">{testimonial.author}</div>
          </div>
        ))}
    </Slider>
    </div>
    </div>
    </div>
      </section>
      </>
    );
  };
  
  export default Testimoni;
  