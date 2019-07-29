import React from 'react';
import Header from "./components/Header"
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
            <Header handlepick = {this.handlePick}/>
            <Content body={this.state.count}/>
            <TopRightForm />
            <TopFeeds />
            
          </div>
        )
      
      }
        
    
}

export default App



