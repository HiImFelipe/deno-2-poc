import { InMemoryUserRepository } from "../repositories/in-memory.ts";
import {
  CreateUserService,
  type CreateUserParams,
  type CreateUserResponse,
} from "./create.ts";
import {
  type DeleteUserByEmailParams,
  type DeleteUserByEmailResponse,
  DeleteUserByEmailByEmailService,
} from "./delete-by-email.ts";

class UserServices {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly deleteUserByEmailByEmailService: DeleteUserByEmailByEmailService
  ) {}

  async create(params: CreateUserParams): CreateUserResponse {
    return await this.createUserService.execute(params);
  }

  async deleteByEmail(
    params: DeleteUserByEmailParams
  ): DeleteUserByEmailResponse {
    return await this.deleteUserByEmailByEmailService.execute(params);
  }
}

const userRepository = new InMemoryUserRepository();
const createUserService = new CreateUserService(userRepository);
const deleteUserByEmailByEmailService = new DeleteUserByEmailByEmailService(
  userRepository
);

export const userServices = new UserServices(
  createUserService,
  deleteUserByEmailByEmailService
);
