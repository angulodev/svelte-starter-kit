import prisma from '$lib/prisma.js'
import { json } from '@sveltejs/kit'


export const GET = async ({ params: { id } }) => {
    const user = await prisma.users.findFirst({
        where: {
            id: Number(id)
        }
    })
    return json(user)
}

export const PUT = async ({ params: { id }, request }) => {
    const { user, password } = await request.json()
    const updateUser = await prisma.users.update({
        where: {
            id: Number(id)
        },
        data: {
            user,
            password
        }
    })
    return json(updateUser)
}

export const DELETE = async ({ params: { id } }) => {
    const deleteUser = await prisma.users.delete({
        where: {
            id: Number(id)
        }
    })
    return json(deleteUser)
}