import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Phones from "../Components/Phones/Phones";
import useGetPhone from "../Hooks/useGetPhone";

function Home() {
  const phones = useLoaderData();
  const { phone } = useGetPhone();
  console.log(phone);

  return (
    <div>
      <Banner></Banner>

      <Phones phones={phones}></Phones>
    </div>
  );
}

export default Home;
