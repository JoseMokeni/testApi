const request = require("supertest");

const app = require("../app");

describe("GET /", () => {
  it("'should respond by sending a json object with a message equals to 'Hello world!'", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Hello world!" }, done);
  });
});
