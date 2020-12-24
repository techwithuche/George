import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import moment from "moment";
import dynamic from 'next/dynamic'
import InstagramEmbed from 'react-instagram-embed'
import { Tweet } from 'react-twitter-widgets'
const PopularPost = dynamic(() => import('../popularpost2'))
const RecentPost = dynamic(() => import('../recent'))
import Head from 'next/head'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-next-router';
import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectOne,
  makeSelectCategory,
  makeSelectLoading,
  makeSelectErrors,
} from './selectors';
import Header from '../../../../assets/Header'
import Footer from '../../../../assets/Footer'


import * as mapDispatchToProps from './actions';


class AddEdit extends React.PureComponent {
  static propTypes = {
    loadOneRequest: PropTypes.func.isRequired,
    loadUsersRequest: PropTypes.func.isRequired,
    loadCategoryRequest: PropTypes.func.isRequired,
    addEditRequest: PropTypes.func.isRequired,
    setOneValue: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    one: PropTypes.object.isRequired,
    category: PropTypes.array,
    tempTag: PropTypes.string,
    push: PropTypes.func.isRequired,
  };



  componentDidMount() {
		this.props.clearOne();
		this.props.clearErrors();
		if (this.props.post) {
		  this.props.loadOneRequest(this.props.post);
		}
	  }



    renderTwitter(one){
      if(one.twitter){
        return(
          <Tweet tweetId={one.twitter} />
        )
      }
    }
    
    renderInstagram(one){
      if(one.instagram){
        return(
          <InstagramEmbed
          url={one.instagram}
          maxWidth = {320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
         />
        )
      }
    }

    renderImage1(one) {
      if (one.images[0]) {
        return (
          <img
            src={one.images[0].data_url}
            alt="ajeboblog"
            className="img-fluid"
          />
        );
      }
      else{
        return(
          <>


          </>
        )
      }
    }
    
    renderImage2(one) {
      if (one.images[1]) {
        return (
          <img
            src={one.images[1].data_url}
            alt="ajeboblog"
            className="img-fluid2"
          />
          
        );
      }
      else{
        return(

          <>

          </>
        )
      }
    }
    
    renderBody1(firstline) {
      if (firstline !== "none") {
        return (
          <>
        <p><h7>{firstline}</h7></p>
        <br/>
        </>
        );
      }
    }

    
    renderBody2(secondline) {
      if (secondline !== "none") {
        return (
          <>
        <p><h7>{secondline}</h7></p>
        <br/>
        </>
        );
      }
    }



    renderBody3(thirdline) {
      if (thirdline !== "none") {
        return (
          <>
        <p><h7>{thirdline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody4(fourthline) {
      if (fourthline !== "none") {
        return (
          <>
        <p><h7>{fourthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody5(fifthline) {
      if (fifthline !== "none") {
        return (
          <>
        <p><h7>{fifthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody6(sixthline) {
      if (sixthline !== "none") {
        return (
          <>
        <p><h7>{sixthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody7(seventhline) {
      if (seventhline !== "none") {
        return (
          <>
        <p><h7>{seventhline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody8(eightline) {
      if (eightline !== "none") {
        return (
          <>
        <p><h7>{eightline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody9(ninethline) {
      if (ninethline !== "none") {
        return (
          <>
        <p><h7>{ninethline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody10(tenthline) {
      if (tenthline !== "none") {
        return (
          <>
        <p><h7>{tenthline}</h7></p>
        <br/>
        </>
        );
      }
    }

  render() {
   
    const {
      classes,
      one,
      category,
      users,
      tempTag,
      tempMetaTag,
      tempMetaKeyword,
      match,
      loading,
      errors,
    } = this.props;
    
    const str = one.description 
    //const str = "Hello world, welcome to the universe. This is an amazing place. To be in."
    var pFirst = str.indexOf(".");
    var pSecond = str.indexOf(".", pFirst + 1)
    var pThird = str.indexOf(".", pSecond + 1)
    var pFourth = str.indexOf(".", pThird + 1)
    var pFifth = str.indexOf(".", pFourth + 1)
    var pSixth = str.indexOf(".", pFifth + 1)
    var pSeventh = str.indexOf(".", pSixth + 1)
    var pEight = str.indexOf(".", pSeventh + 1)
    var pNineth = str.indexOf(".", pEight + 1)
    var pTenth = str.indexOf(".", pNineth + 1)
  
  
    if(pFirst === -1){
      
      var firstline = "none"
      }
      else{
    var firstline = str.substring(0, pFirst + 1);
      }
  
  
    if(pSecond === -1){
      
      var secondline = "none"
      }
      else{
    var secondline = str.substring(pFirst + 1, pSecond + 1)
      }
  
  
   if(pThird <= pSecond ){  
      
      var thirdline = "none"
      var error = "true"
      
      }
      else{
        if(error === "true"){
          var thirdline = "none"
        }
        else{
    var thirdline = str.substring(pSecond + 1, pThird + 1);
        }
      }
  
  
  
    if(pFourth <= pSecond){
    var fourthline = "none"
    var error = "true"
      
    }
    else{
      if(error === "true"){
        var fourthline = "none"
      }
      else{
      var fourthline = str.substring(pThird + 1, pFourth + 1);
    }
  }
  
  
    if(pFifth <= pSecond){
     
      var fifthline = "none"
      var error = "true"
      
      }
      
      else{
        if(error === "true"){
          var fifthline = "none"
        }
        else{
        var fifthline = str.substring(pFourth + 1, pFifth + 1);
        }
      }
  
  
      if(pSixth <= pSecond){
        
        var sixthline = "none"
        var error = "true"
      
        }
        else{
          if(error === "true"){
            var sixthline = "none"
          }
          else{
          var sixthline = str.substring(pFifth + 1, pSixth + 1);
          }
        }
  
  
  
        if(pSeventh <= pSecond){
         
          var seventhline = "none"
          var error = "true"
      
          }
          else{
            if(error === "true"){
              var seventhline = "none"
            }
            else{
            var seventhline = str.substring(pSixth + 1, pSeventh + 1);
            }
          }
  
  
  
          if(pEight <= pSecond){
           
            var eightline = "none"
            var error = "true"
      
            }
            else{
                  if(error === "true"){
                    var eightline = "none"
                  }
                  else{
                  var eightline = str.substring(pSeventh + 1, pEight + 1);
                  }
            }




  
            if(pNineth <= pSecond){
             
              var ninethline = "none"
              var error = "true"
      
              }
              
              else{
                      if(error === "true"){
                      var ninethline = "none"
                    }
                    else{
                      var ninethline = str.substring(pEight + 1, pNineth + 1);
                      }
              }




              if(pTenth <= pSecond){
               
                var tenthline = "none"
                var error = "true"
      
                }
                else{
                  if(error === "true"){
                    var tenthline = "none"
                  }
                  else{
                  var tenthline = str.substring(pNineth + 1, pTenth + 1);
                  }
                }
  
  
    return !this.props.one ? (
    <>
    <Head>
      <div>Post not Found</div>
      </Head>
    </>
    ) :
     (
    <>


<Head>
            <title>{one.title}</title>
            <meta
     
     name="description"
     content={one.body}
     />


    <meta
     property="og:site_name"
     content="Ajeboblog"
     />

<meta
     key="og:type"
     property="og:type"
     content="website"
     />

<meta
     key="og:title"
     name="og:title"
     property="og:title"
     content={one.title}
     />

<meta
     key="og:description"
     name="og:description"
     property="og:description"
     content={one.body}
     />



<meta
     key="og:image"
     name="og:image"
     property="og:image"
     content={one.thumbnail}
     />
            </Head>




<Header/>
    <div className="site-cover site-cover-sm same-height overlay single-page" style = {{backgroundImage: `url("${one.thumbnail}")`}}>
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <span className="post-category text-white bg-success mb-3">{one.category}</span>
                <h1 className="mb-4">{one.title}</h1>
                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={one.avatar} alt={one.author} className="img-fluid"/></figure>
                  <span className="d-inline-block mt-1">By {one.author}</span>
                  <span>&nbsp;-&nbsp; {moment(one.published_on).format('MMM Do YYYY')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
        <section className="site-section py-lg">
        <div className="container">
          
          <div className="row blog-entries element-animate">
  
            <div className="col-md-12 col-lg-8 main-content">
              
              <div className="post-content-body">
              {this.renderBody1(firstline)}
              {this.renderBody2(secondline)}
              {this.renderImage1(one)}
           
              {this.renderBody3(thirdline)}
              {this.renderImage2(one)}
              {this.renderBody4(fourthline)}
              {this.renderBody5(fifthline)}
              {this.renderBody6(sixthline)}
              {this.renderBody7(seventhline)}
              {this.renderBody8(eightline)}
              {this.renderBody9(ninethline)}  
              {this.renderBody10(tenthline)}
              {this.renderTwitter(one)}
                {this.renderInstagram(one)}
              <div className="row mb-5 mt-5">

                <div className="col-md-12">
                
            
              </div>
              
               </div>
              


              </div>
   
             
            </div>
  
            
  
            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="/" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                  </div>
                </form>
              </div>
            <RecentPost/>
              
             
  
             
            </div>
           
  
          </div>
        </div>
      </section> 
      </div>
  <PopularPost/> 
<Footer/>
    </>
    );
  }
}

const withReducer = injectReducer({ key: 'blogManagePage', reducer });
const withSaga = injectSaga({ key: 'blogManagePage', saga });

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  category: makeSelectCategory(),
  loading: makeSelectLoading(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddEdit);


//ADD iMAGES AND SOCIALS NO TAG YET
