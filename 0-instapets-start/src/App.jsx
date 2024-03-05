import Header from './components/Header';
import PicturesList from './components/PicturesList';
import NewPetForm from './components/NewPetForm';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <NewPetForm />
      <PicturesList />
    </>
  );
};

export default App;