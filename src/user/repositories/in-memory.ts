// deno-lint-ignore-file require-await
import type { User } from "../domain/user.ts";
import type { UserRepository } from "./interface.ts";

export class InMemoryUserRepository implements UserRepository {
  private users!: User[];

  constructor() {
    this.users = [];
  }

  public async save(user: User) {
    this.users.push(user);

    return true;
  }

  public async deleteByEmail({ email }: { email: string }) {
    this.users = this.users.filter((user: User) => user.getEmail() !== email);

    return true;
  }
}
