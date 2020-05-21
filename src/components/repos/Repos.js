import React from 'react'

const Repos = ({repos}) => {
    return Repos.map(repo=> <RepoItem repo={repo} key={repo.id}) />
}
export default Repos