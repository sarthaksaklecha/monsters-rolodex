import './App.css';
import React from 'react';
import { CardList } from './Components/CardList/CardList.component.jsx';
import {SearchBox} from './Components/SearchBox/SearchBox.component.jsx';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      search : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters : users}))
  }
  onChange = (e) => {
    this.setState({search:e.target.value})
  }
  render(){
    let filteredMonsters = this.state.monsters.filter((monster)=>monster.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = 'search monsters'
          onChange = {this.onChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
