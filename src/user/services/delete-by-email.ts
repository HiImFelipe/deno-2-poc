import type { UserRepository } from "../repositories/interface.ts";

export type DeleteUserByEmailParams = {
  email: string;
};
export type DeleteUserByEmailResponse = Promise<void>;

export class DeleteUserByEmailByEmailService {
  constructor(private userRepository: UserRepository) {}

  public async execute(email: DeleteUserByEmailParams): Promise<void> {
    await this.userRepository.deleteByEmail(email);
  }
}
