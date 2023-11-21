import logo from './logo.svg';
import './App.css';


function Header(props) {
  return <h1><a href='/'>{props.name}</a></h1>
}



function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ]
  return (
    <div className="App">
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Let's develop</h2>
      </div>
    </div>
  );
}

export default App;
