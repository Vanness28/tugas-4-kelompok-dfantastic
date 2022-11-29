import Header from "./components/Header";
import Background from "./components/Background";
import DestinationHome from "./components/DestinationHome";
import DestinationImage1 from "./assets/wisata1.png";
import DestinationImage2 from "./assets/wisata2.png";
import DestinationImage3 from "./assets/wisata3.png";
import DestinationImage4 from "./assets/wisata5.png";
import Recommendation1 from "./components/Recommendation1";
import Recommendation2 from "./components/Recommendation2";
import Recommendation3 from "./components/Recommendation3";
import RestaurantHomepage from "./components/RestaurantHomepage";
import RestaurantImage1 from "./assets/restoran1.png";
import RestaurantImage2 from "./assets/restoran2.png";
import RestaurantImage3 from "./assets/restoran3.png";
import RestaurantImage4 from "./assets/restoran4.png";
import Footer from "./components/Footer";

function App() {
  const rowOne = [
    {
      img: DestinationImage1,
      Name: "Air Terjun Tumimperas",
      Address: "Pinaras, Tomohon",
    },
    {
      img: DestinationImage2,
      Name: "Amphitheater Woloan",
      Address: "Woloan, Tomohon",
    },
    {
      img: DestinationImage3,
      Name: "Bukit Doa",
      Address: "Kakaskasen, Tomohon",
    },
    {
      img: DestinationImage4,
      Name: "Danau Linow",
      Address: "Tomohon",
    },
  ]
  const rowTwo = [
    {
      img: RestaurantImage1,
      Name: "Elmonts Coffee Resto",
      Address: "Kolongan Satu, Tomohon",
    },
    {
      img: RestaurantImage2,
      Name: "Kelapa 17 Tomohon",
      Address: "Walian Satu, Tomohon",
    },
    {
      img: RestaurantImage3,
      Name: "House of Kitty Resto",
      Address: "Kakaskasen Dua, Tomohon",
    },
    {
      img: RestaurantImage4,
      Name: "Lemongrass Resto",
      Address: "Kawangkoan, Tomohon",
    },
  ]
  return (
    <div className="relative">
        <Header />
        <Background />
        <h2 className="mt-8 font-bold text-center text-black text-2xl md:text-left md:mt-12 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:mt-16 xl:ml-12 xl:text-4xl">Destination</h2>
        <div className="flex flex-col ml-20 min-[375px]:ml-28 min-[425px]:ml-32 md:ml-0 md:flex-row md:space-x-5 lg:space-x-10 xl:space-x-16">
        {rowOne.map((data) => (
      <DestinationHome 
        img={data.img}
        Name={data.Name}
        Address={data.Address}
      />
    ))}
    </div>
      <h2 className="mt-8 font-bold text-center text-black text-2xl md:text-left md:mt-12 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:mt-16 xl:ml-12 xl:text-4xl">Rekomendasi</h2>
      <div className="grid grid-cols-1 gap-4">
          <Recommendation1 />  
      </div>  
        <div className="flex flex-col md:flex-row lg:space-x-0.5 grid-cols-2 sm:grid-cols-1 ">
          <Recommendation2 />
        </div>
        <div className="flex flex-col md:flex-row lg:space-x-0.5 grid-cols-3 sm:grid-cols-1">
          <Recommendation3 />
        </div>
        <h2 className="mt-8 font-bold text-center text-black text-2xl md:text-left md:mt-12 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:mt-16 xl:ml-12 xl:text-4xl">Restoran</h2>
        <div className="flex flex-col md:ml-0 md:flex-row md:space-x-5 lg:space-x-10 xl:space-x-16">
        {rowTwo.map((data) => (
      <RestaurantHomepage
        img={data.img}
        Name={data.Name}
        Address={data.Address}
      />
    ))}
    </div>
    <Footer />
      </div>
  );
}

export default App;