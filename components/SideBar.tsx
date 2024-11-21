"use client"


import { Github, Linkedin, SquareKanban, Home,User,Briefcase,Layers,MailOpen } from "lucide-react"
import Link from "next/link"

export function Sidebar() {

  const NavItems = () => (
    <ul className="">
             {/* <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]">
        <Home className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">Home</a>
        </li> */}

      <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <Home className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">Home</a>
      </li>

      <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <User className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">About</a>
      </li>

      <li className="flex items-center h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
            <Briefcase className="h-4 w-4 mr-4 ml-6"/>
            <a href="#" className="">Experience</a>
        
      </li>

      <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <SquareKanban className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">Projects</a>
      </li>

      <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <Layers className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">Stack</a>
      </li>
      
      <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <MailOpen className="h-4 w-4 mr-4 ml-6"/>
        <a href="#" className="">Contact</a>
      </li>

    </ul>

  )

  return (
    <>
      <aside className="hidden md:block w-64 p-4 h-screen fixed overflow-hidden">

        {/**name and profession */}
        <div className="mb-8">
          <div className="ml-4 p-6">
            <h2 className="text-xl font-bold ">Shahriar Saurov</h2>
            <p className="text-md text-gray-600 pt-2">Software Developer</p>
          </div>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
        </div>

        {/**nav items */}
        <nav>
          <NavItems />
        </nav>

        {/**social links */}
        <div className="absolute bottom-6">
            <hr className="my-6 w-56 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
            <div className="flex space-x-12 justify-center items-center">
                <Link href="" passHref>
                    <Github className="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500"/>
                </Link>
                <Link href="" passHref>
                    <Linkedin className="h-6 w-6 cursor-pointer hover:text-[#0077b5] text-gray-500"/>
                </Link>
            </div>
        </div>

        <div className="fixed ml-60 -mt-[400px] h-[1000px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-700 to-transparent opacity-25"></div>
      </aside>

      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-40">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-100 p-4">
          <div className="flex items-center mb-8">
            <img
              src="/placeholder.svg?height=50&width=50"
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">Patrick Kombo</h2>
              <p className="text-sm text-gray-600">Product Designer</p>
            </div>
          </div>
          <nav>
            <NavItems />
          </nav>
        </SheetContent>
      </Sheet> */}
    </>
  )
}

