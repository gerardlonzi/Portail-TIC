import { Home, icons,History, SquarePlay, ShoppingBag, Users } from "lucide-react"

import { MdOutlineGroupAdd } from "react-icons/md"

export const NavData =[

    {
        name:"Home",
        path:"/",
        icons: <Home />
},
{
    name: "Video(s)",
        path: "/videos",
            icons : <SquarePlay />
},
{
    name: "Shop",
        path: "/shop",
            icons : <ShoppingBag />
},
{
    name: "History",
        path: "/history",
            icons : <History />
}
,
{
    name: "Groupe(s)",
        path: "/groupes",
            icons : <Users />
}
,
{
    name: "Suggestions",
        path: "/suggestions",
            icons : <MdOutlineGroupAdd className='w-6 h-6'/>
}

]



