const USER_URL = 'https://api.github.com/users';


export default async function getUser(username) {
    try {
        const response = await fetch(`${USER_URL}/${username}`);
        if (response.ok) {
            return await response.json();
        } else {
            console.log(response.status)
            return null;
        }
    } catch (err) {
        throw new Error('Something went wrong while getting character');
    }


}