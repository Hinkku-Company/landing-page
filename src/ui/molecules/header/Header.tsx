import { useState } from 'react'
import { CloseIcon, AphroditeIcon, HamburgerIcon } from '@/ui/atoms/icons';
import "./Header.css";
export const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const itemsMenu = [
        {
            title: "INICIO"
        },
        {
            title: "SERVICIOS"
        },
        {
            title: "NOSOTROS"
        },
        {
            title: "CONTACTO"
        },

    ]
    return (
        <div >
            <nav className={`'w-full container-menu ${navbar ? "open-menu w-full" : "w-full"}`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-5 md:block">
                            <a>
                                <AphroditeIcon SvgClassName="icon-menu-container" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none "
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <div >
                                            <CloseIcon SvgClassName='icon-menu-open-and-close' />
                                        </div>

                                    ) : (
                                        <HamburgerIcon SvgClassName='icon-menu-open-and-close' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='responsive-menu-container '>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "open-menu" : "hidden"
                                }`}
                        >
                            <ul className="mt-40 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                {itemsMenu.map((item, idx: number) =>
                                    <li key={idx}>{item.title}</li>
                                )}

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
