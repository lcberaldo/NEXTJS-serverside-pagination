export type Post = {
  id: number,
  title: string,
  content: string,
  image_url: string,
}

export type User = {
  username: string,
  pass: string,
  id: number,
  email: string,
  name: string
}

export type CardType = {
  post: Post,
}

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>
}