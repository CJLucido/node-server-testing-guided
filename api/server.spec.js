const request = require('supertest')
const server = require('./server')

describe('server.js', function(){
    ///ENVIRONMENT TEST
    describe('environment', function(){
        it('should set environment to testing', function(){
            expect(process.env.DB_ENV).toBe('testing')//always make sure it can fail!!!
        });
    });
///GET TEST
    describe('when we do a get /', function(){
        it('should return status 200', function(){
            //spin up the server
            return request(server)
            //make a get req to /
            .get('/')
            //look at the http status code
            .then(res => {
                expect(res.status).toBe(200)//because this is Async,this will pass because you aren't waiting for it to resolve (this code isn't being executed, it's like you are testing an empty test)
                //async can be resolved by just adding a return, as seen next to request
            });
            
        });
    //2ndary-JSON TEST
        it('it should return JSON', function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
        });
        //2ndary check res.body
        it('it should return up', function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body.api).toMatch("up")
            });
        });
           //2ndary SET HEADER
           it.skip('sample of setting header/auth example', function(){ //this will fail because we don't actually have login or restricted endpoints or authZ nor are we returning an array, that's why we skip it
            return request(server)
            .post('/login')
            .send({username: 'me', password: 'pass'})
            .then(res => { //nested promises
                const token = res.body.token;
                return request(server)
                .get('/restrictedendpoint')
                .set('AuthZ', token)
                .then(res=> {
                    expect(Array.isArray(res.body)).toBe(true);
                });
            });
           
        });
    });
});

//with supertest library we don't need to have server running because it spins up the server just for the endpoint temporarily

//don't use the supertest auth, use set. instead of supertest expect which is limited, use the jest syntax when necessary