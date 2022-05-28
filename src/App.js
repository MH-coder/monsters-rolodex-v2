// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, [])

  useEffect(()=>{
    const filteredMonstersTemp = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredMonsters(filteredMonstersTemp);
  },[monsters, search])

  const onSearchChange = (event)=>{
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       search: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(()=>{  return {monsters : users} },
//     ()=>{console.log(this.state)}))
//   }

//   onSearchChange = (e)=>{this.setState({search:e.target.value})}

//   render(){
//     const {monsters, search} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))

//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={onSearchChange} />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
