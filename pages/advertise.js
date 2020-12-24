import Head from 'next/head'
import Advertise from '../src/containers/static/advertise'



const Meta = () => (
<div>
  <Head>
    <title>Ajeboblog | Advertise</title>
    <meta
    key="description"
    name="description"
    content=""
    />
  </Head>
</div>
)


function Index() {

  return(
   <div>
   <Meta/>
   <Advertise/>
 
 </div>
   
    
 );
  }
 
 export default Index