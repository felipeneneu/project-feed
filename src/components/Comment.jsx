import { FaRegTrashCan, FaThumbsUp } from "react-icons/fa6";

export function Comment() {
    return (
        <div className="mb-10 h-full pb-10">


            <div className="flex gap-4 ">
        < img src = "https://criticalhits.com.br/wp-content/uploads/2018/07/portgas-d-ace-hat-raining-one-piece-anime-18200.jpg" alt = ""
    className = "w-12 h-12 rounded-lg border-[4px] border-solid border-gray800 
    outline-[2px] outline-green500 outline-none outline-offset-0 box-content mb-4 object-cover"  
    />

        <div className = "bg-[#29292E] rounded-lg h-full w-full p-4" >
            <div>
                <header className="flex flex-1 justify-between mb-10">
                    <div className="flex flex-col ">
                        <strong>Devon Lane (você)</strong>
                        <time title="27-04-2024 as 19:25" dateTime="27-04-2024  19:25" className="text-[#8D8D99] text-sm">Cerca de 1h atrás</time>
                    </div>
                    <button title="deletar" className="mb-5 justify-between"><FaRegTrashCan size={20} />
                    </button>
                </header>
                <p className="mb-6">Muito bom Devon, parabéns!! 👏👏</p>
            </div>
                </div>

            </div >
        <footer className="flex w-full mt-6 h-full px-20">
            <div className="flex flex-row flex-1 justify-start gap-x-2 text-sm text-gray400">
                <FaThumbsUp size={16} />
                <button>Aplaudir • 03</button>
            </div>
        </footer>
        </div >

    )
}