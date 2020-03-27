import React, {Component} from 'react';

class Sum extends Component {

   constructor(props){
      super(props);

      this.state = {
         number1: 0,
         number2: 0,
         sum: null
      }
   }

   handleInput1(asdf){
      this.setState({
         number1: +asdf.target.value
      })
   }

   handleInput2(event){
      this.setState({
         number2: +event.target.value
      })
   }

   // handleClick(){

   // }

   handleClick = () => {
      // This method should solve the toy problem.
      // This method should update the value of sum.

      this.setState({
         sum: this.state.number1 + this.state.number2
      })

   }

   render() {
      console.log(typeof this.state.number1)
      console.log(typeof this.state.number2)
      console.log(typeof this.state.sum)
      return (
         <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(event) => {this.handleInput1(event)}} />
            <input className="inputLine" onChange={(event) => {this.handleInput2(event)}} />
            <button className="confirmationButton" onClick={this.handleClick} >Add</button>
      <span className="resultsBox" >Sum: {this.state.sum}</span>
         </div>
      )
   }
}

export default Sum;























// // ---------------------> Solution Code <------------------------

// import React, { Component } from 'react';

// export default class Sum extends Component {

//   constructor() {
//     super();

//     this.state = {
//       number1: 0,
//       number2: 0,
//       sum: null
//     }
//   }

//   updateNumber1(val) {
//     this.setState({ number1: parseInt(val, 10) });
//   }

//   updateNumber2(val) {
//     this.setState({ number2: parseInt(val, 10) });
//   }

//   add(num1, num2) {
//     this.setState({ sum: num1 + num2 });
//   }

//   render() {
//     return (
//       <div className="puzzleBox sumPB">
//         <h4> Sum </h4>
//         <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }/>
//         <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }/>
//         <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
//         <span className="resultsBox"> Sum: {this.state.sum} </span>
//       </div>
//     )
//   }
// }




















// // ----------------------> After Hours Solution Code <------------------- 



// import React, { Component } from 'react';

// export default class Sum extends Component {
//   constructor(){
//     super()

//     this.state = {
//       number1: 0,
//       number2: 0,
//       sum: null
//     }
//   }

//   handleInputOne(event){
//     this.setState({
//       number1: +event.target.value
//     })
//   }

//   handleInputTwo(event){
//     this.setState({
//       number2: +event.target.value
//     })
//   }

//   // handleClick(){

//   // }

//   handleClick = () => {
//     // This method should update the value of sum.
//     // This method should solve the toy problem.

//     this.setState({
//       sum: this.state.number1 + this.state.number2
//     })
//   }

//   render() {
//     console.log(typeof this.state.number1)
//     console.log(typeof this.state.number2)
//     console.log(typeof this.state.sum)
//     return (
//       <div className="puzzleBox sumPB">
//         <h4>Sum</h4>
//         <input className="inputLine" onChange={(event) => this.handleInputOne(event)} />
//         <input className="inputLine" onChange={(event) => this.handleInputTwo(event)} />
//         <button className="confirmationButton" onClick={this.handleClick} >Click Me!</button>
//     <span className="resultsBox">Sum: {this.state.sum}</span>
//       </div>
//     )
//   }
// }