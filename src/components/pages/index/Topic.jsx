import React from "react";
import "../../../index.css";
import { topic, topicImage } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, EffectCards]);

const Topic = () => {
  return (
    <>
      <section id="eventDetail" className=" bg-slate-50 dark:bg-slate-800">
        <div className="container flex flex-wrap h-auto  mx-auto">
          <div className="lg:w-full w-full p-12 lg:px-48 order-last">
            <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 1000 }} loop pagination={{ clickable: true }} effect="cards" className="mySwiper">
              {topicImage.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.src} alt={image.alt} className="rounded-xl" />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-center mt-4">
              need to download the schedule ?{" "}
              <a href="#" className="underline font-bold text-indigo-600" onClick={() => window.open("/file/Comsnets Workshop - Bali 2023 Daily Schedule.pdf", "_blank")}>
                click here !
              </a>
            </p>
          </div>
          <div className="lg:w-full py-5">
            <div className="container">
              {topic.map((data) => (
                <>
                  <div className="mt-8">
                    <div className="mx-auto">
                      {/* <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6> */}
                      <h1 className="uppercase font-bold text-center text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="md:w-10/12 mx-auto text-center text-slate-500 dark:text-slate-400">
                      <p className="event-description mt-12 my-8 mx-4 lg:mx-0 ">
                        {data.desc1}
                        <br /> <br />
                        {data.desc2}
                        <br /> <br />
                        {data.desc3}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topic;
