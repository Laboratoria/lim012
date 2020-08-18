import React, { useState } from 'react';
import data from './data';

// function App() {
//   const [index, setIndex] = useState(0);
//   return (
//     <div
//       className="App"
//       style={{
//         color: data[index].color,
//         backgroundColor: data[index].bgColor,
//       }}
//       onClick={() => setIndex(index === data.length - 1 ? 0 : index + 1)}
//     >
//       {data[index].text}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  // state = {
  //   index: 0,
  // }

  render() {
    const { index } = this.state;
    return (
      <div
        className="App"
        style={{
          color: data[index].color,
          backgroundColor: data[index].bgColor,
        }}
        onClick={() => this.setState({
          index: index === data.length - 1 ? 0 : index + 1,
        })}
      >
        {data[index].text}
      </div>
    );
  }
}

export default App;
