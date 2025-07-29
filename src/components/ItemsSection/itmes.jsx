export const Items = () => {
  return (
    <section className="ItemsSection-Container w-scree h-max bg-black  text-white flex flex-wrap justify-center pt-10 pb-10">
      <div className="Heading-nav w-10/12 h-max flex flex-row justify-between items-center  ">
        <span className="w-50 h-max text-5xl font-extralight flex flex-wrap ">
          New Collention
        </span>
        <div className="arrowIcons sm:flex flex-row hidden  ">
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
        </div>
      </div>

      <div className="ItemsContainer w-11/12 sm:w-10/12 h-max text-white font-extralight pt-10 ">

        <div className="itemsSection  w-full  h-full flex flex-wrap p-5 justify-center sm:justify-evenly">
            <div className="item w-50 h-80 flex flex-col items-center justify-between hover:scale-105 transition-all hover:bg-zinc-950 rounded-3xl p-2">
                <img src="src\assets\watchPics\image1.png" alt="" className=" h-10/12 object-cover mt-1"/>
                <span className="h-6">Audemars Piguet</span>
            </div>
            <div className="item w-50 h-80 flex flex-col items-center justify-between hover:scale-105 transition-all hover:bg-zinc-950 rounded-3xl p-2">
                <img src="src\assets\watchPics\image5.png" alt="" className=" h-10/12  object-cover mt-1"/>
                <span className="h-6">Tag Heuer</span>
            </div>
            <div className="item w-50 h-80 flex flex-col items-center justify-between hover:scale-105 transition-all hover:bg-zinc-950 rounded-3xl p-2">
                <img src="src\assets\watchPics\image3.png" alt="" className=" h-10/12 object-cover mt-1"/>
                <span className="h-6">OMEGA</span>
            </div>
            <div className="item w-50 h-80 flex flex-col items-center justify-between hover:scale-105 transition-all hover:bg-zinc-950 rounded-3xl p-2">
                <img src="src\assets\watchPics\image4.png" alt="" className=" h-10/12 object-cover mt-1"/>
                <span className="h-6">Rolex</span>
            </div>
            <div className="item w-50 h-80 sm:flex flex-col items-center justify-between hover:scale-105 transition-all hover:bg-zinc-950 rounded-3xl p-2 hidden">
                <img src="src\assets\watchPics\image2.png" alt="" className=" h-10/12 object-cover mt-1 "/>
                <span className="h-6">jaeguar-LeCoultre</span>
            </div>
        </div>

      </div>
    </section>
  );
};
