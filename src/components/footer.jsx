import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="topBox">
          <div className="leftBox">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
            </ul>
          </div>
          <div className="middleBox">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Legacy</a>
              </li>
            </ul>
          </div>
          <div className="rightBox">
            <h3>Careers</h3>
            <ul>
              <li>
                <a href="#">Job openings</a>
              </li>
              <li>
                <a href="#">Employee success</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="midBox">
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="bottomBox">
          <p className="copyright">Company Name © 2022</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
