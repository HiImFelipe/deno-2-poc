import { assert } from "@std/assert";
import { spy, assertSpyCalls } from "jsr:@std/testing/mock";

import { CreateUserService } from "./create.ts";
import { userRepositoryMock } from "../test/factory/user-repository.mock.ts";

Deno.test("It should create a new user", async () => {
  const userRepositorySpy = spy(userRepositoryMock, "save");
  const createUserService = new CreateUserService(userRepositoryMock);

  const response = await createUserService.execute({
    email: "testing@mail.net",
    name: "Deno",
    password: "321",
  });

  assertSpyCalls(userRepositorySpy, 1);
  assert(response, "User was not created");
});
