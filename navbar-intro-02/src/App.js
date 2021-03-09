import './App.css';
import NavbarMenu from './components/NavbarMenu';
import CalloutBlock from './components/CalloutBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSection from './components/CarouselSection';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <h1 className="App-header">React Bootstrap</h1>
      <div className="Jumb-container">
        <CalloutBlock className="Jumb-item" />
      </div>
      <div className="Carousel-container">
        <CarouselSection />
      </div>
    </div>
  );
}

export default App;
