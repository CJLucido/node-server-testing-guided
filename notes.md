opinion- mental model to approach testing
the hardest thing is WHAT should I be testing, not how to test

go after the low hanging fruit
    -happy path. In a perfect world how should the system work
    -edge/other cases. Invalid data (what happens if they give me the wrong type of argument), network problems, etc.

writing tests is also a system design exercise

EVERYTHING IS A FUNCTION OR A VALUE
sometimes when you test a function you don't get a behavior, you just get a value

in react examples:

function (optional args) {returns a value}

component (optional props) {return UI} //the UI is always a string of html

in backend:

endpoint (optional data/url parameter/ query string/header) {return response} //the data is a string || JSON data, which is a string



you should test for whatever rules you set for the incoming data
how should the system react to the wrong data

##User Story

    As a [role]
    I want .... ex: click on the inbox
    So that ... ex: I can see a list //the value the user gets out of the system

##Scenario

```
GIVEN a valid username
    and  an invalid password// you can pass different types of invalid passwords
    and
WHEN the user clicks login

THEN the user should not be logged in
    and the system responds with a status code 401
    and
```
//make sure jest knows it is testing the backend(nodemon) and not browser
npm install -D jest supertest

jest --init

or put it in package.json as
  "jest":{
    "testEnvironment": "node"
  }


  # new stuff
outside of using a dotenv file you can change the env with the cross-env library
    - this will not set it automatically like the .env file, in the package .json it is only being used in the test script

cross-env will take precedence over the .env file when the script runs
make sure if your .env file is calling a different config for the environment(db it points to) that it actually exists in the knexfile!
the db-config was breaking because there was no environment value if there was no DB_ENV defined in the knexfile



heroku > setting > config vars > set DB_ENV to be production in heroku
heroku > add ons > search > heroku-postgresql > should say attached as database
        if you go back to settings you will see DATABASE_URL - heroku will change this throughout the day for security >turn the value into the connection

npm i pg //to install postgres

heroku more> run console > npx knex migrate:latest > run
    now it will make the table 

    dyno-any virtual machine you run

    breaks because of FK constraints probably means when you insert you aren't returning an id, that'w why you should have the pool in development so you have FKs ON in sqlite




    he uses VS Code version lens extension to show package versions (am I also using that because they are already showing)
    also uses prettier extension

    extensions running on the browser - can have malicious code in them to steal information