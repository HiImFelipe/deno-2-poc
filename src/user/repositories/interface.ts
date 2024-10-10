import type { User } from "../domain/user.ts";

export interface UserRepository {
  save(user: User): Promise<boolean>;
  deleteByEmail(userId: string): Promise<boolean>;
}
