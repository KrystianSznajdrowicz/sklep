import './App.css';
import Produkt from "./Produkt";
import ziemniak from "./ziemniak.jpg"
import gruszka from "./gruszka.jpg"
import papaja from "./papaja.jpg"
import morela from "./morela.jpg"

const produkty = [
  {zdjecie: {ziemniak}, owoc:"ziemniak", opis:"to jest ziemniak" ,stan:"29" },
  {zdjecie: {gruszka}, owoc:"gruszka", opis:"to jest gruszka" ,stan:"52" },
  {zdjecie: {papaja}, owoc:"papaja", opis:"to jest papaja" ,stan:"219" },
  {zdjecie: {morela}, owoc:"morela", opis:"to jest morela" ,stan:"21" },

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Internetowy sklep z eko-warzywami</h1>
      </header>
      <div className='produkty'>
        <Produkt zdjecie={ziemniak} owoc={produkty[0].owoc} opis={produkty[0].opis} stan={produkty[0].stan}/>
        <Produkt zdjecie={gruszka} owoc={produkty[1].owoc} opis={produkty[1].opis} stan={produkty[1].stan}/>
        <Produkt zdjecie={papaja} owoc={produkty[2].owoc} opis={produkty[2].opis} stan={produkty[2].stan}/>
        <Produkt zdjecie={morela} owoc={produkty[3].owoc} opis={produkty[3].opis} stan={produkty[3].stan}/>
        
      </div>
    </div>
  );
}

export default App;
