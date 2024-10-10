// deno-lint-ignore-file require-await
import type { UserRepository } from "../../repositories/interface.ts";

class UserRepositoryMock implements UserRepository {
  async save(): Promise<boolean> {
    return true;
  }

  async deleteByEmail(): Promise<boolean> {
    return true;
  }
}

export const userRepositoryMock = new UserRepositoryMock();
