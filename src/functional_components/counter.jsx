import { useState } from "react";





function Counter() {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("Black")

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const changeColor = () => {
        setTheme(() => {
            if(count <= -1 ){
                return "Red"
            }else if(count > 1 ){
                return "Green"
            }

            return "Black"
        })
    }

    return(
        <div>
            <button type="button" onClick={() => {
                setCount((prevCount) => prevCount - 1 )
                changeColor()
            }}>-</button>
            <p>{count} {theme}</p>
            <button type="button" onClick={() => {
                increment()
                changeColor()
            }}>+</button>
        </div>
    )
}


export default Counter;