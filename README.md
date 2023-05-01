# Tech-Blog

Deployed Link:  


## Table of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [Acceptance Criteria](#user-story)
  * [Installation](#installation)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Screenshots of Application in Use](#screenshots-of-application-in-use)
  * [Technologies](#technologies)
  * [Questions?](#questions)


## Description
  This is a full-stack CMS-style blog site where users can publish posts and comment on other users' blog posts. With login authentication, logged-in users have access to the dashboard where they can also edit or delete their posts and or comments. Additionallly, this application is MVC structured and makes use of multiple packages such as handlebars, bcrypt, express.sessions, sequelize and more to ensure the most optimized experience.


## User Story
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions


## Acceptance Criteria 
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    WHEN I click on the homepage option
    THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
    THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Installation
  1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```


## Setup
Create an '.env' file in the main directory path and include the following data:

```
DB_NAME='developing_tech_db'
DB_USER='root'
DB_PASSWORD=''
```

Once your '.env' has been created with the corresponding data, open up the schema ('db/schema.sql') and update the database label to match with the database you included in your '.env' file.


## Usage
  1. Run `node index.js` in terminal to start. 
  2. Follow through the prompts as required. 

  Note:

  - Need to be in the main folder in terminal when running the command.


## Screenshots of Application in Use

Login Page:
<img width="1108" alt="login dashboard" src="./assets/images/logindashboard.png" />

Dashboard Page:
<img width="952" alt="login page" src="./assets/images/loginpage.png"/>

Create Post:
<img width="1093" alt="create post" src="./assets/images/creatingpost.png"/>

Post Created:
<img width="1093" alt="post created" src="./assets/images/postcreated.png"/>

Delete Post:
<img width="1095" alt="delete post" src="./assets/images/deletepost.png"/>

Logout:
<img width="1096" alt="logout page" src="./assets/images/logout.png"/>



## Technologies
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com)
* [Handlebars Template Engine](https://handlebarsjs.com)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Sequelize](https://sequelize.org)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Heroku](https://devcenter.heroku.com/start)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 

  ## Questions?
  ### Reach me here: 
  [Brooklynn Stevenson](https://github.com/Brooksteven)  
  Brooksteve580@gmail.com