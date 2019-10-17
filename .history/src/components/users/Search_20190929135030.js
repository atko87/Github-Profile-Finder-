import React,{useState} from 'react'
import PropTypes from 'prop-types';


const Search =({ searchUsers, showClear, clearUsers, setAlert}) => {
  const [text,setText]= useState ('');

    
    const onSubmit = e => {
        e.preventDefault();
        if (text === ''){
           setAlert('Please enter something', 'light')
        }else {
           searchUsers(text);
            setText('');
        }
        
    };


    const onChange = e => setText( e.target.value);
    
        return (
        <div>
            <form  onSubmit = { onSubmit } className= "form" >
                <input 
                type= "text" 
                name= "text" 
                placeholder= "Search Users..." 
                value= { text } 
                onChange={ onChange }
                />
                <input 
                type= " submit " 
                value= " Search " 
                className= " btn btn-dark btn-block "
                />
            </form>
            {showClear &&
            (<button className= " btn btn-light btn-block " 
            onClick = { clearUsers }> Clear </button>
            )}
        </div>
        );
    }

Search.propTypes ={
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired
};

export default Search 
