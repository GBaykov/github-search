const USER_URL = 'https://api.github.com/users';


export default async function getUser(username) {
    try {
        const response = await fetch(`${USER_URL}/${username}`);
        if (response.ok) {
            const user = await response.json();
            return userToResponce(user);
        } else {
            return userToResponce(null);
        }

    } catch (err) {
        throw new Error('Something went wrong while getting user');
    }
}

function userToResponce(user) {
    return {
        avatar: user.avatar_url, name: user.name, followers: user.followers,
        followers_url: user.followers_url, following: user.following, following_url: user.following_url,
        url: user.html_url, login: user.login, repos_url: user.repos_url, repos: user.public_repos
    };
}



export async function getUserRepos(username, page) {
    try {
        const response = await fetch(`${USER_URL}/${username}/repos?per_page=40&page=${page}`);
        if (response.ok) {
            const userRepos = await response.json();
            return userReposToResponce(userRepos);
        } else {
            return null;
        }
    } catch (err) {
        throw new Error('Something went wrong while getting UserRepos');
    }
}
function userReposToResponce(repos) {
    const responce = repos.map((repo) => {
        return { name: repo.name, description: repo.description, url: repo.html_url }
    })
    return responce;

}
