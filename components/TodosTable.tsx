import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ITodo } from "@/interfaces/todoInterfaces"
import { Badge } from "./ui/badge"
import TodoTableAction from "./TodoTableAction";
  
  // const invoices = [
  //   {
  //     invoice: "INV001",
  //     paymentStatus: "Paid",
  //     totalAmount: "$250.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV002",
  //     paymentStatus: "Pending",
  //     totalAmount: "$150.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV003",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$350.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV004",
  //     paymentStatus: "Paid",
  //     totalAmount: "$450.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV005",
  //     paymentStatus: "Paid",
  //     totalAmount: "$550.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV006",
  //     paymentStatus: "Pending",
  //     totalAmount: "$200.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV007",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$300.00",
  //     paymentMethod: "Credit Card",
  //   },
  // ]
  
  export default function TodosTable({todos} : {todos :ITodo[]}) {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo , index) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Not Completed</Badge>}</TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
<TodoTableAction todo={todo}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  