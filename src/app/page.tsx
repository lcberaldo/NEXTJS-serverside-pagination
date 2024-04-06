import Pagination from "@/components/Pagination";


export type Post = {
  id: number,
  title: string,
  body: string,
  image_url: string
}

type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>
}

async function getPosts({ searchParams }: SearchParams) {

  const response = await fetch(process.env.URL + '/mocks/posts.json')

  const data: Post[] = await response.json()


  const page = searchParams['page'] ?? '1'

  const pageSize = 10;
  const pagesCount = Math.ceil(data.length / pageSize);

  const start = (Number(page) - 1) * pageSize
  const end = start + pageSize


  const entries = data.slice(start, end)


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

  return (
    <div >
      <h1 className="text-white text-2xl mb-3 font-bold">
        Fake Posts Api with serverside pagination and some tailwind classes
      </h1>

      {entries?.map(e => <li key={e.id}>{e.title}</li>)}

      <Pagination
        pagesCount={pagesCount}
        lenght={lenght}
        hasControls={true}
        start={start}
        end={end}
      />

    </div>
  );

}
