import './App.css';
import LineChart from './LineChart';
import Chart from './ResponsiveBar';
import Pie from './Pie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <LineChart/>
        <Chart/> 
        <Pie/>
      </header>
    </div>
  );
}

export default App;
