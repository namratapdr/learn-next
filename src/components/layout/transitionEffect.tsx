import {motion} from "framer-motion";
import {LayoutProps} from "@component/components/layout/interface/layout-props";

const TransitionEffect = ({ children, className="" }: LayoutProps) => {
    return (
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{duration: 0.75, ease: "easeOut"}}
                    exit={{opacity: 0}}
                    className={`${className} flex flex-col absolute top-0 justify-center items-center`}>
            {children}
        </motion.div>
    )
}
export default TransitionEffect
