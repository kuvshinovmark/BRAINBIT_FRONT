export interface IGame {
  id: number
  name: string
  description: string
  clients: {
    name: string,
    role: {
      id: number
      name: string
    }
  }[]
  gameContents: IPage[]
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
  effect: string
}
export interface IExam {
  title: string 
  effect?: string
}

export interface IPage {
  title: string
  number: number
  order: number
  prompt: string
  time: string 
  role: string
  description: string
  text: string 
  image?: any 
  actions?: IAction[]
  // ЛИБО! Возможна проверка (нужно только что-то одно отправлять)
  exam?: IExam
}