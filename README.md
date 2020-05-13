# Font Awesome Memory Challenge: Memory game based on Font Awesome free icons collection
Code Institute - Second Milestone Project: Interactive Frontend Development 

This game was developed for players who want to challenge their memory and have fun.


## Demo
A live demo of the website has been developed  [here](https://milan-stefanik.github.io/project2-memory-game/).

![Responsive Web Demo](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/images/demo.gif "Responsive Web Demo")

Responsive Web Demo GIF image was recorded using [Am I Responsive?](http://ami.responsivedesign.is) website. 


## UX

### User stories

Player wants to challenge his/her memory and have some fun. The game interface is interactive and responsive and guides player seamlessly through the game.
The Intro screen provides player with the introduction to the game and allow him to select game mode: Normal Mode (game ends when all pairs are found) or Challenge Mode (player plays against the time).
The Difficulty screen allows player to select number of cards. By clicking on any of the available options, player is then taken directly to the game. After flipping the first card, the time starts counting (up in the Normal Mode, down in the Challenge Mode).
After game is finished, Game Over screen is shown with basic statistics on the finished game. 
Player can anytime return to the Intro screen by clicking on Home Button (cross in the upper right corner of the screen).  

Intro Page:

![Intro Page](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/images/introPage.jpg "Intro Page")

Difficulty Page:

![Difficulty Page](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/images/difficultyPage.jpg "Difficulty Page")

Game Page:

![Difficulty Page](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/images/gamePage.jpg "Game Page")

Game Over Page:

![Game Over Page](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/images/gameOverPage.jpg "Game Over Page")


### Strategy
Game has been designed while keeping mobile devices in mind providing players with interactive user interface which is fluently adjusting to the device screen size.

### Scope
To challenge players memory and provide him with multiple game difficulty options.

### Structure
Game is logically structured to 4 screens:
* Intro Screen - providing player with basic information about the game and allowing player to select game mode
* Difficulty Screen - allowing player to select difficulty level
* Game Screen - game itself
* Game Over Screen - summary screen of the finished game

### Skeleton
[Website wireframe](https://milan-stefanik.github.io/project2-memory-game/raw/master/assets/wireframes/wireframes.pdf)

### Surface
Greenscale colorscheme.

## Technologies
1. HTML
2. CSS
3. JavaScript
4. jQuery
5. Jasmine
6. Jasmine jQuery
7. Font Awesome free icons library

## Features
* Interactive design
* Continously responsive design
* Flip card animation effect
* Fully JavaScript powered
* Two game modes
* Four game difficulty levels
* Each game randomly generated from the library of 1588 Font Awesome free icons
* Game Over statistics

## Testing

### Code validity
* HTML was tested via W3C Markup Validation Service
* CSS was tested via W3C CSS Validation Service
* JavaScript development is documented and tested using Jasmine and Jasmine jQuery testing frameworks [Jasmine Test Log](https://milan-stefanik.github.io/project2-memory-game/raw/master/SpecRunner.html)

### User story
* User story and all the game features were tested manually. 
* User story was tested by Jasmine and Jasmine jQuery testing frameworks [Jasmine Test Log](https://milan-stefanik.github.io/project2-memory-game/raw/master/SpecRunner.html)

### Browsers and devices
* Responsivness has been tested using Inspect feature of Chrome and also on [Am I Responsive?](http://ami.responsivedesign.is) website.
* Website has been tested on iPhone XS plus. Other mobile devices screen sizes were emulated via Chrome Inspect feature.
* Website has been tested on multiple browsers (Chrome, Safari, Internet Explorer, Edge, Opera and FireFox).


## Deployment
The website is hosted on GitHub pages and can be accessed via this [link](https://milan-stefanik.github.io/project2-memory-game/). Landing page must be named `index.html`. Any changes to the master branch will be automatically reflected.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/milan-stefanik/project2-memory-game.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All the website content was written by me. 

### Media
* Background image was downloaded from [Shutterstock](https://www.shutterstock.com/), a stock image library.
* All the icons used come from [Font Awesome](https://fontawesome.com/), an free icon library.
Images were resized to fit the website design and to reduce website loading time.

### Acknowledgements
CSS flip card effect was created based on the YouTube video tutorial and adjusted to meet the game requirements [YouTube](https://www.youtube.com/watch?v=Lc6wyl1KdOc).

All used icons come from [Font Awesome](https://fontawesome.com/) version 5.13.0. Icons were collected from 'https://fontawesome.com/icons?d=gallery&m=free' via console using following function

`function collectIcons() {
  var linkarray = []; for (let i=0; i < document.getElementsByTagName("i").length; i++) {linkarray.push(document.getElementsByTagName("i")[i].outerHTML)}; copy(linkarray);
}`

which copied all the "i" html elements of displayed icons to the clipboard, which was then copied to Notepad++ and strigns were cleaned.

JavaScript and user story testing was conducted using [Jasmine](https://jasmine.github.io/) and [Jasmine jQuery](https://github.com/velesin/jasmine-jquery) testing frameworks.

**This website was developed for educational purposes only** 
