export function Avatar({ hasBorder = true, src }) {
    return (

        <img src={src}
            className="w-12 h-12 rounded-lg border-[4px] border-solid border-gray800 
            outline-[2px] outline-green500 outline-none outline-offset-0 box-content mb-4 object-cover" />


    )
}