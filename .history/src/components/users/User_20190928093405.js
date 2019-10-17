import React, { Component } from 'react'

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            folowing,
            public_repos,
            public_gists,
            hireable
        }=this.props.user;
        return (
            <div>
                User
            </div>
        )
    }
}

export default User
