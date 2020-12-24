import Head from "next/head"
import Policy from '../src/containers/static/policy'


const Meta = () => (
<div>
  <Head>
    <title>Ajeboblog | Policy</title>
    <meta
    key="description"
    name="description"
    content="At Ajeboblog, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is recieved and collected by Ajeboblog and how it is used."
    />
  </Head>
</div>
)

function Index() {

  return(
   <div>
   <Meta/>
   <Policy/>
 
 </div>
   
    
 );
  }
 
 export default Index