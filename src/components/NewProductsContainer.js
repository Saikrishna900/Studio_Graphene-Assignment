import SecondaryButton from "./SecondaryButton";
import "./NewProductsContainer.css";
const NewProductsContainer = () => {
  return (
    <div className="frame21">
      <div className="frame22">
        <img
          className="zam-nungaray-acw3b7q6ys0-unspl-icon"
          alt=""
          src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
        />
        <img
          className="philipp-arlt-nmh9a0obon8-unspl-icon"
          alt=""
          src="/philipparltnmh9a0obon8unsplash@2x.png"
        />
        <img
          className="philipp-arlt-8eyb-rvawty-unspl-icon"
          alt=""
          src="/philipparlt8eyb-rvawtyunsplash@2x.png"
        />
        <div className="lorem-ipsum-dolor3">New products</div>
        <div className="apparel">Apparel</div>
        <div className="accessories">Accessories</div>
        <div className="best-sellers">Best sellers</div>
        <div className="off">50% off</div>
        <img className="group-icon" alt="" src="/group-17.svg" />
        <img className="arrow-icon" alt="" src="/arrow-1.svg" />
        <img className="frame-child2" alt="" src="/arrow-2.svg" />
        <SecondaryButton
          secondaryButtonPosition="absolute"
          secondaryButtonTop="415px"
          secondaryButtonLeft="544px"
        />
        <SecondaryButton
          secondaryButtonPosition="absolute"
          secondaryButtonTop="415px"
          secondaryButtonLeft="874px"
        />
        <SecondaryButton
          secondaryButtonPosition="absolute"
          secondaryButtonTop="415px"
          secondaryButtonLeft="1205px"
        />
        <img
          className="malicki-m-beser-pkmvkg7vnuo-un-icon"
          alt=""
          src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
        />
        <SecondaryButton
          secondaryButtonPosition="absolute"
          secondaryButtonTop="415px"
          secondaryButtonLeft="1205px"
        />
      </div>
    </div>
  );
};

export default NewProductsContainer;
