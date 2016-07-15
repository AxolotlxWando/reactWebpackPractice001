
import React from 'react';
import ReactDOM from 'react-dom';

var Child = React.createClass({
  getInitialState: function(){
    return {
      username: this.props.username,
      username2: this.props.username
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.state.username2) {
     this.setState({ username2: nextProps.username });
    }
  },
  render: function(){
    return (
      <div>
        The username passed in as property: {this.props.username} <br />
        Local username state: {this.state.username} <br />
        Local username state manually maintained with componentWillReceiveProps hook: {this.state.username2}
      </div>
    )
  }
});

var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: '@tylermcginnis33'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username} <br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
        <Child username={this.state.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <HelloUser />,
  document.getElementById('app')
);

module.exports = ListContainer;

