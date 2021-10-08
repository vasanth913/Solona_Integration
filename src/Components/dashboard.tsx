import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import mainLogo from '../Components/images/nokia-C7.png'; 

 export const Dashboard = () => {
    const [active, setActive] = useState(1)
    const [show, setShow] = useState(false);
  
    const handleInputChange = () => {

    }

    const showModal = (e) => {
      e.preventDefault();
      setShow(true);
    }

    useEffect(() => {
    
      const stepper = new Stepper(document.querySelector('#stepper1'), {
        linear: false,
        animation: true
      })
    },[])

  return (
    <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Produce</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Manufacture</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Recycle</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-4">
              <button className="step-trigger">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Re-product</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <form>
              <div id="test-l-1" className="content">
                <div className="form-group">
                  <Table striped>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Type</th>
                          <th>Brand</th>
                          <th>Serial Number</th>
                          <th></th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src={mainLogo}  alt=""  height={100} width={100}></img></td>
                          <td colSpan = {2}>Samsung</td>
                          <td>SCL-521dxq1</td>
                          <td>x1</td>
                          <td>744e7c5b86e47dfob</td>
                        </tr>
                      </tbody>
                    </Table>
                </div>
                <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" >Mint All Components</Button>
              </div>
              <div id="test-l-2" className="content">
                <div className="form-group">
                  <div>
                      <div className="row">
                          <div className="col-md-6 offset-md-3">
                          <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Choose LCD:</label>
                                    <select className="form-control" name="city">
                                        <option defaultValue="Select Mobile Device">Select Mobile Device</option>
                                        <option value="1">Iphone 12</option>
                                        <option value="2">Samsung A12</option>
                                        <option value="3">Redmi Note 5 Pro</option>
                                    </select>
                                   <div>
                                    <button type="button" style={{float:'right', marginTop:'10px'}} className="btn btn-primary" onClick={(e) => showModal(e)} >Show Detail</button>
                                  </div>
                                  <Modal
                                      show={show}
                                      onHide={() => setShow(false)}
                                      dialogClassName="modal-90w"
                                      aria-labelledby="example-custom-modal-styling-title"
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                          General Info
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                      <Form>
                                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                          <Form.Label column sm={2}>
                                            Type
                                          </Form.Label>
                                            CPU
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                          <Form.Label column sm={2}>
                                            Brand
                                          </Form.Label>
                                            QualComm
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                          <Form.Label column sm={2}>
                                            Serial
                                          </Form.Label>
                                            Snapdragon 888
                                        </Form.Group>
                                      </Form>
                                      </Modal.Body>
                                    </Modal>
                                </div>
                            </div>                      
                          </div>
                      </div>
                  </div>
                </div>
                <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" >Mint All Components</Button>
              </div>
              <div id="test-l-3" className="content text-center">
                In Progress
              </div>
              <div id="test-l-4" className="content text-center">
                In Progress
              </div>
            </form>
          </div>
        </div>
      </div>

  );
};

export default Dashboard;