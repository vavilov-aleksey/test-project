import React, {PureComponent} from 'react';
import {Button} from "./Button";
import {connect} from "react-redux";
import {removeCity} from "../../redux/Actions/data";

class WrapperBtn extends PureComponent{
  render(){
    const clickRemove = (event) => {
      event.preventDefault();

      this.props.removeCity(this.props.children);
    };

    return(
      <Button onClick={clickRemove.bind(this.props)}>Удалить</Button>
    )
  }
}

export default connect(state => ({}), ({removeCity}))(WrapperBtn)