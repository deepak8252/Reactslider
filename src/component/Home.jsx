import { data } from "../util/constant"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        centeralMode:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
  return (
    <div className=" w-3/4 mx-auto">
               

     <div className=" mt-20 ">
     <Slider {...settings}>
     {
        data.map((item)=>(
           <>
             <div key={item.id} className="bg-white  text-black rounded-2xl m-2">
             <div className="rounded-2xl bg-indigo-500 flex justify-center items-center h-56 ">
                <img src={item.img} alt="" className="h-44 w-44 rounded-full" />
             </div>
             <div className="flex flex-col  justify-center items-center gap-4 p-4">
                <h3 className="font-bold capitalize text-2xl ">{item.name}</h3>
                <p>{item.review}</p>
                <button className=" bg-indigo-500 text-white p-2 m-2 text-xl capitalize rounded-lg">read more</button>
             </div>
             </div>
           </>
        ))
     }
      </Slider>
     </div>
    
    </div>
  )
}

export default Home