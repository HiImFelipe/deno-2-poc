import type { UserRepository } from "../repositories/interface.ts";
import { User } from "../domain/user.ts";

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
};
export type CreateUserResponse = Promise<User>;

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({
    email,
    name,
    password,
  }: CreateUserParams): CreateUserResponse {
    const user = new User({ name, email, password });

    await this.userRepository.save(user);

    return user;
  }
}
