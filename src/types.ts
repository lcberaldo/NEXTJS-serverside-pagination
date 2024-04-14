export type Post = {
  id: string,
  title: string,
  content: string,
  image_url: string,
}

export type User = {
  username: string,
  pass: string,
  id: string,
  email: string,
  name: string
}

export type CardType = {
  post: Post,
}

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>
}