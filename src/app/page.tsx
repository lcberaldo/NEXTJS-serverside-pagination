import Pagination from "@/components/Pagination";

type Post = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default async function Home({ searchParams }: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data: Post[] = await response.json()

    if (response.status !== 200) {
      return (
        <>
          <h1>Erro:</h1>
          <p>{response.statusText}</p>
        </>
      )
    }

    const page = searchParams['page'] ?? '1'

    const pageSize = 10;
    const pagesCount = Math.ceil(data.length / pageSize);

    const start = Number(page) - 1
    const final = start + pageSize

    const entries = data.slice(start, final)

    return (
      <div >
        <h1 className="text-white text-2xl mb-3 font-bold">Fake Posts Api with serverside pagination and some tailwind classes</h1>

        {entries.map(e => <li key={e.id}>{e.title}</li>)}

        <Pagination pagesCount={pagesCount} hasControls={true} hasPrevPage={start > 0} hasNextPage={final < data.length} />

      </div>
    );
  } catch (err) {
    console.log(err)
  }
}
