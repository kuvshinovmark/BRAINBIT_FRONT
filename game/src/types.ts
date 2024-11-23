export interface IGame {
  name: string
  description: string
  users: {
    name: string,
    role: string
  }[]
  roleList: string[]
}