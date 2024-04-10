export type Post = {
  id: number,
  title: string,
  body: string,
  image_url: string,
  post_index: string
}

export type CardType = {
  post: Post,
}

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>
}