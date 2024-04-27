import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div className="bg-gray900 h-dvh text-gray300 antialiased font-primary">
      <Header />

      <div className="max-w-[70rem] my-8 mx-auto py-0 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <div>
          <Post
            author='Felipe'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas nulla quidem, quia quam accusantium debitis ipsa tempora laboriosam nisi, aut odio deserunt numquam id nihil pariatur nostrum ratione eligendi.'
          />
          <Post
            author='Felipe'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas nulla quidem, quia quam accusantium debitis ipsa tempora laboriosam nisi, aut odio deserunt numquam id nihil pariatur nostrum ratione eligendi.'
          />
        </div>
      </div>

    </div>

  )
}



