import React from "react";
const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-xl-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have<b> Questions?</b>
              </h1>
              <hr className="w-25 mx-auto"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div class="mb-3">
                  <label for="Name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label for="Email" class="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label For="" className="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Send Message <i className="fa fa-paper-plane ms-2 "></i>
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <img
                width={10}
                height={300}
                src="https://img.freepik.com/premium-vector/man-operator-flat-style_87621-1039.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais"
                alt="Contact"
                className="w-75"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;