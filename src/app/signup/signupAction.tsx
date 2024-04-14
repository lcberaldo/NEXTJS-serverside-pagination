'use server'

import { PrismaClient } from "@prisma/client";
import { User } from '../../types'
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function signupAction(formdata: FormData) {

  const username = formdata.get('user')
  const name = formdata.get('name')
  const pass = formdata.get('pass')
  const email = formdata.get('email') as string


  const userExist = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (userExist) {
    console.log('email ja utilizado existe')
  }


}