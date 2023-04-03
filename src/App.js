import "./App.scss";
import About from "./pages/about/About";
import Footer from "./conponents/footer/Footer";
import Header from "./conponents/header/Header";
import Home from "./pages/home/Home";
import Horses from "./pages/horses/Horses";
import Directions from "./pages/directions/Directions";
import Form_sect from "./pages/form-sect/Form_sect";
import Contacts from "./pages/contacts/Contacts";
import MyGallery from "./pages/gallery/MyGallery";
import ClientTalk from "./pages/clientsTalk/ClientsTalk";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />

      <Directions />
      <Horses />
      <MyGallery />
      <Form_sect />
      <ClientTalk />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
