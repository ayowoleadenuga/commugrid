import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Input, Container } from 'reactstrap';
import { FaFacebook, FaGoogle, FaRegEnvelope, FaLock } from "react-icons/fa";
import SignupModalConsumer from './signup';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const { color, className, outline, buttonLabel } = this.props
    return (
      <Container className="modal-container">
        <Button color={color} className={className} outline={outline} onClick={this.toggle}>{buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-page login-modal" size="md">
          <ModalHeader toggle={this.toggle}>
              Welcome back
              <p className="modal-subhead">Login into your account</p>
            </ModalHeader>
          
          <ModalBody>
            <Row>
                <div className="col-4 social-signup">
                    <div className="p">Signup with</div>
                    <div className="signup-icons"><FaFacebook /><FaGoogle /></div>
                </div>
            </Row>
            <br />
            <form className="form clearfix" id={"login-form"}>
            <Row className="modal-group col-12">    
              <div className="input-box2">
                <FaRegEnvelope />
                <Input type="email" name="email" placeholder="Email Address" />
              </div>
            </Row>
            <br />
            <Row className="modal-group col-12">
              <div className="input-box2">
                <FaLock />
                <Input type="password" name="password" placeholder="Password" />
              </div>           
            </Row>
            <br />
            <br />
            <Row className="modal-group col-12">
              <Button onClick={this.toggle}>Login</Button>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row className="modal-group col-12 foot-text22">
              <div><LoginModal className="forgot-password-trig" buttonLabel="Forgot password" /></div>              
            </Row>
            <Row className="modal-group col-12 foot-text22">
              <div><p><span className="foot-span"><SignupModalConsumer className="forgot-password-trig" buttonLabel="Create Account" /></span></p></div>
            </Row>
            </form>
            
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default LoginModal;