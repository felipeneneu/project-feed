import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
    return (
        <article className="bg-[#202024] rounded-lg ">
            <header className="px-10 pt-10 mb-8">
                <div className="flex flex-row">
                    <Avatar hasBorder={false} src='https://criticalhits.com.br/wp-content/uploads/2018/07/portgas-d-ace-hat-raining-one-piece-anime-18200.jpg' />

                    <div className="flex flex-1 justify-between px-5 text-[16px] text-white">
                        <div className="flex flex-col">
                            <strong>Felipe Neneu</strong>
                            <span className="text-sm text-[#8D8D99]">Web Developer</span>
                        </div>
                        <div className="">
                            <time title="27-04-2024 as 19:25" dateTime="27-04-2024  19:25" className="text-[#8D8D99] text-sm">Públicado há 1h</time>
                        </div>

                    </div>



                </div>
            </header>

            <div className="px-10 pb-10 ">
                <p className="border-b-[1px] border-solid border-gray-400 pb-3"><p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>

                    <p className="pt-8 mb-6 text-green500" >
                        <a href="https://github.com/felipeneneu/" target="_blank"> 👉 https://github.com/felipeneneu/ </a>

                    </p>
                    <p className=" text-green500">#novoprojeto #nlw #rocketseat</p>


                </p>
            </div>

            <footer className="px-10 flex mx-auto mb-6 flex-col">

                <form>

                    <strong className="">Deixe seu feedback</strong>

                    <textarea
                        placeholder="Deixe um comentario"

                        className="w-full h-24 border-[3px] rounded-lg border-green500 bg-gray700 p-3 mt-4 resize-none outline-none"></textarea>
                    <button type="submit"
                    className=" h-10 w-24 bg-green500 text-white rounded-lg border-[1px] border-solid mt-3 px-1 border-green500 font-bold flex items-center justify-center gap-2
                   
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green500 hover:text-white duration-200 ...
                    mb-10">

                    Publicar
                </button>
                </form>

            </footer>
            <div className="px-10 ">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article >
    )
}