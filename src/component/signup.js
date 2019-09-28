import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Input, Container } from 'reactstrap';
import { FaFacebook, FaGoogle, FaUsers, FaUser, FaRegEnvelope, FaGlobe, FaMapMarkerAlt, FaLock } from "react-icons/fa";

class SignupModalConsumer extends React.Component {
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-page" size="md">
          <ModalHeader toggle={this.toggle}>
              Join CommuGrid!
              <p className="modal-subhead">Access to clean and sustainable energy</p>
            </ModalHeader>
          
          <ModalBody>
            <Row>
                <div className="col-4 social-signup">
                    <div className="p">Signup with</div>
                    <div className="signup-icons"><FaFacebook /><FaGoogle /></div>
                </div>
            </Row>
            <br />
            <form className="form clearfix">
              <Row className="modal-group col-12">
              <div className="input-box">
                <FaUsers />
                <Input type="select" name="user_type" placeholder="User Type">
                  <option>User type</option>
                </Input>
              </div>     
              <div className="input-box">
                <Input type="select" name="title" placeholder="Title">
                <option>Title</option>
                </Input>
              </div>            
            </Row>
            <br />
            <Row className="modal-group col-12">
              <div className="input-box">
                <FaUser />
                <Input type="text" name="fullname" placeholder="Full name" />
              </div>     
              <div className="input-box">
                <FaRegEnvelope />
                <Input type="email" name="email" placeholder="Email Address" />
              </div>            
            </Row>
            <br />
            <Row className="modal-group col-12">
              <div className="input-box">
                <FaGlobe />
                <Input type="text" name="country" placeholder="Country" />
              </div>     
              <div className="input-box">
                <FaRegEnvelope />
                <Input type="text" name="state" placeholder="State"/>
              </div>            
            </Row>
            <br />
            <Row className="modal-group col-12">
              <div className="input-box" id="adress-input">
                <FaMapMarkerAlt />
                <Input type="text" name="address" placeholder="Address" />
              </div>           
            </Row>
            <br/>
            <Row className="modal-group col-12">
              <div className="input-box">
                <FaLock />
                <Input type="password" name="password" placeholder="Password" />
              </div>     
              <div className="input-box">
                <FaLock />
                <Input type="password" name="confirmPassword" placeholder="Confirm password" />
                
              </div>            
            </Row>
            <br />
            <br />
            <Row className="modal-group col-12">
              <Button onClick={this.toggle}>Continue</Button>
            </Row>
            <br/>
            <Row className="modal-group col-12 foot-text">
              <p>By continuing, you agree with CommuGrid’s Terms of Service and Privacy Policy</p>
            </Row>
            </form>
            
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default SignupModalConsumer;