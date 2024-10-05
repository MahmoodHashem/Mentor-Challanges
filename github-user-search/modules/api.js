// modules/api.js

const apiUrl = "https://api.github.com/users";

export const fetchUserData = async (username) => {
    try {
        const response = await fetch(`${apiUrl}/${username}`);
        if (!response.ok) throw new Error(response.status);
        return await response.json();
    } catch (error) {
        throw new Error("Failed to fetch user data: " + error.message);
    }
};