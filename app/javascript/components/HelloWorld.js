import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
