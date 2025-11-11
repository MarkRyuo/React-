import { useState } from "react";



function Func_Card({image, title, text}){
    
    const [hasVoted, setHasVoted] = useState(false)

    return (
        <div className="max-w-3xs min-w-[200px] p-1.5">
            <img src={image} alt="" className="w-[500px] h-[350px] rounded-2xl"/>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-[1rem]">{text}</p>
            <button type="button" className="border-2 rounded-[10px] p-0.5 w-full cursor-pointer" 
            onClick={() => {
                setHasVoted(true)
                console.log("log")
            }}>
                {hasVoted ? "Voted": "Vote"}
            </button>
        </div>
    )
}

export default Func_Card ;