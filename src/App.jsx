// FIRST LESSON ON CLASS COMPONENTS //

// import React from "react";
// export default class App extends React.Component {
//   state = {
//     goOut: "Yes"
//   }
//   toggleGoOut = () => {
//     this.setState(prev => {
//       return {
//         goOut: prev.goOut === "Yes" ? "No" : "Yes"
//       }
//     });
//   };
//   render() {
//     return (
//       <div className="state">
//         <h1 className="state--title">Should I go out tonight?</h1>
//         <div 
//           className="state--value"
//           onClick={this.toggleGoOut}
//         >
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   };
// };

// END OF FIRST LESSON ON CLASS COMPONENTS //


// SECOND LESSON ON CLASS COMPONENTS - CHALLENGE //

// import React from "react"

// export default function App()  {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }

// import React from "react";

// export default class App extends React.Component {
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count + 1
//       };
//     });
//   };
//   subtract = () => {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count - 1
//       };
//     });
//   };
//   render() {
//     return (
//       <div className="counter">
//         <button className="counter--minus" onClick={this.subtract}>-</button>
//         <div className="counter--count">
//           <h1>{this.state.count}</h1>
//         </div>
//         <button className="counter--plus" onClick={this.add}>+</button>
//       </div>
//     )
//   }
// }

// END SECOND LESSON ON CLASS COMPONENTS - CHALLENGE //


// THIRD LESSON ON CLASS COMPONENTS - CONSTRUCTOR METHOD //

// import React from "react"

// export default class App extends React.Component {
//   // state = {
//   //     goOut: "Yes"
//   // }
//   constructor(props) {
//     super(props)
//     this.state = {
//       goOut: "Yes"
//     }
//     this.toggleGoOut = this.toggleGoOut.bind(this)
//   }
//   // toggleGoOut = () => {
//   //     this.setState(prevState => {
//   //         return {
//   //             goOut: prevState.goOut === "Yes" ? "No" : "Yes"
//   //         }
//   //     })
//   // }
//   toggleGoOut() {
//       this.setState(prevState => {
//           return {
//               goOut: prevState.goOut === "Yes" ? "No" : "Yes"
//           }
//       })
//   }
//   render() {
//       return (
//           <div className="state">
//               <h1 className="state--title">Should I go out tonight?</h1>
//               <div className="state--value" onClick={this.toggleGoOut}>
//                   <h1>{this.state.goOut}</h1>
//               </div>
//           </div>
//       )
//   }
// }

// END OF THIRD LESSON ON CLASS COMPONENTS - CONSTRUCTOR METHOD //


// FOURTH LESSON - CONSTRUCTOR METHOD CHALLENGE //

// import React from "react";

// export default class App extends React.Component {
//   // state = {
//   //     count: 0
//   // }
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
//   };
//   // add = () => {
//   //     this.setState(prevState => ({count: prevState.count + 1}))
//   // }
//   add() {
//     this.setState(prevState => ({count: prevState.count + 1}));
//   };
//   // subtract = () => {
//   //     this.setState(prevState => ({count: prevState.count - 1}))
//   // }
//   subtract() {
//       this.setState(prevState => ({count: prevState.count - 1}));
//   };
//   render() {
//       return (
//           <div className="counter">
//               <button className="counter--minus" onClick={this.subtract}>–</button>
//               <div className="counter--count">
//                   <h1>{this.state.count}</h1>
//               </div>
//               <button className="counter--plus" onClick={this.add}>+</button>
//           </div>
//       )
//   };
// };

// END OF FOURTH LESSON - CONSTRUCTOR METHOD CHALLENGE //