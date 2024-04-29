import { FaUserEdit } from "react-icons/fa";
import { Avatar } from "./Avatar";
export function Sidebar() {
    return (
        <aside
            className="h-[294px] bg-gray800 rounded-lg overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-[72px] object-cover"
            />

            <div className="flex flex-col items-center mt-[-20px]">

                <Avatar src='https://criticalhits.com.br/wp-content/uploads/2018/07/portgas-d-ace-hat-raining-one-piece-anime-18200.jpg' />

                <strong>Felipe Neneu</strong>
                <span>Web Developer</span>
            </div>

            <footer className="border-t-[1px] border-solid border-gray600 mt-5 py-5 px-8">
                <a href="#"
                    className=" h-[50px] bg-transparent text-green500 rounded-lg border-[1px] border-solid py-0 px-1 border-green500 font-bold flex items-center justify-center gap-2
                   
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green500 hover:text-white duration-300 ...
                    ">
                    <FaUserEdit />
                    Editar seu Perfil
                </a>

            </footer>

        </aside>
    )
}