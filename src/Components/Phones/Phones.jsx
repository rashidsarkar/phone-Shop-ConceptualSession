import PhoneCart from "./PhoneCart";

function Phones({ phones }) {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-center">
        ALL Catagory Phones
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
        {phones?.map((phone) => (
          <PhoneCart phone={phone} key={phone.id}></PhoneCart>
        ))}
      </div>
    </div>
  );
}

export default Phones;
