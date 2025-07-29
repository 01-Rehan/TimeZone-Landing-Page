export const Button = ({color,text,textColor}) =>{
    return (

        <button className={`w-40 h-12 border m-2.5 border-white bg-${color} rounded-xl text-${textColor}`}>
            {text}
        </button>

    )
}