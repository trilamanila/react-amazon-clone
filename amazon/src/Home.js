import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Bitcoin Standard"
            price={19.99}
            image="https://image.slidesharecdn.com/1119473861-thebitcoinstandardbysaifedeanammous-181029155741/95/the-bitcoin-standard-pdf-saifedean-ammous-the-decentralized-alternative-to-central-banking-1-638.jpg?cb=1540828701"
            alt=""
            rating={5}
          />
          <Product
            title="AquaSonic Black Series Ultra Whitening Toothbrush – ADA Accepted Rechargeable Toothbrush - 8 Brush Heads & Travel Case - Ultra Sonic Motor & Wireless Charging - 4 Modes w Smart Timer - Sonic Electric"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71byv51vxAL._SX425_.jpg"
            alt=""
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="CASEKOO Defender Designed for iPhone 12 Pro Max Case, [Military Grade Drop Protection], Clear Shockproof Protective Phone Case Slim Thin Cover 5G 6.7 inch 2020- Black "
            price={23.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81FigHXuPHL._AC_SX679_.jpg"
            alt=""
            rating={4}
          />
          <Product
            title="32.8ft Led Lights dalattin Led Strip Lights Color Changing Lights with 44 Keys Remote,1 Roll of 32.8ft"
            price={22.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Pzl06kXPL._AC_SX425_.jpg"
            alt=""
            rating={5}
          />
          <Product
            title=" Huanuo Dual Monitor Stand - Adjustable Spring Monitor Desk Mount Swivel Vesa Bracket with C Clamp, Grommet Mounting Base for 17 to 27 Inch Computer Screens - Each Arm Holds 4.4 to 14.3lbs "
            price={52.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Aq-5A7yFL._AC_SX425_.jpg"
            alt=""
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Novogratz Brittany Sofa Futon - Premium Upholstery and Wooden Legs - Navy Blue "
            price={389.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81KZlom2DHL._AC_SX679_.jpg"
            alt=""
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
