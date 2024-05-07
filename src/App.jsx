import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://criticalhits.com.br/wp-content/uploads/2018/07/portgas-d-ace-hat-raining-one-piece-anime-18200.jpg',
      name: 'Felipe Neneu',
      role: 'CTO @ Rocketnote'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: '#' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }, {
    id: 2,
    author: {
      avatarUrl: 'https://criticalhits.com.br/wp-content/uploads/2022/08/luffy-one-piece-1015-910x511.jpg',
      name: 'Mysterio',
      role: 'CTO @ Rocketnote'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: '#' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
]

export function App() {

  return (
    <div className="bg-gray900 h-dvh text-gray300 antialiased font-primary overflow-auto">
      <Header />

      <div className="max-w-[70rem] my-8 mx-auto py-0 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>

  )
}



