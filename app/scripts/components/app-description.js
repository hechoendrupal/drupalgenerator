import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardText>
            <div className="logo">
              <img src="images/drupal-console-logo.png" alt="drupal console" width="350" />
            </div>
            <div className="description">
              <p>
                <a href="/">drupalgenerator</a> is an initiative to provide a GUI
                for the Drupal Console project.
              </p>
              <p>
                The idea of this site, is make the Drupal Console project
                available for everyone, including people who does not have experience,
                or does not feel comfortable working on the terminal.
              </p>
              <p>
                <strong>Objective:</strong> Providing a GUI for the Drupal Console
                project to execute generators and provide a downloadable file
                containing the generated module or code.
              </p>
              <p>
                This is a WIP, for more information about the Drupal Console project,
                visit <a href="http://drupalconsole.com">the official site</a>.
              </p>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
