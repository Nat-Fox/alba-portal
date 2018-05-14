import React from 'react';
import { Grid, Row, Col, FormControl, FormGroup, Glyphicon, InputGroup, Modal } from 'react-bootstrap';
import Logo from './images/logoAlba.png';

function Splash(props) {
  const { showHintRut, hideHintRut, showHintNumberPhone, hideHintNumberPhone, validateRut, validatePhone, changeValueCheckbox, handleShow, handleClose } = props;

  return (
    <div>
      <div className="header">
        <img src={Logo} alt="logo"/>
      </div>
      <Grid>
        <div className="content-form">
          <div className="title">¡Bienvenidos!</div>
          <div className="subtitle">Los invitamos a conectarse a la primera wi-fi del transporte público de la región.</div>
          <div className="subtitle">Para comenzar, ingresa tus datos.</div>
        </div>
        
        <form className="form-input">  
          <Grid className="input-row">
            <Row className="user-hints">
              <Col xs={6} className="input-label">Rut:</Col>
              <Col xs={6} className="hint">
                {props.showRut && <div>123456789</div>}
              </Col>                
            </Row>
            <Row>
              <Col xs={12}>                     
                <FormGroup>
                  <InputGroup>
                    <FormControl                   
                      type="text" 
                      placeholder="12345678-9" 
                      onFocus={showHintRut} 
                      onBlur={hideHintRut}
                      onChange={validateRut}
                      maxLength="12"
                      value= {props.inputRut} />
                      { props.showIconCheckRut &&
                        <InputGroup.Addon>
                            <Glyphicon glyph="glyphicon glyphicon-ok icon-ok" /> 
                        </InputGroup.Addon>
                      }
                  </InputGroup>
                </FormGroup>                 
                {props.showErrorMessageRut && <div className="error-message">Rut inválido, vuelve a intentarlo</div>}                                
              </Col>
            </Row>
          </Grid>                    
          
          <Grid className="input-row">
            <Row className="user-hints">
              <Col xs={6} className="input-label">Celular:</Col>
              <Col xs={6} className="hint">
                {props.showNumberPhone && <div>+56911112222</div>}                
              </Col>                
            </Row>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <InputGroup>
                    <FormControl                   
                      type="tel" 
                      placeholder="+569" 
                      onFocus={showHintNumberPhone} 
                      onBlur={hideHintNumberPhone}
                      onChange={validatePhone}
                      maxLength={12} />
                      { props.showIconCheckPhone && 
                        <InputGroup.Addon>                          
                          <Glyphicon glyph="glyphicon glyphicon-ok icon-ok" /> 
                        </InputGroup.Addon> 
                      }
                  </InputGroup>
                </FormGroup>        
                {props.showErrorMessagePhone && <div className="error-message">Celular inválido, vuelve a intentarlo</div>}

                
                <input 
                  type="checkbox" 
                  checked={props.checkboxValue} 
                  onClick={changeValueCheckbox}/> 
                <span className="checkbox-text">
                  Acepto los 
                  <span 
                    className="term"
                    onClick={handleShow}
                    >
                    términos y condiciones
                  </span>
                </span>                  


                <Modal show={props.showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Términos y condiciones del servicio Alba WI-FI</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      La red WI-FI de Alba está destinada para el uso exclusivo de los pasajeros de los buses inscritos en el sistema de transporte público de la ciudad de Arica. Al utilizarla, aceptas ingresar tus datos personales, específicamente rut y número de teléfono. 
                      Al utilizar la red de Alba, aceptas y reconoces los riesgos potenciales de transmitir datos como números de tarjetas de crédito, contraseñas e información personal sensible a través de la red WI-FI. Alba no garantiza la privacidad absoluta de dichos datos.
                      Alba no asegura la calidad de la red WI-FI. Esta podría llegar a no estar disponible o ver la fuerza de la señal limitada por la cantidad de usuarios conectados por lo que Alba no se hace responsable de fallas en emergencias, problemas de conectividad, mensajes no enviados, páginas perdidas, datos no guardados, retrasos o interrupciones.
                      Alba podría establecer límites de uso y suspender el servicio para bloquear comportamientos ilícitos y proteger la red de fraudes o actividades que, de alguna manera, infrinjan la ley. 
                    </div>
                    <br /> <br />
                    <div>
                      <div>Algunas de las condiciones del servicio WI-FI de Alba:</div>
                      <div>1. Para entrar a la red es necesario ingresar rut y número de teléfono. De no ingresar esta información, la entrada a la WI-FI no será permitida</div>
                      <div>2. Para una navegación óptima y fluida, el número de usuarios conectados no debe superar a las 15 personas al mismo tiempo</div>
                      <div>3. Para garantizar fuerza de la señal es necesario que los usuarios mantengan un nivel de navegación básico que no involucre descarga de archivos o revisión de material videográfico</div>
                      <div>4. Podrás navegar libremente por un período de 30 minutos continuos</div>
                      <div>Al concluir el tiempo de navegación, debes esperar 5 minutos antes de volver a conectarte </div>                                                                      
                      <br />
                      <div>Al acceder y utilizar la red WI-FI de Alba, declaras haber leído, entendido y aceptado los términos y condiciones acá descritos.</div>                      
                    </div> 
                  </Modal.Body>
                    <Modal.Footer className="modal-footer">
                      <button 
                        className="btn-modal"
                        onClick={handleClose}>
                        Acepto los términos y condiciones
                      </button>                    
                    </Modal.Footer>
                  </Modal>
              </Col>
            </Row>

            <button className={ (!props.showIconCheckRut || !props.showIconCheckPhone || !props.checkboxValue) ? 'btn-init' : 'btn-enabled' } disabled={!props.showIconCheckRut || !props.showIconCheckPhone} >Iniciar sesión</button>            

          </Grid>                                                          
        </form>                    
      </Grid>        
    </div>
  )
}

export default Splash;
