import {NavigationOption} from "@component/components/navbar/interface/navigation-option";
import {NavigationOptions} from "@component/components/navbar/navLinks";
import styles from './navbar.module.scss'
import Link from "next/link";
import {BsFillMoonStarsFill} from "react-icons/bs";
import Logo from "@component/components/logo";
import useThemeSwitcher from "@component/components/hooks/useThemeSwitcher";
import {NextRouter, useRouter} from "next/router";
import {DarkModeState, SetDarkModeState} from "@component/components/hooks/interface/dark-mode-state";

const navOptions: NavigationOption[] =  NavigationOptions.get();

const Navbar = () =>  {

    const [
        theme,
        setTheme
    ]: readonly [DarkModeState, SetDarkModeState] = useThemeSwitcher();
    const router: NextRouter = useRouter();

    return (
        <nav className={`${styles.navbar} w-full h-20 bg-white dark:bg-black `}>
            <div className={`${styles.uNavOptions} flex flex-row justify-between items-center w-full h-full`}>
                <Logo></Logo>
                <div className="flex justify-between items-center">
                    {
                        navOptions.map((link: NavigationOption) =>
                            <Link key={link.title}
                                  href={link.route}
                                  className={`${styles.uNavbarOption}  dark:text-white mx-5 px-1 relative group`} >
                                {link.title}

                                <span className={`h-[2px] inline-block bg-dark dark:bg-light 
                                absolute left-0 -bottom-0.5 
                                group-hover:w-full transition-[width] ease duration-300
                                ${router.asPath === '/'+ link.route? 'w-full': 'w-0' }
                                `}>&nbsp;</span>
                            </Link>
                        )
                    }
                </div>

                <button onClick={() => setTheme(theme === 'light'? 'dark': 'light')}>
                    {
                        theme === 'dark' ?
                            <div className="p-2 bg-primaryDark rounded-full text-white">
                                <BsFillMoonStarsFill className="cursor-pointer"></BsFillMoonStarsFill>
                            </div>
                            :
                            <div className="p-2 bg-primary rounded-full text-white">
                                <BsFillMoonStarsFill className="cursor-pointer"></BsFillMoonStarsFill>
                            </div>
                    }
                </button>

            </div>
        </nav>
    );
};
export default Navbar;
