import prisma from "@/db"
import Link from "next/link"
async function createTodo(data:FormData){
    "use server"
    console.log("Hi")
}

export default function Page(){
    return (
        <>
        <header className="flex  justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
        </header>
        <form action="" className="flex gap-2 flex-col">
            <input type="text" name="title"
            className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none"
            />
            <div className="flex gap-1 ">
            <Link href='..' className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none">Cancel</Link>
        <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none  ">Create</button>
            </div>
        </form>
        </>
    )
}