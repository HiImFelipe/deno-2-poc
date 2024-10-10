import type { UserRepository } from "../repositories/interface.ts";

export type CreateUserParams = {
  email: string;
};
export type CreateUserResponse = Promise<void>;

export class DeleteUserByEmail {
  constructor(private userRepository: UserRepository) {}

  public async execute({ email }: CreateUserParams): Promise<void> {
    await this.userRepository.deleteByEmail(email);
  }
}
