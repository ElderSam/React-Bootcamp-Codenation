const URL = "https://5e7d0266a917d70016684219.mockapi.io/api/v1";

export async function getUsers(params) {
    const response = await fetch(`${URL}/users`);
    const users = await response.json();
    return users;
}

export async function getPostsById(userId) {
    const response = await fetch(`${URL}/users/${userId}/posts`);
    const posts = await response.json();
    return posts;
}

export async function getStories(params) {
    const response = await fetch(`${URL}/stories`);
    const stories = await response.json();
    return stories;
}