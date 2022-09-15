import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>

            <div className="footer-logo">
                <img src="../../images/welp2.jpg" 
                    alt ="Logo">
                 </img>
            </div>
            
            <div className="footer-social">
                <a href="https://www.instagram.com">
                  <i className="icon ion-social-instagram" />
                </a>
                <a href="https://www.twitter.com">
                  <i className="icon ion-social-twitter" />
                </a>
                <a href="https://www.facebook.com">
                  <i className="icon ion-social-facebook" />
                </a>
              <p className="copyright">SOCIAL-POINT © 2022</p>
            </div>

            <div className="footer-info">
                <p>
                Phone: (678) 123-4567
                <br/>
                socialpoint@gmail.com
                <br/>
                1000 Road Dr. Atlanta, GA.
                </p>
            </div>

        </footer> 
        );
    }
}

export default Footer;