import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, },)

    const punlishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className="bg-[#202024] rounded-lg ">
            <header className="px-10 pt-10 mb-8">
                <div className="flex flex-row">
                    <Avatar hasBorder={false} src={author.avatarUrl} />

                    <div className="flex flex-1 justify-between px-5 text-[16px] text-white">
                        <div className="flex flex-col">
                            <strong>{author.name}</strong>
                            <span className="text-sm text-[#8D8D99]">{author.role}</span>
                        </div>
                        <div className="">
                            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} className="text-[#8D8D99] text-sm">{punlishedDateRelativeToNow}</time>
                        </div>

                    </div>



                </div>
            </header>

            <div className="px-10 pb-10 ">
                <div className="border-b-[1px] border-solid border-gray-400 pb-3">
                    {content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p><a href="">{line.content}</a></p>
                        }
                    })}

                </div>
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