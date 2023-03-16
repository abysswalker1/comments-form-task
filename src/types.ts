export type UserType = {
  id: number
  name: string
  avatar?: string
}

export interface CommentType {
  id: number
  user: UserType
  date: string
  text: string
  likes: Array<number>
}

export interface PostType extends CommentType{
  comments: Array<CommentType>
  image: string
}
