const server = require('../api/server.js');
const supertest = require('supertest');
const request = supertest(server);

const Plant = require('../plants/plants-model.js');
const db = require('../database/connection.js');

describe('testing API end points', () => {

  describe("testing post calls", () => {

    describe("testing post", () => {
      it("should post new plant", async () => {
        const newPlant = {
          nickname: "newPlant2", 
          species: "vine1", 
          h2oFrequency: 1
        };

        const response = await request.post('/api/plants');

        expect(newPlant).toHaveLength(1);
      });
    });
  });

  describe("testing get calls", () => { 

    describe("getting all plants", () => {
      it("should get all plants", async () => {
        const response = await request.get('/api/plants');

        expect(response.status).toBe(200);
      });
    });

    describe("get plant by id", () => {
      it("should get plant by id", async () => {
        const response = await request.get('/api/plants/6');
  
        expect(response.status).toBe(200);
      });
    });
  });

  // describe("testing put call", () => {

  //   describe("getting updated plant", () => {
  //     it("should get updated plant", async () => {
  //       const response = await request.put('/api/plants/5');

  //       expect(response.status).toBe(200);
  //     });
  //   });
  // });

});