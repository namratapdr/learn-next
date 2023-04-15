import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}
              className="cursor-pointer font-bold text-2xl dark:text-white">
            Next
        </Link>
    );
};
export default Logo;
