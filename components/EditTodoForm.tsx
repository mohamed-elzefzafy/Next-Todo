"use client";
import {Form,FormControl,FormDescription,FormField,
    FormItem,FormLabel,FormMessage} from "@/components/ui/form"
  import { Button } from "@/components/ui/button";
  import { Dialog, DialogContent, DialogHeader,
     DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { todoFormSchema, todoFormValues } from "@/validation/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  updateTodoList } from "@/actions/todoAction";
import { Checkbox} from "./ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";
import { ITodo } from "@/interfaces/todoInterfaces";




const EditTodoForm = ({todo} : {todo : ITodo}) => {
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);
const defaultValues: Partial<todoFormValues> = {
  title: todo?.title || "",
  body: todo?.body || "",
  completed: todo?.completed || false,
};

   
     const form = useForm<todoFormValues>({
       resolver: zodResolver(todoFormSchema),
       defaultValues,
       mode: "onChange",
     })
   
   
     const onSubmit = async ({ title, body, completed }: todoFormValues) => {
      setLoading(true);
      await updateTodoList({ title, body : body as string, completed, id: todo.id });
      setLoading(false);
      setOpen(false);
  };
        
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Button size={"icon"} className="bg-blue-500"> <Pen size={16}/> </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit todo</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription> */}
      </DialogHeader>
      <div className="py-4">

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>title</FormLabel>
            <FormControl>
              <Input placeholder="go to gym" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
         <FormField
        control={form.control}
        name="body"
        render={({ field }) => (
          <FormItem>
            <FormLabel>short description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              You can write short description
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="completed"
        render={({ field }) => (
          <FormItem>
        
            <FormControl>
             <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel className="ml-1">completed</FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />

            <Button type="submit" disabled={loading}>{loading ? <Spinner/> : "Save"}</Button>
      </form>
      </Form>
      </div>
      {/* <DialogFooter>
  
      </DialogFooter> */}
    </DialogContent>
  </Dialog> 
  )
}

export default EditTodoForm;