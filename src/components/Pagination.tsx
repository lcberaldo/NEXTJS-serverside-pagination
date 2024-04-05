'use client'

import { useRouter, useSearchParams } from "next/navigation";

type Pagination = {
  pagesCount: number,
  hasControls: boolean
  hasPrevPage?: boolean,
  hasNextPage?: boolean,
}


export default function Pagination({ pagesCount, hasPrevPage, hasNextPage, hasControls }: Pagination) {

  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'


  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);




  return (
    <div className="my-8 " >

      {!hasControls && pages.map((page) =>
        <button
          className="mx-2"
          onClick={() => router.push(`?page=${page}`)}
          key={page}>{page}</button>
      )}

      {hasControls && (
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
      )}
    </div>
  );
}


