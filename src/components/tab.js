import React from "react";

class Tabs extends React.Component {
  render() {
    return this.props.tabs.map(tab => (
      <p key={tab.id} onClick={() => this.props.onPress(tab.id)}>
        {tab.name}
      </p>
    ));
  }
}

export default Tabs;
