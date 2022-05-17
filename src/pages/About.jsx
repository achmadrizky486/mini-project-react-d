import React from "react";

const About = () => {
  return (
    <div>
      <>
        <div className="container py-0">
          <div className="row py-0 mt-0 ">
            <div className="col-md-6 mt-5">
              <h1 className="display-5 fw-bolder">TUKU</h1>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident veritatis possimus ducimus hic earum nemo id aperiam
                dicta omnis excepturi dolor numquam, deserunt minima, quasi
                laudantium perferendis doloremque aliquam ad.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://img.freepik.com/free-vector/e-commerce-online-shopping-flat-illustration-suitable-web-banners_210682-45.jpg?w=1060"
                alt="img-about"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
