import Banner from "../components/banner";
import CategorySection from "../components/categories";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsletterSection from "../components/newsletter";
import PartnerSection from "../components/partner";
import ProductSection from "../components/products";
import ReasonSection from "../components/reason";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <ReasonSection />
      <PartnerSection />
      <CategorySection />
      <ProductSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};
export default Homepage;
