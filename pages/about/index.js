import Head from 'next/head'
import About from '../../src/containers/static/about'


const Meta = () => (
<div>
  <Head>
    <title>Ajeboblog | About</title>
    <meta
    key="description"
    name="description"
    content="An Inspiring, Informative and Entertainment Portal, Welcome to the Ajebo Experience."
    />
  </Head>
</div>
)


function Index() {

 return(
  <div>
  <Meta/>
  <About/>

</div>
  
   
);
 }

export default Index