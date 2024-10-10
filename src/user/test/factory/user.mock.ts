import { User } from "../../domain/user.ts";

export const userMock = new User({
  email: "test@test.com",
  name: "Jhon",
  password: "123",
});
