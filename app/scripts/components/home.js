import React from 'react';
import AppDescription from './app-description';
import GeneratorForm from './generator-form';
import AppBar from 'material-ui/lib/app-bar';

export default class extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="drupalgenerator" showMenuIconButton={false}></AppBar>
        <AppDescription />
        <GeneratorForm />
      </div>
    );
  }
}
