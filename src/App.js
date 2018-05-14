import React, { Component } from 'react';
import Splash from './Splash';
import rututils from 'rututils';

class App extends Component {
  constructor (props) {
    super(props);    

    this.handleShow = this.handleShow.bind(this);
    
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showRut: false,
      showNumberPhone: false,
      showErrorMessageRut: false,
      showErrorMessagePhone: false,
      showIconCheckRut: false,
      showIconCheckPhone: false,
      buttonDisabled: true,
      inputRut: '',
      checkboxValue: false,
      showModal: false
    }
  }

  showHintRut = () => this.setState ({showRut: true})

  hideHintRut = () => this.setState ({showRut: false})

  validateRut = (event) => {
    let value = rututils.formatoRut(event.target.value);
    if (!rututils.validarRut(value)) {
         this.setState({
          showErrorMessageRut: true,
          showIconCheckRut: false,
          inputRut: value
        })
    } else {
      this.setState({
        showErrorMessageRut: false,
        showIconCheckRut: true,
        inputRut: value
      })
    }
  }

  showHintNumberPhone = () => this.setState ({showNumberPhone: true})

  hideHintNumberPhone = () => this.setState ({showNumberPhone: false})

  validatePhone = (event) => {
    let value = event.target.value;     
    let regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{5}$/;
    
    if (!regex.test(value)) {      
      this.setState({ 
        showErrorMessagePhone: true,
        showIconCheckPhone: false        
      })      
    } else {
      this.setState({ 
        showErrorMessagePhone: false, 
        showIconCheckPhone: true 
      })
    }
    if (value === '') {
      this.setState({ showErrorMessagePhone: false})
    }
  }


  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true, checkboxValue: true });
  }


  changeValueCheckbox = () => {   
    if (this.state.checkboxValue) {
      this.setState({checkboxValue: false})
    }else {
      this.setState({checkboxValue: true})
    }    
  }

  render() {
    return (      
      <div>
        <Splash 
          // Rut
          showRut={this.state.showRut}
          showHintRut={this.showHintRut}
          hideHintRut={this.hideHintRut}
          showErrorMessageRut={this.state.showErrorMessageRut}
          validateRut={this.validateRut}
          showIconCheckRut={this.state.showIconCheckRut}
          inputRut={this.state.inputRut}
          // phone
          showNumberPhone={this.state.showNumberPhone}
          showHintNumberPhone={this.showHintNumberPhone}
          hideHintNumberPhone={this.hideHintNumberPhone}
          showErrorMessagePhone={this.state.showErrorMessagePhone}
          validatePhone={this.validatePhone}
          showIconCheckPhone={this.state.showIconCheckPhone}
          // button
          buttonDisabled={this.state.buttonDisabled}
          // checkbox
          checkboxValue={this.state.checkboxValue}
          changeValueCheckbox={this.changeValueCheckbox}
          // modal
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          showModal={this.state.showModal}
        />
      </div>      
    )
  }
}

export default App
