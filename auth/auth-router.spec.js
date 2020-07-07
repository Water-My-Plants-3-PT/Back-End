const server = require('../api/server.js');
const supertest = require('supertest');
const request = supertest(server);
const db = require('../database/connection.js');

const Users = require('../users/users-model.js');

describe("Register tests", () => {
  describe("register()", () => {
    it("should register a new user", async () => {
      await Users.add({ 
        username: "veto7", 
        password: "password",
        phoneNumber: 1234567890
      });

      const user = await db("users");

      expect(user).toHaveLength(9);
    })
  })
});