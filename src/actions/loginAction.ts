'use server'

import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import * as jose from 'jose'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function loginAction(formdata: FormData) {
  // get form data
  const username = formdata.get('user') as string
  const password = formdata.get('pass') as string

  //find a user
  const user = await prisma.user.findFirst({
    where: {
      username
    }
  })

  if (!user) {
    return ({ message: "User not found" })
  }

  //passwords compare
  const isSamePass = bcrypt.compareSync(password, user.pass);

  if (!isSamePass) {
    return ({ message: "Incorrect Password" })
  }


  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET,
  )
  const alg = 'HS256'

  const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
    .setProtectedHeader({ alg })
    .setExpirationTime('72h')
    .setSubject(user.id.toString())
    .sign(secret)


  cookies().set("Authorization", jwt, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: '/',
    sameSite: 'strict'
  })

  cookies().set("SessionId", String(user.id), {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: '/',
    sameSite: 'strict'
  })

  redirect('/')

}