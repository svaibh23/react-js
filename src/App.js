//import './App.css';
import ImageGallery from './ImageGallery'; 
import TextAnimation from './TextAnimation'; 
import CardAnimation from './CardAnimation';
import HeaderSlider from './HeaderSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeaderSlider/>
         <ImageGallery />
          <div className="animation-container">
          <TextAnimation />
          <CardAnimation />
           <TextAnimation />
            <TextAnimation />
             <TextAnimation />
                     <CardAnimation />

        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
