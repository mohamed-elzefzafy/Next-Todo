"use server";
import { ITodo } from "@/interfaces/todoInterfaces";
import { todoFormValues } from "@/validation/todoSchema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();

export const getUserTodoList = async ({userId} : {userId : string | null}) => {
  if (!userId) return [];
  return await prisma.todo.findMany({where : {user_id : userId as string} ,orderBy: { createdAt: "desc" } });
};

export const createTodoList = async (
  { title, body, completed }: todoFormValues,
  user_id: string | null
) => {
  await prisma.todo.create({
    data: { title, body, completed, user_id: user_id as string },
  });
  revalidatePath("/");
};
export const updateTodoList = async ({ title, body, completed, id }: ITodo) => {
  if (!id) return;
  await prisma.todo.update({ where: { id }, data: { title, body, completed } });
  revalidatePath("/");
};
export const deleteTodoList = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
};
