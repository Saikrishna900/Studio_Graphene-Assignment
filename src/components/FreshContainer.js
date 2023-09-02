import "bootstrap/dist/css/bootstrap.min.css";
import PrimaryButton from "./PrimaryButton";
import Dropdown from 'react-bootstrap/Dropdown';
import "./FreshContainer.css";
const navbar = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  {
    name: 'Our Products',
    id: 'product',
    child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ],
  },
  { name: 'Contact Us', id: 'contact' },
];

const FreshContainer = () => {
  return (
    <div className="frame1">
      <div className="frame2">
        <img className="frame-icon" alt="" src="/frame.svg" />
        <div className="frame3">
          <PrimaryButton
            primaryButtonPosition="absolute"
            primaryButtonTop="0px"
            primaryButtonLeft="0px"
            primaryButtonBorder="1px solid #fff"
            primaryButtonBoxSizing="border-box"
          />
        </div>
        <div className="frame4">
          
        </div>
        <div className="frame-child" />
        <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
        <div className="frame5">
          <div className="rectangle-parent">
            <div className="frame-item" />
            <img className="frame-inner" alt="" src="/star-3.svg" />
            <img
              className="jessica-radanavong-ichpbhfd0pw-icon"
              alt=""
              src="/jessicaradanavongichpbhfd0pwunsplash@2x.png"
            />
            <div className="rectangle-div" />
            <img className="star-icon" alt="" src="/star-4.svg" />
            <div className="oregon-jacket">Oregon jacket</div>
            <div className="div1">$124</div>
            <div className="line-div" />
          </div>
        </div>
        <div className="frame6">
          <div className="lorem-ipsum-dolor">Fresh</div>
        </div>
        <div className="frame7">
          <div className="lorem-ipsum-dolor1">Look</div>
        </div>
        <div className="frame8">
          <div className="lorem-ipsum-dolor2">
          <span className="half-black-half-orange">2</span>022</div>
        </div>
        <div className="frame9">
          <header className="rectangle-header" />
        </div>
        <div className="frame10">
        <a href="#" className="home" style={{ textDecoration: 'none' }}>HOME</a>

        </div>
        <div className="frame11">
          
        <a href="#" className="about" style={{ textDecoration: 'none' }}>ABOUT</a>

        </div>
      
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        OUR PRODUCTS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">PRODUCT 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">PRODUCT 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PRODUCT 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <div className="frame12">
  <a href="#" className="contact-us" style={{ textDecoration: 'none' }}>CONTACT US</a>
</div>

        <div className="frame13">
        <a href="#" className="bag-0" style={{ textDecoration: 'none' }}>BAG (0)</a>
          
        </div>
        <div className="frame14">
        <a href="#" className="bag-0" style={{ textDecoration: 'none' }}>WISHLIST (0)</a>
          
        </div>
        <div className="frame15">
        <a href="#" className="shopkart" style={{ textDecoration: 'none' }}>ShopKart</a>
          
        </div>
        <div className="frame16">
          <div className="free-delivery">Free Delivery</div>
        </div>
        <div className="frame17">
          <div className="return-policy">Return Policy</div>
        </div>
        <div className="frame18">
          <div className="free-delivery">Login</div>
        </div>
        <div className="frame19">
          <div className="free-delivery">Follow US</div>
        </div>
        <div className="frame20">
          <img className="layer-156-icon" alt="truck" src="/layer-156.svg" />
        </div>
        <div className="frame21">
        </div>
        <img className="frame-icon1" alt="" src="/frame1.svg" />
        <img className="frame-icon2" alt="" src="/frame2.svg" />
        <img className="frame-icon3" alt="" src="/frame3.svg" />
        <img className="frame-icon4" alt="" src="/frame4.svg" />
        <div className="frame-child1" />
      </div>
    </div>
  );
};

export default FreshContainer;
