import {NavigationOption} from "@component/components/navbar/interface/navigation-option";
import {NavigationOptions} from "@component/components/navbar/navLinks";
import styles from './navbar.module.scss'
import Link from "next/link";
import {BsFillMoonStarsFill} from "react-icons/bs";
import Logo from "@component/components/logo";

const navOptions: NavigationOption[] =  NavigationOptions.get();

const Navbar = () =>  {

    return (
        <nav className={`${styles.navbar} w-full h-20`}>
            <div className={`${styles.uNavOptions} flex flex-row justify-between items-center w-full h-full`}>
                <Logo></Logo>
                {
                    navOptions.map((link: NavigationOption) =>
                        <Link key={link.title}
                              href={link.route}
                              className={`${styles.uNavbarOption} uppercase`} >
                            {link.title}
                        </Link>
                    )
                }
                <div className="p-2 bg-yellow-200 rounded-full">
                    <BsFillMoonStarsFill className="cursor-pointer"></BsFillMoonStarsFill>
                </div>

            </div>
        </nav>
    );
};
export default Navbar;
