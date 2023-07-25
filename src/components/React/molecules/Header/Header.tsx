import { useState, useEffect } from 'react'
import { CloseIcon, AphroditeIcon, HamburgerIcon } from '@components/React/atoms';
import "./Header.css";
export const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);

    // on render, set listener
    useEffect(() => {
        const isSticky = () => {
            /* Method that will fix header after a specific scrollable */
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 100;
            setSticky(stickyClass);
        };
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const goToSection = (id: string) => {
        setNavbar(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }


    const itemsMenu = [
        {
            title: "Inicio",
            id: 'home'
        },
        {
            title: "Servicios",
            id: 'services'
        },
        {
            title: "Nosotros",
            id: 'about'
        },
        {
            title: "Contacto",
            id: 'contact'
        }
    ]

    return (
        <div className='relative'>
            <nav className={`'w-full container-menu fixed z-10 w-full`}>
                <div className={`w-full ${navbar ? 'h-screen' : ''}`}>
                    <div className={`${sticky && !navbar ? 'navbar-bg' : ''} relative z-20`}>
                        <div className="flex items-center justify-between py-2 px-6 md:py-5 md:block">
                            <a>
                                <AphroditeIcon SvgClassName="icon-menu-container" />
                            </a>
                            <div className="md:hidden">

                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <CloseIcon SvgClassName='icon-menu-open-and-close' />
                                    ) : (
                                        <HamburgerIcon SvgClassName='icon-menu-open-and-close' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${navbar ? "grid" : "hidden"} animated fixed z-10 top-0 bottom-0 left-0 right-0`}>
                        <div
                            className={`grid items-center bg-[--color-bg-menu] w-full`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                {itemsMenu.map((item, idx: number) =>
                                    <li key={idx} onClick={() => goToSection(item.id)}>{item.title}</li>
                                )}

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}