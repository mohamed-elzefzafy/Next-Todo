"use client";
import { Trash } from "lucide-react"
import Spinner from "./Spinner"
import { Button } from "./ui/button"
import { deleteTodoList } from "@/actions/todoAction";
import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { revalidatePath } from "next/cache";
import EditTodoForm from "./EditTodoForm";
// import { todoFormValues } from "@/validation/todoSchema";
import { ITodo } from "@/interfaces/todoInterfaces";



const TodoTableAction = ({todo} : {todo : ITodo}) => {
    // const router = useRouter();
    const [loading, setLoading] = useState(false);

    const deleteTodoHandler = async(id : string)=> {
       setLoading(true);
      await deleteTodoList({id});
      setLoading(false);
    //   router.refresh();
  
    }

  return (
    <>
<EditTodoForm todo={todo}/>
 <Button size={"icon"} variant={"destructive"} 
 onClick={() => deleteTodoHandler(todo.id as string)}>
     {(loading) ? <Spinner/> : <Trash size={16}/>} </Button>
    </>
  )
}

export default TodoTableAction