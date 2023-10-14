import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";


export const GET = async () => {
    const users = await prisma.users.findMany()
    return json(users)
}

export const POST = async ({ request }) => {
    const { user, password } = await request.json()
    const createdUser = await prisma.users.create({
        data: {
            user: user,
            password: password
        }
    })
    return json(createdUser)
}
