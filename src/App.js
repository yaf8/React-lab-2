import './App.css';
import Card from './Components/Card';
//import Display from './Components/Display';

function App() {

  //return  <Display fName = "Yafet" lName ="Abebe" />;

  return (
    <div className="Card">
      <h1 className="H11"> Task: Add three card element </h1>
    
      <Card h2="1st Cards h2" h3="1st card h3" />
      <Card h2="2nd Cards h2" h3="2st card h3" />
      <Card h2="3nd Cards h2" h3="3st card h3" />   
    </div>
  );

};

export default App;
