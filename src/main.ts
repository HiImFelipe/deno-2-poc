import { userServices } from "./user/services/index.ts";

const user = await userServices.create({
  email: "jhon@mail.net",
  name: "Jhon",
  password: "123",
});

console.log(user);
