export interface IGame {
  name: string
  description: string
  clients: {
    name: string,
    role: string
  }[]
  // roleList: string[]
}

export interface IRole {
  id: number
  name: string
}

export interface IClient {
  id: number
  name: string
}

export interface IAction {
  title: string 
  isLocked: boolean
  effect?: string
}
export interface IExam {
  title: string 
  effect?: string
}

export interface IPage {
  title: string
  number: number
  date: string 
  role: string
  description: string
  text: string 
  img?: any 
  actions?: IAction[]
  // ЛИБО! Возможна проверка (нужно только что-то одно отправлять)
  exam?: IExam
}