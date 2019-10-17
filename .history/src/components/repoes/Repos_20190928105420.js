import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({repos}) => { 
    return repos.maps(repo => <RepoItem repo ={repo} key={repo.id}/> )
}

Repos.propTypes={
    repos:PropTypes.array.isRequired,
};

export default Repos
