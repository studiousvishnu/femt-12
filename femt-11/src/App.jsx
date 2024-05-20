/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pininterest from "./assets/icon-pinterest.svg";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";
import "./App.css";
import drawers from "./assets/drawers.jpg";
import avatar from "./assets/avatar-michelle.jpg";
import share from "./assets/icon-share.svg";

const App = () => {
  useEffect(() => {
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  }, []);

  return (
    <div>
      <div className="container min-vw-100 min-vh-100 d-flex justify-content-center align-items-center p-4 ">
        <div className="row bg-white  rounded-3 rounded-lg-0" style={{ maxWidth: "750px" }}>
          <div className="col-md-6 ps-0 pe-0">
            <div className="img-container  ">
              <img  className=" rounded-start-3 bg-pic" src={drawers} style={{ width: "100%" }} alt="Drawers" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h5>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h5>
            <p>
              {`Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.`}
            </p>
            <div className="footer d-flex justify-content-between">
              <div className="author d-flex">
                <div className="author-img">
                  <img
                    src={avatar}
                    className="w-100 rounded-circle pe-3"
                    style={{ height: "50px" }}
                    alt="Michelle Appleton"
                  />
                </div>
                <div className="author-name">
                  <div>Michelle Appleton</div>
                  <div>Jun 20, 2019</div>
                </div>
              </div>
              <div
                className="send rounded-circle my-2 px-2 d-flex justify-content-center align-items-center"
                style={{ background: "#eef1fa" }}
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-trigger="focus"
                data-bs-html="true"
                data-bs-content={`<div class="social-media-container d-flex justify-content-center gap-3">
                  <div class="text-white  share">SHARE</div>
                  <img class="  " style="height: 25px;" src="${facebook}" alt="fb" />
                  <img class="  " style="height: 25px;" src="${twitter}" alt="twitter" />
                  <img class="  " style="height: 25px;" src="${pininterest}" alt="pinterest" />
                </div>`}
                data-bs-custom-class="custom-popover"
                tabIndex="0" // Makes the div focusable
              >
                <img src={share} alt="Share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
