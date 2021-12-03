import "./BikeStockCard.css";
import cycle from "../../../Utils/cycle.png";
const BikeStockCard = ({ brand, itemname, price, instock, colours }) => {
  return (
    <div className="bikestock-card-container">
      <div className="bikestock-card">
        <div className="bikestock-card-image">
          <img src={cycle} alt="Error" />
        </div>
        <div className="bikestock-card-brandname">{brand}</div>
        <div className="bikestock-card-itemname">{itemname}</div>
        <div className="hrline"></div>
        <div className="bikestock-card-details">
          <div className="bikestock-card-details-price">
            Price - <span className="price">{price}</span>
          </div>
          <div className="bikestock-card-details-colours">
            Colours -
            {colours.map((color, i) => {
              return (
                <div key={i} className={`colours ${color}`}>
                  {color === "" ? "N/A" : ""}
                </div>
              );
            })}
          </div>
          <div className="bikestock-card-details-instock">
            In Stock - <span className="instock">{instock}</span>
          </div>
          <div className="bikestock-card-details-fullspecs">
            <button>FULL SPECS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeStockCard;
