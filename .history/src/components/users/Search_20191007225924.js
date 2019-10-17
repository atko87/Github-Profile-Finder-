import React,{useState,useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/alertContext';


const Search =() => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

  const [text,setText]= useState ('');

    
    const onSubmit = e => {
        e.preventDefault();
        if (text === ''){
           alertContext.setAlert('Please enter something', 'light')
        }else {
           githubContext.searchUsers(text);
            setText('');
        }
    };
    
    const onChange = e => setText( e.target.value);
    
        return (
        <div defaultValue>
            <form  onSubmit = { onSubmit } className= "form" >
                <input 
                type= "text" 
                name= "text" 
                placeholder= "Search Users..." 
                defaultValue= { text } 
                onChange={onChange}
                />
                <input 
                type= " submit " 
                defaultValue= " Search " 
                className= " btn btn-dark btn-block "
                />
            </form>
            {githubContext.users.lenght > 0 &&
            (<button className = " btn btn-light btn-block " 
            onClick = {githubContext.clearUsers }
            >
             Clear 
            </button>
            )}
        </div>
        );
    };


export default Search 
