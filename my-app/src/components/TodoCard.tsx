type TodoProps={
    title:string,
    id:string,
    complete:boolean

}

export default function({title,id,complete}:TodoProps){
    return (
        <>
            <li className="text-3xl flex justify-between">
                <input id={id} type="checkbox" className="cursor-pointer peer" />
                <label htmlFor={id} className="cursor-pointer peer-checked:line-through">{title}</label>
            </li>
        </>
    )
        
}