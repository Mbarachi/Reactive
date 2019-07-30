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
      this.handelePickReduce = this.handelePickReduce.bind(this)
      this.handelePickReset = this.handelePickReset.bind(this)
    }
    
      handlePick(){
        this.setState((prevState) => {
          return{
            count: prevState.count + 1
          }
        })
      }

      handelePickReduce() {
        this.setState((prevState) => {
          return{
            count : prevState.count - 1
          }
        })
      }
      handelePickReset() {
        this.setState((prevState) => {
          return{
            count: 0
          }
        })
      }
      render(){
        return(
          <div>
            <Header handlepick = {this.handlePick} minus={this.handelePickReduce} reset={this.handelePickReset}/>
            <Content body={this.state.count}/>
            <TopRightForm />
            <TopFeeds />
          </div>
        )
      
      }
        
    
}

export default App



