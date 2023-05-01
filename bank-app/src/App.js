import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import CardForm from './componants/Cardform';
function App() {
  return (
    <>
      <div className='app'>
        <Header />

        <CardForm />

        <Footer />
      </div>
    </>
  );
}

export default App;
