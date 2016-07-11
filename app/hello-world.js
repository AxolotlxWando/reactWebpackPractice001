import React from 'react';
import ReactDOM from 'react-dom';

var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});

ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));

