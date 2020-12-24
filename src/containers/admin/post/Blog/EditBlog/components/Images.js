import React from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';
import AddIcon from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';

function TitleInput(props) {
  const { one, setOneValue, error, classes} = props;

  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };
  const maxNumber = 2;
  

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setOneValue({ key: 'images', value: imageList });
  };
  const hasError = Boolean(error);


  return (
<>
<div>
        <ImageUploading
             multiple
             value={(one && one.images) || ''}
             onChange={onChange}
             maxNumber={maxNumber}
             dataURLKey="data_url"
           >
             {({
               imageList,
               onImageUpload,
               onImageRemoveAll,
               onImageUpdate,
               onImageRemove,
               isDragging,
               dragProps,
             }) => (
               // write your building UI
               <div className="upload__image-wrapper">
                    <div className="login100-form-special1 p-b-10">
                    Images*
                    </div>
                 <div className="row">
                
                  <div className="col-12">
                      
                  <Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={onImageUpload}
            elevation={0}
             >
            <AddIcon />
             </Fab>
     
                 &nbsp;
                 
                 </div>
                 </div> 
     <br/><br/>
                 <div className="row">
                 {imageList.map((image, index) => (
                  <div className="col-6">
                   <div key={index} className="image-item">
                     <img src={image['data_url']} alt="" width="100" />
                     <div className="image-item__btn-wrapper">
                       
                       <button  onClick={() => onImageRemove(index)}><h6>Remove</h6></button>
                     </div>
                     </div>
                     </div>
                  
     
                 ))}
               </div>
               </div>
             )}
            
           </ImageUploading>
         </div>
</>
  );
};

TitleInput.propTypes = {
 
  setOneValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  one: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  errors: makeSelectErrors(),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleInput);
