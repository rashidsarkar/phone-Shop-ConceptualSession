import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";
import FavaritCard from "../FavaritCard/FavaritCard";

function PhoneDetails() {
  const [phone, setPhone] = useState({});
  const { idx } = useParams();
  const phonesData = useLoaderData();
  // console.log(phonesData);
  useEffect(() => {
    const findPhone = phonesData?.find((phone) => phone.id === idx);
    // console.log(findPhone);
    setPhone(findPhone);
  }, [idx, phonesData]);
  // console.log(phone);

  return (
    <div>
      <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
      {/* <FavaritCard phone={phone}></FavaritCard> */}
    </div>
  );
}

export default PhoneDetails;
