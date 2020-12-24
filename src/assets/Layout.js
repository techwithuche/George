import Head from 'next/head'


const Layout = (props) => (
	<div>
        <Head>
        


        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="/fonts/icomoon/style.css"></link>
        <link rel="stylesheet" href="/style.css"/>
        <link rel="stylesheet" type="text/css" href="/login/util.css"/>
        <link rel="stylesheet" type="text/css" href="/login/main.css"/>
        <link  rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link  rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <script src="/__/firebase/8.2.1/firebase-app.js"></script>
        <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
        </Head>
       
        {props.children}
        
    </div>
);

export default Layout