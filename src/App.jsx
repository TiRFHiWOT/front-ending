import Back from "./component/back";
import Header from "./component/header";
import About from "./component/about";
import CustomerService from "./component/customerService";
import Explore from "./component/explore";
import Home from "./component/Home";
import Review from "./component/review";
import Who from "./component/who";
import Why from "./component/why";
// import Personal from "./component/personal/page";
// import PersonalCard from "./component/personal/personalCard";
// import AboutPage from "./component/about/page";

function App() {
  return (
    <div>
      <Back />
      <Header />
      <Home />
      <About />
      <Who />
      <Why />
      <Review />
      <Explore />
      <CustomerService />
    </div>
  );
}

export default App;
