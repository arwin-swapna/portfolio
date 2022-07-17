import React,{Component} from "react"
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/layout/Layout"
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Leetcode from "./components/leetcode/Leetcode"
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

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
      let {items} = this.state;
      console.log(items)

      return (
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="/skills" element={<Skills data={items} />} />
              <Route path="/leetcode" element={<Leetcode data={items} />}/>
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
            </Route>
          </Routes>
      );
  }
  
}

export default App;
