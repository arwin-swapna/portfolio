import React,{Component} from "react";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

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

      let {isLoaded,items} = this.state;

      if(!isLoaded){
        return <div>Loading....</div>
      }

      return (
        <div className="App">
          <Navigation/>
          <Home/>
          <About/>
          <Skills data={items}/>
          <Projects/>
          <Contact/>
        </div>
    );
  }
  
}

export default App;
