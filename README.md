# Firebase To-Do List App

An application used to create a list of tasks to do, then with use of the hosting, authentication and storage features of Firebase, allow a user to create an account using email and password, sign into their account and be taken to a page with additional features to save their tasks and load them.

Project Screen Shots

## Home Page
![Alt text](/to-do/Images/LoginScreenshot.png "Home page")

## Authenticated page
![Alt text](/to-do/Images/AuthenticatedScreenshot.png "Authenticated page")

Installation and Setup Instructions

Clone down this repository. You will need Node 20.10.0 and npm 10.2.5 installed globally on your machine.

Installation:
```
npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:3000/ideas

```
### Reflection:

This was a personal project to work React using the noSQL database Firebase as the back end. back end.

### What did you set out to build?
I set out to build a web applicatoin that allows a user to create tasks standard to a to-do list app, but also wanted to make use of firebase to have users create an account to sign into the app granting them the ability to store user specific data on their logged in profile so that they can save and load it as needed while logged in.

### Challenges:
This project was challenging in getting the React components and data to make use of firebase's authentication and storage feature working for users who are authenticated and associating their saved data with their accounts so they could save it and load it when signed in under their profile.

As a result, I was able to create what I set out to do and plan to implement the storage and authentication feature in another personal project down the line.

### What were some unexpected obstacles?
Some obstacles encountered, were getting the authentication and save/load features using Firestore to work with the authenticated user's data.  Had to do a bit of digging and testing with the firebase documentation and resources to figure out the best way to get it working.

### What tools did you use to implement this project?
I made use of create-react app and Firebase as there was a wealth of documentationw for React in the firebase site and I had created a project prior using create-react app and decided to use it for it's setup simplicity as a starting point for my personal projects.

### Tecnologies implemented:
 18.3.1, React Router Din 6.26.2 and Firebase 10.13.1 written with React Javascript.  As a result, I was able to get each of the feature's I planned to implement working in the way I envisioned and plan to use for future personal projects.