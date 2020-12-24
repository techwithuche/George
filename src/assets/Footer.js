import React from 'react'
import Subscribe from './subscribe'

function Footer() {
    return (
        <div>
            <Subscribe/>
            <div className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p> Ajebo is a premier site that update with unique and defined 
              content strictly focused on Entertainment, Health, Lifestyle, Tech and Travel. 
              Our main aim is to entertain millions of individual as a whole with content that they can relate to.
              We strive to keep up to the highest blogging integrity and strive to be the best in our own niche.
              As this requires lots of effort on a daily basis, we are always working to give our readers informative and quality
              contents.</p>
          </div>
          <div className="col-md-3 ml-auto">
            <h3 className="footer-heading mb-4">Navigation</h3> 
            <ul className="list-unstyled float-left mr-5">
              <li><a href="/about">About Us</a></li>
              <li><a href="/advertise">Advertise</a></li>
              <li><a href="/policy">Policy</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="list-unstyled float-left">
              <li><a href="/">Home</a></li>
              <li><a href="/entertainment">Entertainment</a></li>
              <li><a href="/lifestyle">Lifestyle</a></li>
              <li><a href="/fashion">Fashion</a></li>
              
			 
            </ul>
          </div>
          <div className="col-md-4">
            

            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <a href="https://web.facebook.com/ajeboblog"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                <a href="https://twitter.com/ajeboblog"><span className="icon-twitter p-2"></span></a>
                <a href="https://www.instagram.com/ajeboblogofficial"><span className="icon-instagram p-2"></span></a>
                <a href="/"><span className="icon-rss p-2"></span></a>
                <a href="/"><span className="icon-envelope p-2"></span></a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>
          
              Copyright &copy; 2020 All rights reserved | AjeboNews
            
              </p>
          </div>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Footer
