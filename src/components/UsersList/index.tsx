"use client"
import React from 'react'
import { UserEntity } from '@/core/domain/entities/User'

type UserListProps = {
  users: UserEntity[]
}

export const UserList = ({ users }: UserListProps) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <strong>{user.name}</strong> - {user.email}
      </li>
    ))}
  </ul>
);
