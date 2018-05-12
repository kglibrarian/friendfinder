# friendfinder

## What is the friendfinder app? 
friendfinder is a compatibility-based application -- basically a dating app. This full-stack site will take in results from your survey responses, then compare your answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## What is unique about this app?

This app uses Express to handle routing and is deployed to Heroku. 


## What files are included in this app?

 ```
  FriendFinder
    - .gitignore
    - app  (contains all the files necessary for the app)
      - data
        - friends.js (contains the current friend data)
      - public
        - home.html   (this is the home page of the app)
        - survey.html   (this is the survey page of the app)
      - routing 
        - apiRoutes.js  (this contains a get and post call for the api)
        - htmlRoutes.js (this contains a get call for the html pages)
    - node_modules
    - package.json
    - server.js
  ```
  ## How to run this app
  There should be a version of this app hosted by Heroku 

  https://dashboard.heroku.com/apps/secret-beyond-68240
  

  If you aren't using the version of the app in Heroku, follow these instructions to run the app: 
  1. Download the files and open them in a text editor (such as Visual Studio)
  2. Right click on the server.js file and "Open in Command Prompt"
  3. Install all the dependencies by typing in the command line "npm init". The dependencies required for this app are: express, body-parser, path. You should now have a node_modules file and a package.json file
  4. With the server.js file open in the command line, type in "node server.js"
  5. Then open your favorite browser and type in "localhost:8080/" to see the homepage or "localhost:8080/survey" to see the survey page. 
  6. Take the survey to find your best friend match. 
  7. Entering your data into the form will push your information into a friends array that wil be used in any future surveys, until the browser is closed. 


