import { UserEntity } from "@/core/domain/entities/User";
import { HttpClient } from "@/infra/services/HttpClient";

export class UserRepository {
  async getAll(): Promise<UserEntity[]> {
    const response = await HttpClient.get('/users')
    
    return response.data.map((user: UserEntity) => new UserEntity(user.id, user.name, user.email, ));
  }
}
