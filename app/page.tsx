import {  getUserTodoList } from "@/actions/todoAction";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";




export default async function  Home() {
  const {userId} = auth();
const todos = await getUserTodoList({userId});

  return (
      <main className="container">
<AddTodoForm userId={userId}/>
<TodosTable todos={todos}/>


      </main>

  );
}
