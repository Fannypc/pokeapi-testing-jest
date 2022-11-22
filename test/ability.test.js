const sinon = require("sinon");
const request = require("supertest");
const dbService = require("../services/ability");
const app = require("../app");

describe("test", () => {
  afterEach(() => {
    dbService.close();
  });

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
