import { UserRepository } from '@/infra/repositories/User/user.repository';
import { useQuery } from '@tanstack/react-query';
import { ListUsers } from '../list-users-use-case';
import { UserEntity } from '@/core/domain/entities/User';

const userRepository = new UserRepository();
const listUsersUseCase = new ListUsers(userRepository);

export function useListUsers() {
  return useQuery<UserEntity[]>({
    queryKey: ['users'],
    queryFn: async () => listUsersUseCase.execute(),
  });
}
