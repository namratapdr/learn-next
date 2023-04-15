import {LayoutProps} from "@component/components/layout/interface/layout-props";
const Layout = ({ children, className="" }: LayoutProps) => {
    return (
        <section className={`nxt-layout nxt-base-width 
        flex flex-col justify-center items-center text-sm 
        ${className}`
        }>
            {children}
        </section>
    );
};
export default Layout;
