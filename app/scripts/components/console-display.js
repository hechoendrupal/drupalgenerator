import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  printProperty(prop) {
    if (prop.value) {
      return this.convertToString(prop);
    }
  }

  convertToString(prop) {
    if (prop.stringOnly) {
      return `--${prop.argString}`;
    } else {
      return `--${prop.argString}=${prop.value}`;
    }
  }

  printArguments() {
    var objValues = this.props.argsMap.map(function(prop) {
        var propObject = this.props.commandArgs[prop];
        if (propObject.value !== null) {
          return this.printProperty(propObject);
        }
      }, this);
    return objValues.join(" ");
  }

  render() {
    return (
      <div className="terminal">
        <code>
          $ drupal {this.props.commandName} {this.printArguments()}
        </code>
      </div>
    )
  }
}
