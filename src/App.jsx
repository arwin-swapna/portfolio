import React,{Component} from "react";
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/layout/Layout";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://leetcode-stats-api.herokuapp.com/arwin-dev')
      .then(res => res.json())
      .then(json => {
          this.setState({
            isLoaded:true,
            items:json,
          })
      });
  }

    render(){

      return (
          <Routes>
            <Route path="/" element={<Layout/>}/>
          </Routes>
      );
  }
  
}

export default App;
