import './App.css';
import CutomerFrom from './components/customerForm/CustomerFrom';
import CutomerList from './components/customerList/CustomerList';

function App() {
  return <div className='App'>
  <h1> Custormer Manager System</h1>
<CutomerFrom />
<CutomerList />
  </div>
}

export default App;
