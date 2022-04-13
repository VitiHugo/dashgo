import { useQuery, UseQueryOptions } from "react-query"
import { api } from "../api"

export type User = {
  id: string,
  name: string,
  email: string,
  createdAt: string
}

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

type UseUserProps = { 
  page: number, 
  per_page?: number,
  options: any
}

export async function getUsers(page: number, per_page: number): Promise<GetUsersResponse> {
  
  try {
    const { data, headers } = await api.get('users', {
      params: {
        page,
        per_page: per_page
      }
    })
  
    const totalCount = Number(headers['x-total-count'])
  
    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
      }
    })
  
    return {
      users,
      totalCount
    }
  } catch (err) {
    console.log(err)
  }
}

export function useUsers(page: number, per_page: number,options: any) {
  return useQuery<GetUsersResponse>(['users', page], () => getUsers(page, per_page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options
  })
}