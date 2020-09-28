import React from 'react';
import Pictures from './pictures';

class App extends React.Component {
  constructor() {
    super();
    // this.setState({
    //   products: null,
    // });
    // this.getData = this.getData.bind(this);
  }

  // componentDidMount() {
  //   this.getData();
  // }

  // getData() {
  //   axios.get(`/api/products/${id}`)
  //     .then((res) => this.setState({
  //       products: res.data,
  //     }));
  // }

  render() {
    return (
      <div>
        <h1>Hello from react</h1>
      </div>
    );
  }
}

export default App;
