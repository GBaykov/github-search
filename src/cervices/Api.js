const USER_URL = 'https://api.github.com/users';


export default async function getUser(username) {
    const response = await fetch(`${USER_URL}/${username.toLowerCase()}`);
    const user = await response.json();
    return user;
}