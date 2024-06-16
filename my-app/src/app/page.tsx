import Image from "next/image";
import prisma from "@/db";
import Link from "next/link";
import TodoCard from "@/components/TodoCard";

function getTodos(){
  return prisma.todo.findMany()
}
async function toggleTodo(id:string,complete:boolean){
  "use server"
await prisma.todo.update({where:{id},data:{complete}})
}
export default async function Home() {
  const todos=await getTodos()

  return (
   <>
    <header className="text-2xl flex justify-between  items-center mb-4 mt-3">
      <h1>Todos</h1>
      <Link href='/new' className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700">New</Link>

    </header>
    <ul className="flex justify-center ">
     {
      todos.map((todo)=>(
       <TodoCard key={todo.id} {...todo} toggleTodo={toggleTodo}/>
      ))
     }
    </ul>
    </>
  );
}
