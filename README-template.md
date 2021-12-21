zz# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)[Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## My process
- Wrote the basic HTML layout with semantics
- Layed out all the element using grid and used mobile first approach
- Used media queries for the desktop view 
- Wrote 4 different to add functionality
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned
- learnt to use DOM effectively 
- learnt to collect data and use with forms using javascript
- learnt a new way to use events(using keycodes)
```
document.querySelector("#bill")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            bill = document.querySelector("#bill").value;
            console.log(bill);
        }

```

### Continued development

I still haven't figured out how to integrate custom percentage so I'll edit this as soon as I figure that out. Any feedbacks regarding that would be helpful.

## Author

- Website - Pranav Kumar
- Frontend Mentor - [@codantes](https://www.frontendmentor.io/profile/codantes)
- Twitter - [@codantes](https://www.twitter.com/codantes)

