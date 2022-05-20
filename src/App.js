import logo from './logo.svg';
import './App.css';
import {Logo,Button,Link} from "./component/index"

let arr = [
    {id:1,link:"Service"},
    {id:2,link:"Projects"},
    {id:3,link:"About"}
]




function App() {
  return (
    <div className="App">
     <Logo/>
     {arr.map((links)=>(
      <Link key={links.id} {...links}/>
     ))}
    
     <Button/>
    </div>
  );
}

export default App;
