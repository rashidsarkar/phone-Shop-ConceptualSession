import React, { useEffect, useState } from "react";
import PhoneDetailsCard from "../Components/Phones/PhoneDetailsCard";
import FavaritCard from "../Components/FavaritCard/FavaritCard";
import swal from "sweetalert";

function Favorite() {
  const [favorite, setFavorite] = useState([]);
  const [noFound, setNoFound] = useState();
  const [isShow, setIsShow] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorite(favoritesItem);
      const total = favoritesItem.reduce(
        (preve, curr) => preve + curr.price,
        0
      );
      setTotal(total);
    } else {
      console.log("no data found");
      setNoFound("no data found");
    }
  }, []);

  // useEffect(() => {
  //   const handleRemoved = () => {
  //     localStorage.removeItem("favorites");
  //   };
  // }, []);

  const handleRemoved = () => {
    localStorage.removeItem("favorites");
    setFavorite([]);
    setNoFound("no data found");
    swal("Good job!", "Prodact Delet!", "success");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favorite.length > 0 && (
            <div>
              <p>Total Bill : {total}</p>
              <button
                onClick={handleRemoved}
                className="block mx-auto btn btn-error"
              >
                Delete All
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {
              isShow
                ? favorite.map((phone) => (
                    <FavaritCard key={phone.id} phone={phone}></FavaritCard>
                  ))
                : favorite
                    .slice(0, 4)
                    .map((phone) => (
                      <FavaritCard key={phone.id} phone={phone}></FavaritCard>
                    ))

              // <PhoneDetailsCard key={phone.id} phone={phone}></PhoneDetailsCard>
            }
          </div>
          {favorite.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="block mx-auto btn btn-error"
            >
              {isShow ? "See Less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Favorite;
