// modules/ui.js

export const updateUserProfile = (data) => {

    const $ = (element) => document.querySelector(element);

    const elements = {
        avatar: $('.avatar_img'),
        profileName: $('.name'),
        username: $('.username'),
        userBio: $('.bio'),
        joindDate: $('.joined-date'),
        repositories: $('.repos p'),
        followersNo: $('.followers p'),
        followingNo: $('.following p'),
        locationName: $('.location p'),
        twitterAddress: $(".twitter p"),
        githubAddress: $('.github p'),
        companyName: $('.company p')
    };

    const dataMapping = {
        avatar: 'avatar_url',
        profileName: 'name',
        username: 'login',
        userBio: 'bio',
        joindDate: 'created_at',
        repositories: 'public_repos',
        followersNo: 'followers',
        followingNo: 'following',
        locationName: 'location',
        twitterAddress: 'twitter_username',
        githubAddress: 'blog',
        companyName: 'company'
    };

    for (const key in elements) {
        const element = elements[key];
        const dataKey = dataMapping[key];
        if (dataKey) {
            console.log(dataKey)

            if (dataKey === 'avatar_url') {
                element.src = data[dataKey]
                continue;
            }

            if (dataKey === 'login') {
                element.innerHTML = `@${data[dataKey]}`
                continue;
            }

            element.innerHTML = data[dataKey] || (key === 'userBio' ? "No bio" : (key === 'locationName' ? "No location" : (key === 'twitterAddress' ? "No Twitter" : (key === 'companyName' ? "No company" : "No website"))));
        }
    }

    elements.joindDate.innerHTML = `Joined at ${new Date(data.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })}`;

    const toggleClasses = ['locationName', 'twitterAddress', 'companyName', 'githubAddress'];
    toggleClasses.forEach((key) => {
        const element = elements[key];
        const dataKey = dataMapping[key];
        if (data[dataKey]) {
            element.classList.remove('deactive');
        } else {
            element.classList.add('deactive');
        }
    });
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