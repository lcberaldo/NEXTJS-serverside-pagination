'use client'

import { useRouter, useSearchParams } from "next/navigation";

type Pagination =
  | {
    pagesCount: number,
    lenght: number
    hasControls?: true
    start: number,
    end: number,
  }
  | {
    pagesCount: number,
    lenght: number
    hasControls?: false
    start?: null | undefined | false,
    end?: null | undefined | false,
  }

export default function Pagination({
  pagesCount,
  lenght,
  start,
  end,
  hasControls }: Pagination) {

  const hasPrevPage = start && start > 0
  const hasNextPage = end && end < lenght

  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


  return (
    <div className="my-8 " >

      {hasControls ? (
        <div className="flex gap-8 items-center">
          <button
            disabled={!hasPrevPage}
            onClick={() => router.push(`?page=${Number(page) - 1}`)}
            className="px-5 py-2 bg-blue-400 text-white text-xl rounded-md "
          >prev</button>

          <span>{page}</span>

          <button
            disabled={!hasNextPage}
            onClick={() => router.push(`?page=${Number(page) + 1}`)}
            className="px-5 py-2 bg-blue-400 text-white text-xl rounded-md "
          >next</button>
        </div>
      ) : (
        pages.map((page) =>
          <button
            className="mx-2"
            onClick={() => router.push(`?page=${page}`)}
            key={page}>{page}</button>
        )
      )}

    </div>
  );
}


