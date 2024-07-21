import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';
import './styles.css';
import 'bulma/css/bulma.css'


function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
