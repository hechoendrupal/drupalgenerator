import React from 'react';
import AppDescription from './app-description';
import GeneratorForm from './generator-form';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ModuleGeneratorConfig from '../fixtures/module-generator-config.js';

export default class extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="drupalgenerator" showMenuIconButton={false}></AppBar>
        <AppDescription />
        <Tabs>
          <Tab label="Generate Module" >
            <GeneratorForm config={ModuleGeneratorConfig()} />
          </Tab>
          <Tab label="Generate Plugin" >
          </Tab>
          <Tab label="Generate Command" >
            (Tab content to generate command coming soon...)
          </Tab>
        </Tabs>
      </div>
    );
  }
}
