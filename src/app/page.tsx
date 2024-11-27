"use client"
import { UserList } from "@/components/UsersList"
import { useListUsers } from "@/core/use-cases/User/hooks/useListUsers"

export default function Home() {
  const { data: users, isLoading, error } = useListUsers()

  if (isLoading) return <p>Carregando usuários...</p>
  if (error) return <p>Erro ao carregar os usuários.</p>

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {users && <UserList users={users} />}
    </main>
  );
}
