"use client"
type TodoProps={
    title:string,
    id:string,
    complete:boolean
    toggleTodo:(id:string,complete:boolean)=>void
}

export default function({title,id,complete,toggleTodo}:TodoProps){
    return (
        <>
            <li className="text-3xl flex justify-between">
                <input id={id} type="checkbox" className="cursor-pointer peer" 
                defaultChecked={complete} 
                onChange={(e)=>toggleTodo(id,e.target.checked)}
                />

                <label htmlFor={id} className="cursor-pointer peer-checked:line-through">{title}</label>
            </li>
        </>
    )
        
}