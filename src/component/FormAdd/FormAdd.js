import React, {PureComponent} from "react";
import {Button} from "../Button/Button";
import styled from 'styled-components';
import './FormAdd.css';
import {connect} from "react-redux";
import {addCity} from '../../redux/Actions/data'
import {api} from "../../api/api";

const Wrapper = styled.div`
width: 100%;
background-color: var(--color-accent);
padding: 25px 0;
`;


class FormAdd extends PureComponent {
  state = {
    inputCity: ''
  };

  render() {
    const handleSubmitForm = (event) => {
      event.preventDefault();

      if(!this.state.inputCity) return;

      const response = async () => {
        try {
          const request = await api(this.state.inputCity);
          this.props.addCity(request.data)
        } catch {
          alert(`Город "${this.state.inputCity}" не найден!`)
        }
        this.setState({inputCity: ''})

      };
      response()

    };

    const handleChangeCity = (event) => {
      this.setState({inputCity: event.target.value})
    };

    return (
      <Wrapper>
        <form action="" className='form' onSubmit={handleSubmitForm}>
          <input type="text" value={this.state.inputCity} onChange={handleChangeCity}
                 placeholder='Введите название города'/>
          <Button type='submit' add>Добавить</Button>
        </form>
      </Wrapper>
    )
  }
}

export default connect(state => ({}), ({addCity}))(FormAdd)