import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const element = (
  <h1 className = "welcome">
    Welcome to my site!
  </h1>
  );

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>I'm glad you could make it!</h1>
        <p>Since we're getting to know one another, could you please enter your name?</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
function formatDate(date) {
  return date.toLocaleDateString();
}
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer-example')
);
