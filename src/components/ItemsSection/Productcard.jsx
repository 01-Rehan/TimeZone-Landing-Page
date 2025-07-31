import { motion } from "framer-motion"

export const ProductCard =({image,name}) => {
    return (
        <motion.div
        initial={{
          opacity :0
        }}
        whileInView={{
          opacity : 1,
          bottom : 10
        }}
        viewport={{
          once: true,
          amount: "all"
        }}
        transition={{
          duration : 1 ,
        }}
        className="item relative w-50 h-80 flex flex-col items-center justify-between  rounded-3xl p-2 hover:scale-105 transition hover:bg-zinc-900">
                <img src={`./assets/watchPics/${image}`} alt="" className=" h-10/12 object-cover mt-1"/>
                <span className="h-6">{name}</span>
        </motion.div>
    )
};