# 21 MERN: Book Search Engine

## Table of Contents
- [Heroku Deployment](https://ancient-journey-29885.herokuapp.com/).
- [Description](#Description)
- [Packages Used](#Packages-Used)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Mock-Up](#Mock-Up)
- [Grading Requirements](#Grading-Requirements)
- [Questions](#questions)

## Description

Take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 

Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.Modified the existing authentication middleware so that it works in the context of a GraphQL API. Created an Apollo Provider so that requests can communicate with an Apollo Server. Deployed application to Heroku with a MongoDB database using MongoDB Atlas.
[Heroku Deployment](https://ancient-journey-29885.herokuapp.com/).


## Packages Used

    apollo-server-express & apollo/client
		react, react-dom, react-router-dom, react-scripts
    graphql
    express
    mongoose
    bcrypt jwt-decode jsonwebtoken
    bootstrap & react-bootstrap
		concurrently

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```


## Mock-Up

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./Assets/21-mern-homework-demo-01.gif)
![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./Assets/21-mern-homework-demo-02.gif)
![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./Assets/21-mern-homework-demo-03.gif)

## Grading Requirements
```md
This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

[x] Satisfies all of the preceding acceptance criteria plus the following:
	[x] Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
	[x] Use an Apollo Server and apply it to the Express.js server as middleware.
	[x] Include schema settings for resolvers and typeDefs as outlined in the homework instructions.
	[x] Modify the existing authentication middleware to work in the context of a GraphQL API.
	[x] Use an Apollo Provider so that the application can communicate with the Apollo Server.
	[x] Application must be deployed to Heroku.

### Deployment: 32%

[x] Application deployed at live URL.
[X] Application loads with no errors.
[X] Application GitHub URL submitted.
[X] GitHub repository contains application code.

### Application Quality: 15%

[x] User experience is intuitive and easy to navigate.
[x] User interface style is clean and polished.
[x] Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

[x] Repository has a unique name.
[x] Repository follows best practices for file structure and naming conventions.
[x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[x] Repository contains multiple descriptive commit messages.
[x] Repository contains high-quality README file with description, screenshot, and link to the deployed application.

## Review

[x] The URL of the functional, deployed application.
[x] The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
```

## Questions
[https://github.com/Dspenn](https://github.com/Dspenn)
- Email for any additional questions  DerekStander@gmail.com
