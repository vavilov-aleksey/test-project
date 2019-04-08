import React, {PureComponent} from 'react';
import {Header} from "./component/Header/Header";
import FormAdd from "./component/FormAdd/FormAdd";
import Table from "./component/Table/Table";

export default class App extends PureComponent {

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

