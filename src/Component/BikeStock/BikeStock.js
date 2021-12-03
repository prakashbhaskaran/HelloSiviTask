import "./BikeStock.css";
import BikeStockCard from "./BikeStockCard/BikeStockCard";
import Datas from "../Datas";
const BikeStock = () => {
  const BikeStockData = JSON.parse(JSON.stringify(Datas));

  return (
    <div className="bikestock-container">
      <header className="bikestock-header">
        <span className="bikestock-header-text">BIKE STOCK</span>
        <div className="bikestock-brands">
          BRANDS WE CARRY - <span className="bikestock-brandname">LINUS</span> /{" "}
          <span className="bikestock-brandname">BROMPTON</span> /
          <span className="bikestock-brandname"> CHRISTIANIA</span> /{" "}
          <span className="bikestock-brandname">STATE</span>
        </div>
      </header>
      <main className="bikestock-card-list">
        {BikeStockData.map((item) => {
          return (
            <BikeStockCard
              key={item.id}
              brand={item.brand}
              itemname={item.itemname}
              price={item.price}
              instock={item.instock}
              colours={item.colours}
            />
          );
        })}
      </main>
    </div>
  );
};

export default BikeStock;
