import { Post, SearchParams } from "@/types";
import { CardContainer } from "../components/CardContainer";
import Menu from "../components/Menu";
import Pagination from "../components/Pagination";


export async function getPosts({ searchParams }: SearchParams) {


  const response = await fetch(process.env.URL + '/api/posts', { cache: "no-store" })

  const data: Post[] = await response.json()

  const page = searchParams['page'] ?? '1'

  const pageSize = 9;
  const pagesCount = Math.ceil(data.length / pageSize);

  const start = (Number(page) - 1) * pageSize
  const end = start + pageSize

  const entries = data.reverse().slice(start, end)

  return { entries, pagesCount, start, end, lenght: data.length }
}

export default async function Posts({ searchParams }: SearchParams) {

  const {
    entries,
    pagesCount,
    start,
    end,
    lenght
  } = await getPosts({ searchParams })

  if (!entries) return null

  return (
    <>
      <div className="mx-auto max-w-5xl py-10">

        <Menu>Welcome to Fake Post API 👌</Menu>

        <Pagination
          pagesCount={pagesCount}
          lenght={lenght}
          hasControls={true}
          start={start}
          end={end}
        />

        <CardContainer entries={entries} />

        <Pagination
          pagesCount={pagesCount}
          lenght={lenght}
          hasControls={true}
          start={start}
          end={end}
        />
      </div>
    </>
  );

}
