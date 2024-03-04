const request = require("supertest");

const app = require("../app");

describe("GET /", () => {
  it("'should respond by sending a json object with a message equals to 'Hello world!'", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res.body.message) {
          if (res.body.message === "Hello world!") done();
          else
            done(new Error("Expect the message to be equal to 'Hello world!'"));
        } else {
          done(
            new Error(
              "Expect the response to be a json object with a message property equal to 'Hello world!'"
            )
          );
        }
      });
  });
});
