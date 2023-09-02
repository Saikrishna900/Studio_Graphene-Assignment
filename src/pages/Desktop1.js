import FreshContainer from "../components/FreshContainer";
import NewProductsContainer from "../components/NewProductsContainer";
import ContactForm from "../components/ContactForm";
import "./Desktop1.css";
const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <section className="frame">
        <FreshContainer />
        <NewProductsContainer />
      </section>
      <ContactForm />
    </div>
  );
};

export default Desktop1;
