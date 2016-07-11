import React from 'react';
import ReactDOM from 'react-dom';

var FriendsContainer = React.createClass({
  getInitialState: function(){
    alert('In getInitialState');
    return {
      name: 'Tyler McGinnis'
    }
  },

// Invoked once before first render
  componentWillMount: function(){
      // Calling setState here does not cause a re-render
      alert('In Component Will Mount');
  },

// Invoked once after the first render
  componentDidMount: function(){
      // You now have access to this.getDOMNode()
      alert('In Component Did Mount');
  },

// Invoked whenever there is a prop change
  // Called BEFORE render
  componentWillReceiveProps: function(nextProps){
      // Not called for the initial render
      // Previous props can be accessed by this.props
      // Calling setState here does not trigger an additional re-render
      alert('In Component Will Receive Props');
  },

// Called IMMEDIATELY before a component is unmounted
  componentWillUnmount: function(){},

render: function(){
    return (
      <div>
        Hello, {this.state.name}
      </div>
    )
  }
});

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);

