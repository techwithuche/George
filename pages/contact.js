import React, { Component } from 'react'
import Head from "next/head"
import Contact from '../src/containers/admin/contact'


const Meta = () => (
<div>
  <Head>
    <title>Ajeboblog | ContactUs</title>
    <meta
    key="description"
    name="description"
    content="Get in contact with us in our various channels to share news tips, information, photos about a news story or press release with our editors"
    />
  </Head>
</div>
)

function Index() {

  return(
   <div>
   <Meta/>
   <Contact/>
 
 </div>
   
    
 );
  }
 
 export default Index





