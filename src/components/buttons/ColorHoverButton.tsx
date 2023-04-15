import {motion} from "framer-motion";

const ColorHoverButton = () => {
    return (
        <motion.button className={`h-10 bg-[#CDB4DB] dark:bg-light text-white dark:text-black w-max px-4 m-2 text-sm rounded-lg`}
                       whileHover={
            {
                backgroundColor:[ "#CDB4DB","#FFC8DD","#FFAFCC","#BDE0FE","#A2D2FF", "#CDB4DB"],
                transition: { duration: 1, repeat: Infinity }
            }
        }>
            Click!
        </motion.button>
    );
};
export default ColorHoverButton;
