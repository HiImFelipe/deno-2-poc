import { assertEquals } from "jsr:@std/assert";
import { userMock } from "../test/factory/user.mock.ts";
import { InMemoryUserRepository } from "./in-memory.ts";

Deno.test("It should create a new user", async () => {
  const userRepository = new InMemoryUserRepository();
  const user = userMock;

  const response = await userRepository.save(user);

  assertEquals(response, true);
});

Deno.test("It should delete an existing user", async () => {
  const userRepository = new InMemoryUserRepository();
  const user = userMock;

  const response = await userRepository.deleteByEmail(user.getEmail());

  assertEquals(response, true);
});
