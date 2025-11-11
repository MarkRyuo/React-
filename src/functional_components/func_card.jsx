


function Func_Card({image, title, text}){
    
    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
            <button type="button">
                Liked
            </button>
        </div>
    )
}

export default Func_Card ;