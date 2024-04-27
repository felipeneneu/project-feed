import logo from '../assets/Ignite-simbol.svg'

export function Header() {
    return (
        <header className="h-[80px] bg-[#202024] text-white w-full flex justify-center py-5" >

            <img src={logo} className='mr-4 h-8' alt='Logo Ignite' />

            <h1 className="font-bold text-[1.599rem]">Ignite Feed</h1>
        </header>
    )
}