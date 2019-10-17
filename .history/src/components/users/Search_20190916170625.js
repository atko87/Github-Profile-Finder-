import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form className="form">
                <input type="text" name="text" placeholder="Search Users..."/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
           </form>
            </div>
        )
    }
}

export default Search
