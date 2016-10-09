import React from 'react';

import 'commons/styles/normalize.scss';
import 'commons/styles/font-faces.scss';
import 'commons/styles/base.scss';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default App;
