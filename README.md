# Team Profile Generator 

Deployed link Heroku: https://blooming-citadel-35725.herokuapp.com/

## Description

We will create application called Note Taker that can be used to write and save notes. This application use an Express.js back end and save retrieve note data from JSON file.  
The application was implemented in the application heroku.
The application will be invoked with the following command:
``` 
node server.js
``` 

## Table of Contents
  * [Installation](#installation)
  * [Autor info](#Autorinfo)
  * [User Story](#UserStory)
  * [Acceptance Criteria](#AcceptanceCriteria)
  * [Technologies](#technologies)

## Autor Info
```
Eder Rodrigo Ramirez Contreras 
E-mail: Edher.fca@gmail.com
Gitgub: https://github.com/kdher/
```
 
## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation
To install dependencies, run npm i and install Inquirer and shortid

## Mock up images
The following image demonstrates the application functionality:

<div>
    <img src="./public/assets/images/notetaker.png" width="400px"/> 
     <img src="./public/assets/images/notetaker2.png" width="400px"/> 
</div>
## Technologies 
* Node.js
* Inquirer 