import React from 'react';
import Header from "./components/Header"
import SideMenu from "./components/SideMenu"
import TopRightForm from "./components/TopRightForm"
import TopFeeds from "./components/TopFeeds"
import Content from "./components/Content"

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        count: 0
      }
      this.handlePick = this.handlePick.bind(this)
    }
    
      handlePick(){
        this.setState((prevState) => {
          return{
            count: prevState.count + 1
          }
        })
      }
      render(){
        return(
          <div>
            <Header />
            <Content/>
            <TopRightForm />
            <TopFeeds />
            
          </div>
        )
      
      }
        
    
}

export default App



