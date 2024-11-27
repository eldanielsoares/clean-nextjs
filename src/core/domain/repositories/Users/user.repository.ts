import { UserEntity } from "../../entities/User";


export interface IUsersRepository {
  list(): Promise<UserEntity[]>;
}
