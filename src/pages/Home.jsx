import { useLoaderData, useOutletContext } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Phones from "../Components/Phones/Phones";
import useGetPhone from "../Hooks/useGetPhone";

function Home() {
  const phones = useLoaderData();
  const { phone } = useGetPhone();
  const constestText = useOutletContext();
  console.log(phone, constestText);

  return (
    <div>
      <Banner></Banner>

      <Phones phones={phones}></Phones>
    </div>
  );
}

export default Home;
