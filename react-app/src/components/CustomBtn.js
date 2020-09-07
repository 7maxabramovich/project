import React, { useState } from 'react';
import './CustomBtn.css';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomBtn(props) {

    let [count, setNewCount] = useState(0);
    let changeCount = function(e) {
        setNewCount(count + 1);
    };
  return (
	<>
	  <button className="custom-btn"
      onClick={ changeCount }>Number of clics - {count} </button>
	  
	  <span>&nbsp;</span>
	  <button className="custom-btn"><Moment format="DD/MM/YYYY hh:mm:ss">{ props.date }</Moment></button>
	</>
  );
}

export default CustomBtn;
