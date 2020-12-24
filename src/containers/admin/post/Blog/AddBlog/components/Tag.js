import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';



function Tag(props) {
  const [tags, setTags] = React.useState([])
  const { one, setOneValue, error } = props;


    setOneValue({ key: 'tag', value: tags});
    
  

  return(
    <>
    <div className="login100-form-special1 p-b-10">
    Tags*
    </div>
    <ReactTagInput 
      tags={(one && one.tag) || tags} 
      placeholder="Type and press enter"
      maxTags={10}
      editable={true}
      readOnly={false}
      removeOnBackspace={true}
      onChange={(newTags) => setTags(newTags)}
    />
    <br/>
    </>
  )
}

Tag.propTypes = {
  
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
)(Tag);

