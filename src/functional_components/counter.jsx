import { useEffect, useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("Black")

    const increment = () => {
        setCount(prevCount => prevCount + 1)
        
    }

    useEffect(() => {
        setTheme(() => {
            if(count >= 1 ){
                return "Green"
            }else if(count <= -1){
                return "Red"
            }

            return "Black"
        })
    }, [count])

    useEffect(() => {

        const handleKey = (e) => {
            if(e.key === "Enter") {
                e.preventDefault()
                setCount(prevCount => prevCount + 1)
            }else if(e.key === "Backspace"){
                e.preventDefault()
                setCount(prevCount => prevCount - 1)
                console.log(e)
            }
        }

        window.addEventListener("keydown", handleKey)

        return () => window.removeEventListener("keydown", handleKey)
    }, [])


    return(
        <div>
            <button type="button" onClick={() => {
                setCount((prevCount) => prevCount - 1 )
            }}>-</button>
            <p>{count} {theme}</p>
            <button type="button" onClick={() => {
                increment()
            }}>+</button>
        </div>
    )
}


export default Counter;