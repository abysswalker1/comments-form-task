export type UserType = {
  id: number
  name: string
  avatar?: string
}

export interface CommentType {
  id: number
  user: UserType
  date: string
  image?: string
  text: string
}

export interface PostType extends CommentType{
  comments: CommentType[] | []
}
