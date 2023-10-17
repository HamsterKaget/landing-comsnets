import React from "react";
import "./Testimoni.css"; // Import your CSS file
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonies = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "~ John Doe",
    job: "~ John Doe",
    image: "~ John Doe",
  },
  {
    quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    author: "~ Jane Smith",
  },
  {
    quote: "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
    author: "~ Eckhart Tolle",
  },
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
      <section id="testimoni" className="bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto p-4 pb-10">
          <div className="mt-8 mb-2">
            <div className="md:w-8/12 mx-auto text-center">
              <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Testimonies</h1>
              <p className="text-slate-500 mt-2 mb-2">These are our testimonies.</p>
            </div>
          </div>
          <div className="testimoni-containers">
            <div className="testimoni-carousel">
              <Slider {...settings}>
                {testimonies.map((testimonial, index) => (
                  <figure class="max-w-screen-md mx-auto text-center">
                    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <blockquote>
                      <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                      </p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                        <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                      </div>
                    </figcaption>
                  </figure>
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
