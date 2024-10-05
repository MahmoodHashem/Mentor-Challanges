// modules/ui.js

export const updateUserProfile = (data) => {
    const avatar = document.querySelector(".avatar_img");
    const profileName = document.querySelector(".name");
    const username = document.querySelector(".username");
    const userBio = document.querySelector(".bio");
    const joindDate = document.querySelector(".joined-date");
    const repositories = document.querySelector(".repos p");
    const followersNo = document.querySelector(".followers p");
    const followingNo = document.querySelector(".following p");
    const locationName = document.querySelector(".location p");
    const twitterAddress = document.querySelector(".twitter p");
    const githubAddress = document.querySelector(".github p");
    const companyName = document.querySelector(".company p");

    avatar.src = data.avatar_url;
    profileName.innerHTML = data.name;
    username.innerHTML = `@${data.login}`;
    userBio.innerHTML = data.bio || "No bio";
    joindDate.innerHTML = `Joined at ${new Date(data.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })}`;
    followersNo.innerHTML = data.followers;
    followingNo.innerHTML = data.following;
    repositories.innerHTML = data.public_repos;
    locationName.innerHTML = data.location || "No location";
    twitterAddress.innerHTML = data.twitter_username || "No Twitter";
    companyName.innerHTML = data.company || "No company";
    githubAddress.innerHTML = data.blog || "No website";
};

export const showToast = (message) => {
    const toast = document.querySelector(".custom-toast");
    toast.innerHTML = message;

    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.top = "100px";

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.top = "0px";
        }, 3000);
    }, 3000);
};