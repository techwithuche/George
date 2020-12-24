import React from 'react'
import ImageUploading from 'react-images-uploading';

 function image() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 4;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    //console.log(`Image Data_Url: `, images[0].data_url);
  
    return (
        <>
        <div>
           <ImageUploading
             multiple
             value={images}
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
                 <div className="row">
                  <div className="col-6">
                 <button
                   
                   onClick={onImageUpload}
                   {...dragProps}
                 >
                 Add Images
                 </button>
     
                 &nbsp;
                 </div>
                 <div className="col-6">
                 <button 
                 onClick={onImageRemoveAll}>
                     Remove Images
                     </button>
                     </div></div> 
     <br/><br/>
                 <div className="row">
                 {imageList.map((image, index) => (
                  <div className="col-6">
                   <div key={index} className="image-item">
                     <img src={image['data_url']} alt="" width="100" />
                     <div className="image-item__btn-wrapper">
                       <button  onClick={() => onImageUpdate(index)}><h6>Change</h6></button>
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
    )
}

export default image