import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div>
        <img src="images/drupal-console-logo.png" alt="drupal console" width="350" />
        <h1>drupalgenerator</h1>

        <div className="description">
          <p>
            <a href="/">drupalgenerator</a> is an initiative to provide a GUI
            for the Drupal Console project.
          </p>
          <p>
            The idea of this is site, is make the Drupal Console project
            available for everyone, including people how does not have experience,
            or does not feel comfortable working on the terminal.
          </p>
          <p>
            <strong>Objective:</strong> Providing a GUI for the Drupal Console
            project to execute generators and provide a downloadable file
            containing the generated module or code.
          </p>
            This is a WIP, for more information about the Drupal Console project,
            visit <a href="http://drupalconsole.com">the official site</a>.
          <p>
          </p>
        </div>
      </div>
    );
  }
}
