import request from "supertest";
import app from "../../app";

it("should return 200 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("should return 400 on unsuccessful signup with invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "testtest.com",
      password: "password",
    })
    .expect(400);
});
it("should return 400 on unsuccessful signup with invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "pas",
    })
    .expect(400);
});
it("should return 400 with missing email & password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@gmailc.om" })
    .expect(400);

  return request(app)
    .post("/api/users/signup")
    .send({ password: "password" })
    .expect(400);
});

it("disallow signup with existing email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

// test cookie
it("set a cookie after a successful signup ", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
  expect(response.get("Set-Cookie")).toBeDefined();
});
