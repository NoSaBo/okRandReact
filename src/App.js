import React from "react";
import logo from "./logo.svg";
import Tabs from "./components/tab";
import Content from "./components/content";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }

  static defaultProps = {
    data: [
      {
        id: 1,
        name: "Vue",
        description: "Vue description"
      },
      {
        id: 2,
        name: "React",
        description: "React description"
      },
      {
        id: 3,
        name: "Angular",
        description: "Angular description"
      }
    ]
  };

  setTab = id => {
    this.setState({
      text: this.props.data[id - 1].description
    });
  };

  render() {
    return (
      <div className="App">
        <Tabs tabs={this.props.data} onPress={this.setTab} />
        <Content text={this.state.text} />
      </div>
    );
  }
}

export default App;
