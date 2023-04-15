import {NavigationOption} from "@component/components/navbar/interface/navigation-option";
import {NavigationOptions} from "@component/components/navbar/navLinks";
import styles from './navbar.module.scss'

const navOptions: NavigationOption[] =  NavigationOptions.get();

const Navbar = () =>  {

    return (
        <nav className={`${styles.navbar} w-full h-20`}>
            <div className={`${styles.uNavOptions} flex flex-row justify-between items-center w-full h-full`}>
                {
                    navOptions.map((link: NavigationOption) =>
                        <a key={link.title} className={`${styles.uNavbarOption} uppercase`}>
                            {link.title}
                        </a>
                    )
                }
            </div>
        </nav>
    );
};
export default Navbar;
