//TEST DRIVEN DEVELOPMENT
//RED STAGE
//GREEN STAGE - functionality is there, because it passes
//THEN REFACTOR! (both the tests and the models)
//THEN COMMIT
//cont. cycle


const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

describe('hobbits model', function(){ 

    //if you want to clean up the tesing database you want a testing database separate from your dev db

    beforeEach(async () => {
       await db('hobbits').truncate();//if you have FKs and stuff you need to bring in knex cleaner and use it to empty the tables
    });

    describe('insert method', function(){ //this more of an integration test, checking the database. it is not a unit test because it is causing a side effect to check the db
        it('should add the hobbit to the db', async function(){
            //call insert, passing a hobbit object
            await Hobbits.insert({name: "Sam"});
            await Hobbits.insert({name: "Gaffer"});
            await Hobbits.insert({name: "WhoseItz"});
            //use the db-config file to access the db (above import)
            //check the db directly
            const hobbits = await db('hobbits');

            //check that the hobbits added here are in the db
            expect(hobbits).toHaveLength(3);
            
        });
    });
});

//using electron to make a Windows app?
//luis uses bitbucket for his personal stuff, not github
