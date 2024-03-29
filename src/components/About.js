import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.webp?b=1&s=170667a&w=0&k=20&c=OeYLvIbs1nXT4HC5lvYypLWRULv-CarzhMcpPbSIv3M="
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who<b>We</b>Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4 ">
                Hey there! We are a team of six passionate individuals who have
                come together to work on this exciting project. With our diverse
                backgrounds and expertise, we bring a unique perspective to the
                table. Our goal is to create something innovative and impactful
                that will leave a lasting impression. We're dedicated to
                delivering high-quality results and ensuring an exceptional user
                experience. Join us on this journey as we strive to make a
                difference! Let's Quizzz!!!
              </p>
              <button className="btn btn-primary rounded-pill py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;