import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './ListContainer';

var App = React.createClass({
    render: function(){
      return (
        <div className="container">
          <ListContainer />
        </div>
      )
    }
  });

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

