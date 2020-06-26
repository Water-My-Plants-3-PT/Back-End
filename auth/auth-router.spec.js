const User = require('../users/users-model.js');
const db = require('../database/connection.js');
const server = require('../api/server.js');
const request = require('supertest');

describe('testing API calls', () => {

  describe("Register tests", () => {
    describe("register()", () => {
      it("should register a new user", async () => {
        await User.add({ username: "veto999", password: "password", phoneNumber: 1234567890 });

        const user = await db("users");

        expect(user).toHaveLength(7);
      })
    })

        describe('has user property', () => {
      test('registers successfully with res 201', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ "username": "veto5", "password": "password" })
          .then(res => {
            expect(res.status).toBe(201)
          })
      })
    })
  })

  describe('users successfully registered', () => {
    describe('has user property', () => {
      test('registers successfully with res 201', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ "username": "veto5", "password": "password" })
          .then(res => {
            expect(res.status).toBe(201)
          })
      })
    })
  })

  describe('login test', () => {
    describe('successful login', () => {
      it('should login successfully', () => {
        return request(server)
        .post('/api/auth/login')
        .send({ "username": "veto5", "password": "password" })
        .then(res => {
          expect(res.status).toBe(200)
        });
      })
    })
  })
});