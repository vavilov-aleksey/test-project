import React, {Component} from 'react';
import {Header} from "./component/Header/Header";
import {FormAdd} from "./component/FormAdd/FormAdd";
import {Table} from "./component/Table/Table";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <FormAdd/>
          <Table/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
