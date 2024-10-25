const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

const total = document.querySelector('.total')
const overview = document.querySelector('.overview')




const socialMediaData = {
    totalFollowers: 23004,
    socialMediaPlatforms: [
        {
            name: 'Facebook',
            username: '@mahmoodhashemi',
            followers: 1987,
            todayFollowers: 12,
            icon: './images/icon-facebook.svg',
        },
        {
            name: 'Twitter',
            username: '@mahmoodhashemi',
            followers: 1044 ,
            todayFollowers: 99,
            icon: './images/icon-twitter.svg',
        },
 
        {
            name: 'Telegram',
            username: '@mahmoodhashemi',
            followers:  9850,
            todayFollowers: 199,
            icon: './images/icon-telegram.svg',
        },
        {
            name: 'YouTube',
            username: '@mahmoodhashemi',
            followers:  8239,
            todayFollowers:  144 ,
            icon: './images/icon-youtube.svg',
        }
    ],
    overviewToday: [
        {
            title: 'Page Views',
            icon: './images/icon-facebook.svg',
            change: 87,
            percentage: '3%',
        },
        {
            title:"Likes", 
            change: 52, 
            icon: './images/icon-facebook.svg', 
            percentage: '2%'
        }, 

        {
            title: "Retweets", 
            change: 117, 
            percentage: '303%', 
            icon: './images/icon-twitter.svg'
        }, 
        {
            title: 'Likes', 
            change: 507,
            percentage: '553%', 
            icon: './images/icon-twitter.svg'
        }, 
        {
            title: 'Subscribers', 
            change:  5462, 
            percentage: '2257%', 
            icon: './images/icon-telegram.svg'
        }, 
        {
            title: "Profile Views", 
            change: 200, 
            percentage: '75%', 
            icon: './images/icon-telegram.svg'
        }, 
        {
            title: "Likes", 
            change: 107, 
            percentage: '19%', 
            icon: './images/icon-youtube.svg',
        }, 
        {
            title: 'Total Views', 
            change: 1407, 
            percentage: '12%', 
            icon: './images/icon-youtube.svg'
        }
    ]
};

socialMediaData.socialMediaPlatforms.forEach((platform, index) => {
      const card = document.createElement('div'); 
      card.className = `card-${index+1} grid-item`
      card.innerHTML = `<div class="icon">
          <img src=${platform.icon} alt="${platform.name} icon">
          <p>${platform.username}</p>
        </div>
        <h3 class="followers-no">
          ${platform.followers}
        </h3>
        <h4> Followers</h4>
        <div class="status">
          <img src="./images/icon-up.svg" alt="up icon">
          <p>${platform.todayFollowers} Today</p>
        </div>
      </div>`
      total.appendChild(card)
})



socialMediaData.overviewToday.forEach((platform, index) =>{
    const overviewCard = document.createElement('div'); 
    overviewCard.className = `overview__grid-item overview__card${index+1}`
    overviewCard.innerHTML = `
    <h5>${platform.title}</h5>
    <img class="overview__icon" src=${platform.icon} alt="facebook icon">
    <h5 class="change">${platform.change}</h5>
    <div class="status">
      <img src="./images/icon-up.svg" alt="up icon">
      <p>${platform.percentage}</p>
    </div>
  `
  overview.appendChild(overviewCard)
})


toggle.addEventListener('click', () => {
    console.log(toggle.checked)
    if (toggle.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }

})



const followers = document.querySelectorAll('.followers-no'); 
const changes = document.querySelectorAll('.change'); 


animateCounts(followers, [...socialMediaData.socialMediaPlatforms.map(item => item.followers)])
animateCounts(changes,[...socialMediaData.overviewToday.map(item => item.change)])




function animateCounts(elements, finalValues) {
    elements.forEach((element, index) => {
        let currentValue = 0;
        const finalValue = finalValues[index];
        const increment = Math.ceil(finalValue / 100); 

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(interval);
            }
            element.textContent =Intl.NumberFormat().format(currentValue) ;
        }, 50); 
    });
}
