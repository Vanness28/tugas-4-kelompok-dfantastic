import Header from "./components/Header";
import Background from "./components/Background";
import DestinationHome from "./components/DestinationHome";
import DestinationImage1 from "./assets/wisata1.png";
import DestinationImage2 from "./assets/wisata2.png";
import DestinationImage3 from "./assets/wisata3.png";
import DestinationImage4 from "./assets/wisata5.png";

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
        </div>
  );
}

export default App;