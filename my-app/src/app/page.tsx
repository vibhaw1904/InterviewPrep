import Image from "next/image";
import prisma from "@/db";
import Link from "next/link";

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos=await getTodos()
  // await prisma.todo.create({data:{title:'test2',complete:false}})
  return (
   <>
    <header className="text-2xl flex justify-between  items-center mb-4 mt-3">
      <h1>Todos</h1>
      <Link href='/new' className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700">New</Link>

    </header>
    <ul>
     {
      todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))
     }
    </ul>
    </>
  );
}
