import React from 'react';
import AppDescription from './app-description';
import GenerateModuleForm from './generate-module-form';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

export default class extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="drupalgenerator" showMenuIconButton={false}></AppBar>
        <AppDescription />
        <Tabs>
          <Tab label="Generate Module" >
            <GenerateModuleForm />
          </Tab>
          <Tab label="Generate Plugin" >
            (Tab content to generate plugin coming soon...)
          </Tab>
          <Tab label="Generate Command" >
            (Tab content to generate command coming soon...)
          </Tab>
        </Tabs>
      </div>
    );
  }
}
