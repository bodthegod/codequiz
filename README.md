<h1 align="center">Bod Code Quiz - Project Portfolio 2</h1>

## - By Joe Playdon
 
### [View the live project here](https://bodthegod.github.io/codequiz/) #
### [View the repository here](https://github.com/bodthegod/codequiz) #

# Table of Contents:
1. [About the project](#about-my-website)
    1. [First Time Visitor Goals](#first-time-visitor-goals)
    2. [Returning and Frequent Visitor Goals](#returning-visitor-goals)
2. [Design](#design)
    1. [Colour Scheme](#colour-scheme)
    2. [Typography](#typography)
    3. [Imagery](#imagery)
	4. [Wireframes](#wireframes)
	5. [Features](#features)
    6. [Screenshots of Features](#screenshots-and-features-within-website)
3. [Languages and Resources](#languages-used)
4. [Testing](#testing)
    1. [HTML Validator Results](#html-results)
    2. [CSS Validator Results](#css-results)
    3. [Lighthouse Reports](#lighthouse-reports)
    4. [Further Testing](#further-testing)
    5. [Manual Testing](#manual-testing)
5. [Bugs and fixes](#known-bugs)
6. [Deployment](#deployment)
    1. [GitHub Pages](#github-pages)
    2. [Forking Repository](#forking-the-github-repository)
    3. [Making A Local Clone](#making-a-local-clone)
7. [Credits](#credits)
    

![Website Designs](/readmeimages/deviceframes.png)</h2>

### About my website

This is my pro coding quiz, a quiz I have designed to have a sleek and cool look in relation to coding to offer a quick and fast paced quiz.


## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to be able to have easy and responsive access to the quiz, with an attractive look to engage the user. 
        2. As a First Time Visitor, I want a simple and easy and UI that is fully functional and gives power to me when making choices in the quiz.
        3. As a First Time Visitor, I want to see if this quiz can assist me in my studies and offer a fun and interactive quiz for me to test my knowledge on.
        4. When visiting the website for the first time, I want to be aware of how the game works, and what it is about.
        5. Any First time user would like to see their final score, and be displayed the option of playing again.
        6. As a first Time Visitor, I want to be able to see the correct answer when I get a question wrong. 

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to be able to easily click and play without any obstructions. 
        2. As a Returning Visitor, I want to be able to replay the quiz at the end and have the choice to quit.
        3. As a Returning Visitor, I want a simple UI that is easy to navigate and easy on the eye.

    -   #### Frequent User Goals

        1. As a Frequent User, I want the ability to see my final score, as frequent visits would allow for higher scores.
        2. As a Frequent User, I want to be able to check the quiz often in case there are new questions added or new features.
        3. As a Frequent User, I want the option to see the time remaining as I could set faster scores.

    -   ### Design

    -   #### Colour Scheme

        -   The main colours in the foreground I have used are a neon green, #4fd821, - for the borders, text, progress bar and box shadows to provide a consistent styling and a cool coding-like look to website. For the start button, I have used a standard black background with neon green text against it, which upon hover changes to white text, white borders, white box shadow and a sleek gradient green-to-black background. This is a nice style choice for me as I feel like it is a simple but effective feature in capturing the user's eye and further allowing them to seek interest in the quiz from the start of the game.
        
        For the guide area, I have used a standard red colour for the quit button, this envoking a negative response to the user allowing them to recognise the button without reading it. I have also used a green button to allow them yet again to have a positive response and to allow them to recognise that it is the button to continue. These are standard yet effective style and colour choices I have used to make the experience as smooth as possible from a user standpoint. To follow this theme, in the game area I have used the colour red to display an incorrect answer, and green to display correct.

        Finally, as you will see there is a sleek gradient background that is animated to add some depth to the website to give it a fun look. The colours used here are: #48c0ac, #73a128, #ebadad, #23d5ab. These colours are quite neutral as I didn't want the background to take away from the foreground gameplay, and I feel as if this has been achieved effectively.

    -   #### Typography

        -   I have chose the Chakra Petch font as the main font used within all of my website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site from the external link. Chakra Petch is a sleek, futuristic font that has attractive edges and a simple code like look. This is very appropriate for my website as it is based around coding. I have also used the Source Code Pro font for my start button, game area header, footer and guide area, yet again with fallback fonts of Sans serif. Many of these areas have fluctuating font weights to emphasise points to the user, such as the question counter at the bottom and the title at the top of the page.

    -   #### Imagery

        -   I did not feel as if it was necessary to use any external images within my quiz, to keep it simple and intuitive and easy on the eye. I feel as if adding images to this would add too much clutter and cause an overload for the user, so I kept it simple and stuck to simple text questions. The closest thing to imagery within my quiz webite would be the animated background, which I decided to use to give my quiz a fun and attractive look to the user.

    *   ### Wireframes
        
    -   I have used [Balsamiq Wireframes](https://balsamiq.com/) as my desired wireframing tool for this quiz, as it is very easy to use. However, due to these being wireframes, the final image of the quiz may be depicted differently yet these are base guidelines of my website, and the image I would like to achieve. Here I have created Start button, Game guide, Game area and Final score screen wireframes. As this quiz maintains consistency of look on both mobile and desktop views, the wireframes are the same.    

    -   Start Button Desktop and Mobile Wireframe - [View](/wireframes/Start-btn-wf.png)

    -   Guide Area Desktop and Mobile Wireframe - [View](/wireframes/Guide-wf.png)

    -   Game Area Desktop and Mobile Wireframe - [View](/wireframes/Game-area-wf.png)

    -   Final Score Desktop and Mobile Wireframe - [View](/wireframes/Final-score-wf.png)

    ## Features

-   Start button that displays guide box when clicked

-   Mobile friendly display on all sections

-   Responsive on mobile and desktop devices

-   Interactive buttons

-   Guide box with information on how game works

-   Game box with title, time counter to display time left

-   Question display

-   Answer selection

-   Questions remaining counter with next button that displays when question is chosen

-   Answer selection that is muted once a question is chosen

-   Progress bar linked to timer that shows time remaining

-   Answers that glow red or green depending on if answer is right with icons next to them, icon not displayed for correct answers unless it is chosen

-   Final score box with fontawesome icons, different messages display for different scores, final score displayed out of 10

-   Replay game and quit buttons in final score box

### Screenshots and features within website
#### **(I have provided screenshots via links to make the screenshots section more readable)**
####   All Sections
-   [Start Button](/readmeimages/start-btn-ss.png) This screenshot shows the landing page of my quiz website, and this is the page a user will see every time they load up the site. This is a simple but effective way to catch the user's attention, as there is only one single button to be viewed, on an eye catching background. This button, upon hover- displays a gradient green to black background within the button, and a white box shadow, white text and white border to emphasise the user interaction. Once this button is clicked, it will display the guide box for the user to read and understand how to play the game. 
    
-   [Guide Box](/readmeimages/guide-box-ss.png) This screenshot shows the guide box- as stated above, this box is displayed once the start button is clicked. This guide shows a list of three to keep the user interested and to keep the game simple. The guide box consists of two buttons, a quit game and continue game button. When the quit game button is pressed, it takes the user back to the start button and when the continue game button is pressed, the game area box is presented and the game starts.
    
-   [Game Area](/readmeimages/game-box-ss.png) This portion of the website is the main part that uses JavaScript, and this consists of the game title, time remaining counter, question display, answer display, progress bar on desktop, question counter and finally the next button. Here, the time remaining counter is displayed via JavaScript and counts from 5 down to 0, and when a question is selected, the timer and progress bar pauses, the next button is displayed and the answer selections are muted to lock in the answer the user has chosen. All of the data within this section is stored within the qdata JavaScript file that I have created.

-   [Game Area Active](/readmeimages/game-box-active-ss.png) In this screenshot it shows the active status of the answers. If the time runs out on the counter then the correct answer is displayed to the user with green gradient background- without a tick next to it to indicate the user has not chosen the correct answer. When the correct answer is selected, the tick is displayed. On the contrary, when a user selects the incorrect answer a red gradient background is displayed on the answer they have chosen. When the next button is clicked, it displays the next question from the qdata file, defined by qnumber.
    
-   [Final Score Box](/readmeimages/final-score-ss.png) Finally, the final score box is displayed after the 10th question is answered and the next button is clicked. This section is very simple but displays a couple icons from FontAwesome, these being two cakes and a checkered flag to show the user is finished. Furthermore, the score the user achieved throughout the quiz is displayed at the end, and mutliple different messages are shown regarding the score they got. There are also two buttons at the end being the start again button and the quit game button. If the start again button is selected then the quiz restarts from question one and the counter is set to go again. If the quit game button is selected then the user is taken back to the start button.
   

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


### Resources Used


-   I have used the W3 [HTML](https://validator.w3.org/#validate_by_input) and [CSS](https://jigsaw.w3.org/css-validator/#validate_by_input) validator, the [JavaScript](https://jshint.com/) validator and occasionally the [W3Schools](https://www.w3schools.com/) resources when I had an issues.

-   For my box shadows and box border radius, I used [BoxShadowGenerator](https://html-css-js.com/css/generator/box-shadow/)

-   I used [1stwebdesigner](https://1stwebdesigner.com/15-css-background-effects/) For help with the gradient animation background.

-   For testing my website on different screen sizes, I used Google Chrome Dev Tools.

-   For media query info, I used [W3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

-   For styling inspiration, I used [ColorMind](http://colormind.io/bootstrap/)

-   For font styles, I used [Google Fonts](https://fonts.google.com/)

-   Colours were all checked with [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)

-   Icons within the answer selection boxes and final score box were from [Font Awesome](https://fontawesome.com/)

-   To create the favicons I used [Favicon.io](https://favicon.io/favicon-generator/)


### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the fonts into the style.css file which is used throughout the whole project (maintains a certain style).
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on The final score box for the finish icons and the time icon within the game area, and tick and cross icons.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub, this was used throughout the development of the website
    and was essential.
1. [GitHub:](https://github.com/)
    - GitHub was used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](/wireframes/) during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. In addition to this, I used Chrome Dev tools very often to play around with the code and test when I was having issues. I found this was extremely important when troubleshooting issues- as I could change the code and see the changes live, instead of having to save the file and force refresh (If I changed the CSS code). I had also used the console and console.log feature within javascript to test wether the programming was functioning as intended, which was very helpful.

The use of chrome dev tools allowed me to play around with the breakpoints for different screen sizes, and helped me achieve the look I desire for on smaller screen sizes.

## HTML Results

-   [W3C Markup Validator](https://validator.w3.org/)
-   [index.html Results](/readmeimages/html-validation.png)

## CSS Results
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
-   [style.css Results](/readmeimages/css-validation.png)

## JavaScript Resutls
-   [Jshint](https://jshint.com/)
-   [Qdata JS Results](/readmeimages/qdata-js-validation.png)
-   [Script JS Results](/readmeimages/js-validation.png)

## Lighthouse Reports

-   Lighthouse Report for Desktop - [View](/readmeimages/desktop-lighthouse.png)

-   Lighthouse Report for Mobile - [View](/readmeimages/mobile-lighthouse.png)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to be able to have easy and responsive access to the quiz, with an attractive look to engage the user.

        1. When entering the site, users are displayed an attractive and easy to read quiz that is straight to the point, displaying the start button as the first element on the site.
        2. The actions and buttons a user can click all have visual cues to allow the user to know that their interactions will do specific actions.
        3. The user has freedom of choice when selecting answers and the buttons they press all have responses.

    2. As a First Time Visitor, I want a simple and easy and UI that is fully functional and gives power to me when making choices in the quiz.

        1. This site is designed for ease of access and minimalises the actions a user needs to do in order to play the game.
        2. This quiz keeps it easy and simple by reducing the amount of data required to be shown to the player, and when an answer is selected there are visual cues for them to advance (next button appearing).
        3. This quiz never takes power out of the user's control as it is all linear and dependant on the user's action (for example once an answer is selected it is down to the user to click next).

    3. As a First Time Visitor, I want to see if this quiz can assist me in my studies and offer a fun and interactive quiz for me to test my knowledge on.

        1. The user of this quiz will be displayed 10 questions for multiple coding languages, that are designed to put the user under pressure (5 second counter), hence the name pro quiz.
        2. The user might use this quick quiz to test their knowledge, offering a fun way to learn. 
        3. The user is also given positive and negative responses regarding the answer they select and a final score that allows them to see where they can improve.

    4. When visiting the website for the first time, I want to be aware of how the game works, and what it is about.
        1. The name, start button and meta description of this website all show what it is about and what the user may experience when entering the site.
        2. The user is also displayed a guide after clicking the start button, which says exactly how the game functions. 

     5. Any First time user would like to see their final score, and be displayed the option of playing again.
        1. A first time user can see their final score at the end of the quiz just by playing the game and completing all 10 questions.
        2. The user is offered a way to play again with the restart button. 
    
    6.  As a first Time Visitor, I want to be able to see the correct answer when I get a question wrong. 
        1. Every time an answer is selected, the correct answer is displayed.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to be able to easily click and play without any obstructions.

        1. Due to the simple design of the quiz, this is easy for a returning visitor to know how to start the quiz as it is a linear path.
        2. A returning visitor would know there is a replay button, which allows them to easily replay the quiz without refreshing the page manually.

    2. As a Returning Visitor, I want to be able to replay the quiz at the end and have the choice to quit.

        1. As stated above, a replay button is instantly displayed once the final score is displayed, easily giving a returning user the option to replay.
        2. Also, the user is given a quit button, which simply takes them back to the start button. 

    3. As a Returning Visitor, I want a simple UI that is easy to navigate and easy on the eye.
        1. When returning to the page, the user will already know that there are no obstructions when attempting to play the quiz, and that the game is very straight forward.
        2. I have used specific colours for the start and quit buttons to invoke familiar responses to the user, making it extremely simple for them to figure out which button allows them to start and quit.

-   #### Frequent User Goals

    1. As a Frequent User, I want the ability to see my final score, as frequent visits would allow for higher scores.
        1. The user will already know the final score is shown at the end of the quiz, and this would allow for replayability and personal bests.

    2. As a Frequent User, I want to be able to check the quiz often in case there are new questions added or new features.
        1. A frequent user will know how to navigate to the questions section, to allow them to see if new questions have been added. 

    3. As a Frequent User, I want the option to see the time remaining as I could set faster scores.
        1. The user is always displayed time remaining when playing the quiz, this counting down from 5 seconds on the top right of the screen.
        2. The user is also displayed a progress bar that gradually fills up as the counter goes down, this giving a visual response for them to figure out how much time is remaining. 

### Further Testing

-   I tested my website on many different screen sizes using the inspect element web tool, which allowed for me to test specific breakpoints and the layout on different hardware.
-   I tested my website on Google chrome and Safari, as these browsers interacted differently and I had to plan accordingly by editing features for IOS (The quiz box was different on IOS).
-   I had tested all the box displays for mobile as the sizes were all required to be small enough for a phone screen.
-   I allowed my friends to test and play the quiz in the middle of developing it, to allow me for any changes they think a user would require. This allowed me to make the quiz look better on mobile and easier on the eye.
-   I tested my JS code by using console.log to find out if the code was functional and what parts were working. 
-   I used Google Chrome Dev Tools to play around with css attributes to see a live display of the changes I made.

### Manual Testing

-    In this section, I will provide screenshots of tests I have done to ensure my project is fully functional with no bugs apparent to the user.

[Start Button Test Screenshot](readmeimages/start-btn-ss.png) Here the screenshot is simple however the purpose of this button is extremely important to defining this websites use. The function of the button is to simply display the guide to the user and allow them to go from there. I tested this button by simply clicking it and allowing it to function. 

[No Answer Selected Test Screenshot](readmeimages/manual-test-game1.png) This screenshot shows what the user is displayed when the timer runs out, I have tested this by allowing the timer to count down to 0- for me to see the results that occur. The results that occur from allowing this to happen are fully functional, showing: Correct answer displayed however no tick icon (as the user did not get it correct), counter stays at 0 and doesn't decrease into the negative numbers, progress bar reaches 100% of the game area, and the next button is displayed. 

[Question Of Counter Test Screenshot](readmeimages/manual-test-game2.png) This screenshot tests if the question of number is functionable. I tested this by simply clicking the next button from the previous screenshot, with the result being 2 instead of one, due to the question being the second displayed.

[Incorrect Answer Test Screenshot](readmeimages/game-box-active-ss.png) I tested the result of an incorrect answer by simply choosing one. The result expected is the incorrect answer to not add a number onto the final score and be displayed in red to signify incorrect.

[Final Score Test Screenshot](readmeimages/final-score-ss.png) I have tested if the final score functions by going through the quiz and selecting some correct answers and some incorrect answers. This allowed me to test the functionality of the final score counter- as it would change depending on the user's score. Moreover, I had also tested wether this box was displayed after the 10th question, by clicking next on the final question, of which it was. 

Furthermore, I tested the start again button by clicking it, of which restarted the counter and set the user back to the first question where all elements were displayed correctly. Finally, the quit game button also functions correctly and was tested by clicking it, and the result being taking the user back to the start button. 

### Known Bugs

-   When developing the quiz box to display on mobiles, the information presented was all clustered and I had to copy previous code I had created in the CSS to redefine the size, however this was a tedious bug that took me a couple of hours to figure out after playing around with Dev Tools.
-   There was a bug where the progress bar was too big for the screen size, causing the game area box to stretch.
-   I had another tedious bug where once the time was up on my game, the next button would not display. In order to fix this I had to play around with the JS and I figured out that when calling the function, I had used the incorrect name. This was an easy bug to fix after I had isolated the issue. 

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/bodthegod/bod-workout)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com/bodthegod/bod-workout/settings/pages) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/bodthegod/bod-workout)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/bodthegod/bod-workout)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/bodthegod/bod-workout
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/bodthegod/bod-workout
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

-   For information regarding the timer, credits to [educative.io](https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript)
-   For inspiration of the design and features of my quiz, credits to [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k)
-   To troubleshoot problems I had when defining media queries, I used [Stack Overflow](https://stackoverflow.com/questions/21441993/media-queries-doesnt-work)
-   Credits to my mentor Darío for encouraging me to continue to add things to improve my project.
-   Credits to this website for information regarding javascript [W3 Schools](https://www.w3schools.com/js/js_if_else.asp)
-   For design inspiration, I used [Scheme Color](https://www.schemecolor.com/matrix-code-green.php)
-   For early inspiration of the website I followed [This Youtube Video](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
-   For arrow functions, I used [W3 Schools](https://www.w3schools.com/js/js_arrow_function.asp)
-   For more design inspiration, I used [Coding Nepal](https://www.codingnepalweb.com/quiz-app-with-timer-javascript/)
     