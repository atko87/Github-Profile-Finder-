import React from 'react'

const Repos = ({repos}) => { 
    return repos.maps(repo => <RepoItem repo ={repo} key={repo.id}/> )
}

export default Repos
