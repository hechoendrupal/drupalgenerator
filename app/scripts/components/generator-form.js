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

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      components: this.props.config.components
    };

    this.cleanState = this.cleanState.bind(this);
    this.componentToCommandArg = this.componentToCommandArg.bind(this);
  }

  updateState(component) {
    let newState = this.state;
    let idx = newState.components.indexOf(component);
    component.value = event.target.value;
    newState.components[idx] = component;
    this.setState(newState);
  }

  cleanState() {
    let newState = this.state;
    newState.components.forEach(function(component) {
      component.value = null;
    })
    let toggles = this.state.components.filter(function(component) {
      return component.formAttributes.inputType == "toggle"
    });

    toggles.forEach(function(toggle) {
      this.refs[toggle.attributeName].setToggled(false);
    }, this);
    this.setState(newState);
  }

  openDialog() {
    this.refs.generateModuleDialog.show();
  }

  toggledSwitch(component, event, toggled) {
    let newState = this.state;
    let idx = newState.components.indexOf(component);
    component.value = toggled;
    newState.components[idx] = component;
    this.setState(newState);
  }

  toCommand() {
    let commandOptions = this.state.components.map(function(component) {
      if (component.value) {
        return this.componentToCommandArg(component);
      }
    }, this);
    return `$ drupal ${this.props.config.command} ${commandOptions.join(" ")}`
  }

  componentToCommandArg(component) {
    if (component.stringOnlyAttribute) {
      return `--${component.toString}`
    } else {
      return `--${component.toString}=${component.value}`
    }
  }

  formInputFor(component) {
    switch (component.formAttributes.inputType) {
      case "text":
        return (
          <TextField hintText={component.formAttributes.hintText}
            floatingLabelText={component.formAttributes.labelText}
            fullWidth={component.formAttributes.fullWidth}
            value={component.value}
            onChange={this.updateState.bind(this, component)} />
        )
      case "toggle":
        return (
          <div className="toggle-container">
            <Toggle
              name={component.toString}
              value={component.value}
              label={component.formAttributes.labelText}
              ref={component.attributeName}
              onToggle={this.toggledSwitch.bind(this, component)} />
          </div>
        )
    }
  }

  renderFormComponent(component) {
    return (
      <div>
        {this.formInputFor(component)}
      </div>
    )
  }

  buildComponents() {
    return this.state.components.map(function(component) {
      return this.renderFormComponent(component);
    }, this);
  }

  render() {
    let formComponents = this.buildComponents();
    let standardActions = [
      { text: 'OK', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];

    return (
      <div className="container">
        <Card>
          <CardTitle title={this.props.config.title} />
          <CardText>
            <div className="form-container">
              <form action="#" className="form">
                {formComponents}
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
            <code>{this.toCommand()}</code>
          </div>
        </Dialog>
      </div>
    )
  }
}
