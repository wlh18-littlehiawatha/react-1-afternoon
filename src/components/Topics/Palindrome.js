import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor(){
    super()

    this.state = {
      userInput: '',
      palindrome: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick(){
    // This method should update the value of palindrome.
    // This method should solve the toy problem.

    let userInputArr = this.state.userInput.split('');
    console.log(userInputArr);

    let userInputArrReversed = userInputArr.reverse();
    console.log(userInputArrReversed)
    
    let userInputReversedJoined = userInputArrReversed.join('');
    console.log(userInputReversedJoined)

    
    if( userInputReversedJoined === this.state.userInput ){
      this.setState({
        palindrome: 'true'
      })
    } else {
      this.setState({
        palindrome: 'false'
      })
    }
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        {/* <input className="inputLine" onChange={(event) => this.handleChange(event)} /> */}
        <input className="inputLine" onChange={this.handleChange} />
        <button className="confirmationButton" onClick={() => this.handleClick()} >Click Me!</button>
        <span className="resultsBox" >Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}




// // -------------------------> Solution Code <-----------------------





// import React, { Component } from 'react';

// export default class Palindrome extends Component {

//   constructor() {
//     super();

//     this.state = {
//       userInput: '',
//       palindrome: ''
//     };
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   isPalindrome(userInput) {
//     let forwards = userInput;
//     let backwards = userInput;
//     backwards = backwards.split('');
//     backwards = backwards.reverse();
//     backwards = backwards.join('');

//     if ( forwards === backwards ) {
//       this.setState({ palindrome: 'true' });
//     } else {
//       this.setState({ palindrome: 'false' });
//     }
//   }

//   render() {
//     return (
//       <div className="puzzleBox palindromePB">
//         <h4> Palindrome </h4>
//         <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
//         <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
//         <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
//       </div>
//     )
//   }
// }