import { useState, useEffect } from 'react'
import { CloseIcon, AphroditeIcon, HamburgerIcon } from '@components/React/atoms';
import "./Header.css";
import { basePath } from '@/utils/contantes';
export const Header = ({ needBg = false }) => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);

    // on render, set listener
    useEffect(() => {

        if (window.scrollY >= 100)
            setSticky(true);

        const isSticky = () => {
            /* Method that will fix header after a specific scrollable */
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 100;
            setSticky(stickyClass);
        };
        window.addEventListener("scroll", isSticky);
        return () => window.removeEventListener("scroll", isSticky);
    }, []);

    const goToSection = (id: string) => {
        setNavbar(false);
        window.location.href = `${basePath}/#${id}`;
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
            title: "Ventajas",
            id: 'services'
        },
        {
            title: "Información",
            id: 'info'
        },
        {
            title: "Unirse",
            id: 'contact'
        }
    ];

    return (
        <div className='relative'>
            <nav className={`'w-full fixed z-10 w-full`}>
                <div className={`w-full ${navbar ? 'h-screen' : ''}`}>

                    <div className={`${sticky && !navbar ? 'navbar-bg ' : ''} relative z-20 `}>
                        <div className={`w-full ${needBg && !navbar ? 'bg-black' : ''}`}>
                            <div className="container mx-auto flex items-center justify-between py-2 px-3 md:py-5">
                                <a className='cursor-pointer' onClick={() => goToSection(itemsMenu[0].id)}>
                                    <AphroditeIcon SvgClassName="icon-menu-container" />
                                </a>

                                <div className='hidden md:flex'>
                                    <ul className="font-menu-d font-medium flex gap-[1.25rem]">
                                        {itemsMenu.map((item, idx: number) =>
                                            <li key={idx} onClick={() => goToSection(item.id)}>
                                                <p>
                                                    {item.title}
                                                </p>
                                            </li>
                                        )}
                                    </ul>
                                </div>

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

                    </div>

                    <div className={`${navbar ? "grid" : "hidden"} md:hidden animated fixed z-10 top-0 bottom-0 left-0 right-0`}>
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
