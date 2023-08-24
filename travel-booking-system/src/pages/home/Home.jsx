import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header.jsx";
// import MailList from "../../components/mailList/MailList.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import PropertyList from "../../components/propertyList/PropertyList.jsx";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Explore Megacities</h1>
        <Featured />
        <h1 className="homeTitle">Amazing Hotel Rooms</h1>
        <PropertyList />
        <FeaturedProperties />
        {/* <MailList /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
