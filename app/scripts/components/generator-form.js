import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Generate a module" />
          <CardText>
            Form to generate modules/code goes here.
            <div>
              <RaisedButton label="Generate" primary={true} />
            </div>
          </CardText>
        </Card>
      </div>
    )
  }
}
