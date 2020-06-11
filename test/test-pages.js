const expect = require("chai").expect;
const request = require("request");

describe("Status and content", function () {
  describe("Main page", function () {
    it("content", function (done) {
      request("http://localhost:8888/", function (error, response, body) {
        var test = "Hello World!!";
        expect(test).to.be.a("String");
        done();
      });
    });
    it("status", function (done) {
      request("http://localhost:8888/", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
