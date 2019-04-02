import React, { Component } from 'react';
import {Header} from "./component/Header/Header";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <main>
            Main
          </main>
          <footer>
            Footer
          </footer>
        </React.Fragment>
    );
  }
}

export default App;
