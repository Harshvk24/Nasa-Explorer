// __test__/neo.test.js
const request = require("supertest");
const app = require("../index");

describe("GET /neo", () => {
  it("should return 200 and JSON", async () => {
    const today = new Date().toISOString().slice(0, 10);
    const res = await request(app).get(`/neo?start_date=${today}&end_date=${today}`);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
  });
});
