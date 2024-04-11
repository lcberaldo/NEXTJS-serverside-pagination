import { Post, SearchParams } from "@/types";
import Pagination from "@/app/(home)/components/Pagination";
import { CardContainer } from "./components/CardContainer";
import Menu from "./components/Menu";


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

export default async function Home({ searchParams }: SearchParams) {


  const {
    entries,
    pagesCount,
    start,
    end,
    lenght
  } = await getPosts({ searchParams })




  if (!entries) return null

  return (
    <div >
      <div className="mx-auto max-w-5xl py-10">
        <div className="header flex items-center mb-20 justify-between">

          <h1 className="text-white text-4xl  font-bold text-center">
            Fake Posts Api with serverside pagination 😊👌
          </h1>

          <Menu />
        </div>
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
    </div>
  );

}
