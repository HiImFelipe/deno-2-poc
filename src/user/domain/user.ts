import { Email } from "../../value-objects/index.ts";
import type { CreateUserParams } from "./user-dto.ts";

export class User {
  private name!: string;
  private email!: string;
  private password!: string

  constructor(
    params: CreateUserParams
  ) {
    this.name = name;
    this.email = Email.parse(params.email);
    this.password = params.password;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
