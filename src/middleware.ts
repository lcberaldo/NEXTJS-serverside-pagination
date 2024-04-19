import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const cookie = cookies().get("Authorization")

  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const jwt = cookie.value

  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {})
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile', '/my-posts']
}