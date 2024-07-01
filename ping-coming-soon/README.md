# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![Desktop](./images/desktop.png)
![Mobile](./images/mobile.png)

### Links

- [Solution URL](https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/ping-coming-soon)
- [Live Site URL](https://mahmoodhashem.github.io/Mentor-Challanges/ping-coming-soon/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanila JavaScript

### What I learned

In this challenge, I came across some really insightful discoveries:

1. **Pseudo-elements and input elements:** I learned that when working with input elements, you cannot directly apply the `::before` and `::after` pseudo-elements to them. These pseudo-elements are meant to add content before or after an element, but they don't work the same way with `<input>` fields. This was a new finding for me, as I had previously used these pseudo-elements on other HTML elements without issue. Recognizing this limitation for input fields is an important piece of knowledge that will help me avoid confusion and unexpected behavior in the future.
2. **Email validation with JavaScript:** The second thing I learned was related to the email validation function I implemented using JavaScript. I created a function that used a regular expression to check the validity of an email address. However, I initially got stuck on the logic of the `if` statement, as I had the condition reversed. I had written `if (emailIsValid)` when I should have had `if (!emailIsValid)`. This meant that the function was returning `true` if the email was invalid, and `false` if the email was valid - the opposite of what I intended. After spending some time troubleshooting, I realized my mistake and corrected the logic. This experience has reinforced the importance of carefully testing and validating my code, especially for critical functionality like email validation.

These two learnings - the limitations of pseudo-elements on input fields and the importance of getting the logic right in email validation - were valuable takeaways from this challenge. They have expanded my understanding of CSS and JavaScript, and will help me write more robust and reliable code in the future.


## Author

- [My Portfolio](https://main--mahmood-hashemi.netlify.app/)
- [Fronted Mentor](https://www.frontendmentor.io/profile/MahmoodHasheme/yourusername)
- [Twitter](https://twitter.com/Mahmood18999963)
- [LinkedIn](https://www.linkedin.com/in/shah-mahmood-hashemi-55172a276/)

## Acknowledgments

I would like to express my gratitude to all content creators, bloggers, and senior developers who have generously made learning web development accessible and free for us.
