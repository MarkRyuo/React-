import { useEffect, useState } from "react";



function Func_Card({image, title, text}){
    
    const [hasVoted, setHasVoted] = useState(false) ;
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${title} has Been Voted ${hasVoted}`)
    }, [title, hasVoted])

    return (
        <div className="max-w-3xs min-w-[200px] p-1.5">
            <img src={image} alt="" className=" rounded-2xl"/>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-[1rem]">{text}</p>
            <button type="button" className="border-2 rounded-[10px] p-0.5 w-full cursor-pointer" 
            onClick={() => {
                setHasVoted(true)
                setCount(count + 1)
            }}>
                {hasVoted ? "Voted": "Vote"} <br />
                {count}
            </button>
        </div>
    )
}

export default Func_Card ;