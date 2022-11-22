const sinon = require("sinon");
// const supertest = require("supertest");
const request = require("supertest");
const dbService = require("../services/ability");
const app = require("../app");
// let server

describe("test", () => {
  // afterAll((done) => app.close(done));
  // afterEach(async () => {
  //   await server.close();
  // });

  afterEach(() => {
    dbService.close();
  });

  // afterAll(async () => {
  //   await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  // });

  // let server, agent;

  // beforeEach((done) => {
  //   server = app.listen(4000, (err) => {
  //     if (err) done(err);

  //     agent = request.agent(server); // since the application is already listening, it should use the allocated port
  //     done();
  //   });
  // });

  // afterEach(() => {
  //   return server && server.close();
  // });

  it("should return cameras", async () => {
    sinon.stub(dbService, "readAbilities").returns("aaa");
    let info = dbService.readAbilities();
    dbService.readAbilities.restore();
    expect(info).toBe("aaa");

    // this is not recommended because it can leave the dbservice.readAbilities without
    // restoring it if the rest fails before it gets to that line
    // expect(dbService.readAbilities()).toBe("aaa");
    // dbService.readAbilities.restore();

    const result = await request(app).get("/abilities");
    expect(result.status).toBe(200);
  });
});
