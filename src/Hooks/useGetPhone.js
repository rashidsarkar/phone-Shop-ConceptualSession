import { useEffect, useState } from "react";

function useGetPhone() {
  const [phone, setPhone] = useState();
  useEffect(() => {
    fetch("/public/phones.json")
      .then((res) => res.json())
      .then((data) => setPhone(data));
  }, []);

  return { phone };
}

export default useGetPhone;
