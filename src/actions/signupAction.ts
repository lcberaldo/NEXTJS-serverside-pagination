'use server'

import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function signupAction(formdata: FormData) {

  const username = formdata.get('user') as string
  const name = formdata.get('name') as string
  const pass = formdata.get('pass') as string
  const email = formdata.get('email') as string

  const userExist = await prisma.user.findFirst({
    where: { OR: [{ username }, { email }] }
  });

  if (userExist) {
    return { message: 'Usuário ou e-mail já foram utilizados' }

  }

  var hash = bcrypt.hashSync(pass, 8);


  const user = await prisma.user.create({
    data: {
      name, username, email, pass: hash
    }
  })

  redirect('/')

}
