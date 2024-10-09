import Image from "next/image";
import Header from "../../components/header";
import Shipment from "../../components/shipment";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-fit px-8 py-4 md:px-20 md:py-5 mt-20">
        <Shipment />
      </div>
    </>
  );
}
