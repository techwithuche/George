import React from 'react'
import Header from '../../../assets/Header'
import Footer from '../../../assets/Footer'

function About() {

    return(
     <div>
       <Header/>
       <div className="site-cover site-cover-sm same-height overlay single-page">
   <div className="container">
   <div className="row same-height justify-content-center">
     <div className="col-md-12 col-lg-10">
       <div className="post-entry text-center">
         <h1 className="">About Us</h1>
         <p className="lead mb-4 text-white">An inspiring and informative entertainment portal, <br/>
         Welcome to the Ajebo Experience.</p>
       </div>
     </div>
   </div>
   </div>
   </div>
   
   
   <div className="site-section bg-light">
   <div className="container">
   <div className="row">
     <div className="col-md-6 order-md-2">
       <img src="images/img_1.jpg" alt="AjeboNews" className="img-fluid"/>
     </div>
     <div className="col-md-5 mr-auto order-md-1">
       <h2>About Us</h2>
       <p>
         Ajebo News is a premier site that update with unique and defined 
         content strictly focused on Entertainment, Health, Lifestyle, Tech and Travel. 
         Our main aim is to entertain millions of individual as a whole with content that they can relate to.
         We strive to keep up to the highest blogging integrity and strive to be the best in our own niche.
         As this requires lots of effort on a daily basis, we are always working to give our readers informative and quality
         contents.
         </p>
       
     </div>
   </div>
   </div>
   </div>
   
   <div className="site-section">
   <div className="container">
   <div className="row mb-5 justify-content-center">
     <div className="col-md-5 text-center">
       <h2>Meet The Team</h2>
       <p></p>
     </div>
   </div>
   <div className="row">
     <div className="col-md-6 col-lg-4 mb-5 text-center">
       <img src="" alt="ajeboblog" className="img-fluid w-50 rounded-circle mb-4"/>
       <h2 className="mb-3 h5">Uche George</h2>
       
   
       <p className="mt-5">
         <a href="/" className="p-3"><span className="icon-facebook"></span></a>
         <a href="/" className="p-3"><span className="icon-twitter"></span></a>
         <a href="/" className="p-3"><span className="icon-linkedin"></span></a>
       </p>
     </div>
   <div className="col-md-6 col-lg-4 mb-5 text-center">
       <img src="" alt="ajeboblog" className="img-fluid w-50 rounded-circle mb-4"/>
       <h2 className="mb-3 h5">Joy Dimba</h2>
       
   
       <p className="mt-5">
         <a href="/" className="p-3"><span className="icon-facebook"></span></a>
         <a href="/" className="p-3"><span className="icon-instagram"></span></a>
         <a href="/" className="p-3"><span className="icon-linkedin"></span></a>
       </p>
     </div>
   
     <div className="col-md-6 col-lg-4 mb-5 text-center">
       <img src="" alt="Ajeboblog" className="img-fluid w-50 rounded-circle mb-4"/>
       <h2 className="mb-3 h5">Femi Adeyemi</h2>
     
   
       <p className="mt-5">
         <a href="/" className="p-3"><span className="icon-facebook"></span></a>
         <a href="/" className="p-3"><span className="icon-instagram"></span></a>
         <a href="/" className="p-3"><span className="icon-twitter"></span></a>
       </p>
     </div>
   </div>
   </div>
   </div>
   <Footer/>
   </div>
     
      
   );
    }
   
   export default About