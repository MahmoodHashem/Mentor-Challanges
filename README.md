
# Frontend Mentor Challenges

Welcome to my repository where I tackle challenges from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides real-world coding challenges that help developers improve their coding skills by building realistic projects.

## Introduction

This repository is a collection of my solutions to various Frontend Mentor challenges. Each challenge is an opportunity to practice and refine my web development skills including HTML, CSS, JavaScript, and various frameworks and libraries.

## Challenges

Below is a list of Frontend Mentor challenges I have completed. 

### Challenge 1: [QR Code](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/QR%20code)
- **Technologies Used**: HTML and CSS.
- **[Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/QR%20code/index.html)**
### Challenge 2: [Social Links](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/Social%20links%20profile)
- **Technologies Used**: HTML and CSS.
- **[Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/Social%20links%20profile/index.html)**

### Challenge 3: [Blog Card](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/Blog%20card)
- **Technologies Used**: HTML, CSS, Flexbox.
- **[fdf](https://mahmoodhashem.github.io/Mentor-Challanges/Social%20links%20profile/index.html)**

### Challenge 4: [Newsletter Subscription](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/newsletter-sign-up-with-success-message-main)
- **Technologies Used**: HTML, CSS,JavaScript, Flexbox.
- **[Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/newsletter-sign-up-with-success-message-main/newsletter-sign-up-with-success-message-main/index.html)**

### Challenge 5: [Age Calculator](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/age-calculator)
- **[Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/age-calculator/index.html)**
- **Technologies Used**: HTML, CSS,JavaScript, Flexbox.

### Challenge 6: [Reuslt Summary](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/result-summary)
- **Technologies Used**: HTML, CSS, Flexbox. 
- [Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/result-summary/index.html)

### Challenge 7: [Sign Up Form](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/signup-form)
- **Technologies Used**: HTML, CSS, Flexbox, JavaScript. 
- [Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/signup-form/index.html)

### Challenge 8: [News Homepage](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/news-homepage-main)
- **Technologies Used**: HTML, CSS, Grid, JavaScript. 
- [Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/news-homepage-main/index.html); 


... (continue listing other challenges)

### Check All Challanges:[Live Site](https://mahmoodhashem.github.io/Mentor-Challanges/)

## Contributing

Feel free to fork this repository and submit pull requests to contribute to these challenges. You can also open issues to discuss potential improvements or any bugs you find.

## Contact
If you have any questions, feel free to [contact me](mailto:shmahmoodham143@gmail.com).
---

*Copy this and Get my message*

```HTML 
    <h1 class="info">Mahmood Hashemi <br> Mobile and Web Developer</h1>
    <div class="container"><h1 id="message">Happy Coding!</h1></div>
```

```CSS

 .info{
            position: fixed;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
            letter-spacing: 5px;
            bottom: 20%;
            line-height: 2;
            opacity: 0.4;
            text-align: center;
        }

body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    color: #61dafb;
    font-family: Arial, sans-serif;
    background-image: 
}

.container {
    text-align: center;
    animation: fadeIn 5s ease-in-out infinite;
}

@keyframes fadeIn {
    0%,100% { opacity: 0; }
    50% { opacity: 1; }
}
```

```JavaScript 

document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    let opacity = 0;
    let direction = 1;

    setInterval(() => {
        if (opacity >= 1) direction = -1;
        else if (opacity <= 0) direction = 1;

        opacity += direction * 0.01;
        message.style.opacity = opacity;
    }, 50);
});

```