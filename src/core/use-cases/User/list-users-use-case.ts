import { UserEntity } from "@/core/domain/entities/User";
import { IUsersRepository } from "@/core/domain/repositories/Users/user.repository";

export class ListUsers {
  private userRepository: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.list();
  }
}
