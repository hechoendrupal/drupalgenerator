import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import TextField from 'material-ui/lib/text-field';
import Dialog from 'material-ui/lib/dialog';
import LinearProgress from 'material-ui/lib/linear-progress';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Toggle from 'material-ui/lib/toggle';
import ConsoleDisplay from './console-display';



export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleName: { argString: "module", value: null, stringOnly: false },
      moduleMachineName: { argString: "machine-name", value: null, stringOnly: false },
      modulePath: { argString: "module-path", value: null, stringOnly: false },
      moduleDescription: { argString: "description", value: null, stringOnly: false },
      modulePackage: { argString: "package", value: null, stringOnly: false },
      moduleCore: { argString: "core", value: null, stringOnly: false },
      moduleDependencies: { argString: "dependencies", value: null, stringOnly: false },
      moduleComposer: { argString: "composer", value: false, stringOnly: true },
      moduleFeature: { argString: "feature", value: false, stringOnly: true }
    };
    this.propsMap = [
        "moduleName",
        "moduleMachineName",
        "modulePath",
        "moduleDescription",
        "modulePackage",
        "moduleCore",
        "moduleDependencies",
        "moduleFeature",
        "moduleComposer"
      ]
    this.updateState = this.updateState.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.toggledSwitch = this.toggledSwitch.bind(this);
  }

  cleanState() {
    var newState = {
      moduleName: { argString: "module", value: null, stringOnly: false },
      moduleMachineName: { argString: "machine-name", value: null, stringOnly: false },
      modulePath: { argString: "module-path", value: null, stringOnly: false },
      moduleDescription: { argString: "description", value: null, stringOnly: false },
      modulePackage: { argString: "package", value: null, stringOnly: false },
      moduleCore: { argString: "core", value: null, stringOnly: false },
      moduleDependencies: { argString: "dependencies", value: null, stringOnly: false },
      moduleComposer: { argString: "composer", value: false, stringOnly: true },
      moduleFeature: { argString: "feature", value: false, stringOnly: true }
    };
    this.refs.featureToggle.setToggled(false);
    this.refs.composerToggle.setToggled(false);

    this.setState(newState);
  }

  updateState(key) {
    var newState = {};
    var oldState = this.state[key];
    newState[key] = {
      argString: oldState.argString,
      value: event.target.value,
      stringOnly: oldState.stringOnly
    };
    this.setState(newState);
  }

  toggledSwitch(key, event, toggled) {
    var newState = {};
    var oldState = this.state[key];
    newState[key] = {
      argString: oldState.argString,
      value: toggled,
      stringOnly: oldState.stringOnly
    };
    this.setState(newState);
  }

  openDialog() {
    this.refs.generateModuleDialog.show();
    console.log(this.toJSON());
  }

  toJSON() {
    let optionsMap = {};
    this.propsMap.forEach(function(propName) {
      optionsMap[this.state[propName].argString] = this.state[propName].value;
    }, this);

    return {
      "command": "generate:module",
      "options": optionsMap
    }
  }

  render() {
    let standardActions = [
      { text: 'OK', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];

    return (
      <div clasName="generate-module-form-container">
        <Card>
          <CardTitle title="Generate a Module" />
          <CardText>
            <div>
              <form action="/foo" className="form">
                <div>
                  <TextField hintText="Enter module name"
                    floatingLabelText="Module name"
                    fullWidth={true}
                    value={this.state.moduleName.value}
                    onChange={this.updateState.bind(this, "moduleName")} />
                </div>
                <div>
                  <TextField hintText="Enter module machine name"
                    floatingLabelText="Module machine name (lowercase and underscore only)"
                    fullWidth={true}
                    value={this.state.moduleMachineName.value}
                    onChange={this.updateState.bind(this, "moduleMachineName")} />
                </div>
                <div>
                  <TextField hintText="Example: /modules/custom/path"
                    floatingLabelText="Module path"
                    fullWidth={true}
                    value={this.state.modulePath.value}
                    onChange={this.updateState.bind(this, "modulePath")} />
                </div>
                <div>
                  <TextField hintText="Enter module description"
                    floatingLabelText="Module description"
                    fullWidth={true}
                    value={this.state.moduleDescription.value}
                    onChange={this.updateState.bind(this, "moduleDescription")} />
                </div>
                <div>
                  <TextField hintText="Enter package name"
                    floatingLabelText="Package name"
                    fullWidth={true}
                    value={this.state.modulePackage.value}
                    onChange={this.updateState.bind(this, "modulePackage")} />
                </div>
                <div>
                  <TextField hintText="Enter Drupal core version"
                    floatingLabelText="Core version"
                    fullWidth={true}
                    value={this.state.moduleCore.value}
                    onChange={this.updateState.bind(this, "moduleCore")} />
                </div>
                <div>
                  <TextField hintText="separated by commas (i.e. context, panels)"
                    floatingLabelText="Enter dependencies (if any)"
                    fullWidth={true}
                    value={this.state.moduleDependencies.value}
                    onChange={this.updateState.bind(this, "moduleDependencies")} />
                </div>
                <div className="toggle-container">
                  <Toggle
                    name="feature"
                    value={this.state.moduleFeature.value}
                    label="Set module compatibility with the Features module"
                    ref="featureToggle"
                    onToggle={this.toggledSwitch.bind(this, "moduleFeature")} />
                </div>
                <div className="toggle-container">
                  <Toggle
                    name="composer"
                    value={this.state.moduleComposer.value}
                    label="Add a composer.json file"
                    ref="composerToggle"
                    onToggle={this.toggledSwitch.bind(this, "moduleComposer")} />
                </div>
                <div className="buttons">
                  <FlatButton label="Clear all" onTouchTap={this.cleanState} />
                  <RaisedButton label="Generate" primary={true}
                    onTouchTap={this.openDialog.bind(this)} />
                </div>
              </form>
            </div>
          </CardText>
        </Card>
        <Dialog
          title="Your module is being generated..."
          actions={standardActions}
          modal={false}
          ref="generateModuleDialog">
          <LinearProgress mode="indeterminate"  />
          <p>
            For the time being, we are not generating any code for you (just yet,
            but this functionality will be coming soon).
          </p>
          <p>
            In the meantime, you can copy and paste the following command and
            execute it directly in your computer console.
          </p>
          <div className="console-display">
            <ConsoleDisplay
              commandName="generate:module"
              commandArgs={this.state}
              argsMap={this.propsMap} />
          </div>
        </Dialog>
      </div>
    )
  }
}
