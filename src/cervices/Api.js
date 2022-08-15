const USER_URL = 'https://api.github.com/users';


export default async function getUser(username) {
    try {
        const response = await fetch(`${USER_URL}/${username}`);
        if (response.ok) {
            const user = await response.json();
            return userToResponce(user);
        } else {
            return null;
        }
    } catch (err) {
        throw new Error('Something went wrong while getting user');
    }
}
function userToResponce(user) {
    const responceUser = { avatar: user.avatar_url, name: user.name, followers: user.followers, followers_url: user.followers_url, following: user.following, following_url: user.following_url, html_url: user.html_url, login: user.login, repos_url: user.repos_url }
    return responceUser;
}



export async function getUserRepos(username) {
    try {
        const response = await fetch(`${USER_URL}/${username}/repos`);
        if (response.ok) {
            const userRepos = await response.json();
            return userReposToResponce(userRepos);
        } else {
            return null;
        }
    } catch (err) {
        throw new Error('Something went wrong while getting character');
    }
}
function userReposToResponce(repos) {
    const responce = repos.map((repo) => {
        return { name: repo.name, description: repo.description, url: repo.html_url }
    })
    console.log(responce);
    return responce;

}
