import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {  Button, Modal, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {mintComponentsData} from '../redux/actions/loginUser';
import { useDispatch, useSelector} from "react-redux";
import type { RootState } from '../redux/store';

 export const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [mintResponseData, setMintResponseData] = useState("");

    const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
      dispatch(mintComponentsData(data,"mintComponent"));

    }; // your form submit function which will invoke after successful validation

    const mintResponse = useSelector((state: RootState) => state.mintReducer.mintResponse);

    useEffect(() => {
      setMintResponseData(mintResponse)
    },[mintResponse])
  
    const clearValues = (e) => {
      reset({
        componentid: "",
        description: "",
        name: "",
        serielNo: ""
      })
      setMintResponseData("");
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
              <button className="step-trigger" disabled={Object.keys(mintResponseData).length === 0} onClick={clearValues}>
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
              <div id="test-l-1" className="content">
                <div className="form-group">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Component ID
                        </Form.Label>
                        <Form.Control {...register("componentid", {
                          required: true,
                          minLength: 1,
                          maxLength: 255,
                        })} type="text" placeholder="Enter Component ID" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Description 
                        </Form.Label>
                        <Form.Control {...register("description", {
                          required: true,
                          minLength: 10,
                          maxLength: 64,
                        })} type="text" placeholder="Enter Description" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Form.Control {...register("name", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Serial no.
                        </Form.Label>
                        <Form.Control {...register("serielNo", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Serial No" />
                      </Form.Group>
                      <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit" >Mint A Component</Button>
                      <br /> 
                        <div className="form-group">
                         <label htmlFor="exampleFormControlTextarea1">
                          Mint Response
                          </label>
                          <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={5}
                          defaultValue = {Object.keys(mintResponseData).length === 0 ? '' : mintResponseData}
                          />
                        </div>
                    </Form>
                </div>
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
                <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" >Mint a Component</Button>
              </div>
              <div id="test-l-3" className="content text-center">
                In Progress
              </div>
              <div id="test-l-4" className="content text-center">
                In Progress
              </div>
          </div>
        </div>
      </div>

  );
};

export default Dashboard;