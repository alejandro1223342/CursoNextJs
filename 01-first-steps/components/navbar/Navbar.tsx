//Atajo: rafc

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-Link/ActiveLink"

const navItems = [
    { path: 'about', text: 'About' },
    { path: 'pricing', text: 'Pricing' },
    { path: 'contact', text: 'Contact' }
]
const Navbar = () => {

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>


            <div className="flex flex-1"></div>

            {
                navItems.map(navItems => (
                    <ActiveLink key={navItems.path} {...navItems} />
                ))
            }

        </nav>
    )
}

export default Navbar
