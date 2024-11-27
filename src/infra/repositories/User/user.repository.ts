import { UserEntity } from "@/core/domain/entities/User";
import { IUsersRepository } from "@/core/domain/repositories/Users/user.repository";
import { HttpClient } from "@/infra/services/HttpClient";


export class UserRepository implements IUsersRepository {

  async list(): Promise<UserEntity[]> {
    const response = await HttpClient.get('/users');
    return response.data.map(
      (user: UserEntity) => new UserEntity(user.id, user.name, user.email),
    );
  }
}
