function Phones({ phones }) {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-center">
        ALL Catagory Phones
      </h1>
      <div>{phones?.map((phone) => console.log(phone))}</div>
    </div>
  );
}

export default Phones;
