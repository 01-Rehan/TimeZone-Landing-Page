import { motion } from "motion/react";
import { ProductCard } from "./Productcard";

export const Items = () => {
  return (
    <section className="ItemsSection-Container w-scree h-max bg-black  text-white flex flex-wrap justify-center pt-10 pb-10">
      <motion.div 
      initial={{
          opacity :0
        }}
        whileInView={{
          opacity : 1,
          bottom:20
        }}
        viewport={{
          once: true,
          amount:"all"
        }}
        transition={{
          duration : 1.5 ,
        }}
      className="Heading-nav w-10/12 h-max flex flex-row justify-between items-center  ">
        <span className="w-50 h-max text-5xl font-extralight flex flex-wrap ">
          New Collention
        </span>
        {/* <div className="arrowIcons sm:flex flex-row hidden  ">
          <span>
            <img
              src="src\assets\SVG's\Icons\circle-arrow-down-02-1.svg"
              alt=""
              className="h-10 w-10 rotate-180"
            />
          </span>
          <span>
            <img
              src="src\assets\SVG's\Icons\circle-arrow-down-02-1.svg"
              alt=""
              className="h-10 w-10"
            />
          </span>
        </div> */}
      </motion.div>

      <div 
      className="ItemsContainer relative w-11/12 sm:w-10/12 h-max text-white font-extralight pt-10 ">

        <div className="itemsSection  w-full  h-full flex flex-wrap p-5 justify-center sm:justify-evenly">
            <ProductCard image={'image1.png'} name={"Audemars Piguet"}/>
            <ProductCard image={'image2.png'} name={"Tag Heuer"}/>
            <ProductCard image={'image3.png'} name={"OMEGA"}/>
            <ProductCard image={'image4.png'} name={"Rolex"}/>
            <ProductCard image={'image5.png'} name={"jaeguar-LeCoultre"}/>
            
        </div>

      </div>
    </section>
  );
};
