import shoe from './asset/Shoe.jpeg';
import shoe2 from './asset/Shoe2.jpeg';
import shoe3 from './asset/Shoe3.jpeg';
import './Product1.css';

const Product1 = ({ productObj }) => {

  const images = [shoe, shoe2, shoe3];

  return (
    <div className="productContainer">

      {productObj.map((item, index) => {
        return (
          <div className="containerCard" key={item.id || index}>

            <img
              src={images[index % images.length]}
              className="imageShoe"
              alt={item.name}
            />

            <h3 className="headingShoe">
              {item.name}
            </h3>

            <div className="priceContainerShoe">
              <h4 className="priceShoe">
                ₹{item.price}
              </h4>

              <strike className="strikeShoe">
                ₹{item.strikePrice}
              </strike>
            </div>

            <button className="buttonShoe">
              BUY NOW
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default Product1;