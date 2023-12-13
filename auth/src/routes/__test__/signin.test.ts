import request from "supertest";
import app from "../../app";

it("fails when a email that does not exist is suplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "testtest.com",
      password: "password",
    })
    .expect(400);
});
it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "paord",
    })
    .expect(400);
});
it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
  const reponse = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);
    
  expect(reponse.get("Set-Cookie")).toBeDefined();
});
