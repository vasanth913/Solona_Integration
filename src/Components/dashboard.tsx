import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {  Button, Modal, Form , Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {mintComponentsData, mintProductComponentsData, mintComponent, mintProduct, burnProduct, burnComponentData } from '../redux/actions/loginUser';
import { useDispatch, useSelector} from "react-redux";
import type { RootState } from '../redux/store';
import {v4 as uuid_v4} from 'uuid';

 export const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [mintResponseData, setMintResponseData] = useState("");
    const [checkboxValueRetrive, setCheckboxValue] = useState([]);
    const [checkboxValueBurnRetrive, setCheckboxBurnValue] = useState([]);
    const [tableData, setTableData] = useState([]);
    const roleChange = useSelector((state: RootState) => state.loginReducer.roleChange);

    const [roleStateChange, setRoleChange] = useState(false);

   

    useEffect(() => {
      if(roleChange === "Manufacturer"){
        setRoleChange(true)
      }
    },[roleChange])

    
    const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
  
    const {
      register: register2,
      formState: { errors: errors2 },
      handleSubmit: handleSubmit2,
    } = useForm();

    const mintData = useSelector((state: RootState) => state.mintReducer.mintDataValues);

    const mintResponse = useSelector((state: RootState) => state.mintReducer.mintResponse);

    const onSubmit = (data) => {
      dispatch(mintComponent(true));
      dispatch(mintProduct(false));
      dispatch(burnProduct(false));
      dispatch(mintComponentsData(data,"mintComponent", mintData));

    }; // your form submit function which will invoke after successful validation

    const serielDropdown = (event) => {
      var searchText = event.target.value;

      var data = Object.values(Object.entries(localStorage).filter(([key]) => key.includes(searchText)));

      data && data.length > 0 && data.map(elem => {
          
          let val1 = JSON.parse(elem[1]);
          console.log('elem ***', val1.id);
          setTableData(val1);
      })
  }


  const keyVariable =  Object.keys(localStorage);


    useEffect(() => {
      setMintResponseData(mintResponse)
    },[mintResponse])
  
    // const clearValues = (e) => {
    //   reset({
    //     componentid: "",
    //     description: "",
    //     name: "",
    //     serielNo: ""
    //   })
    //   setMintResponseData("");
    // onClick={clearValues}
    // }

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

    const checkboxValue = () => {
          //Reference the Table.
          var grid = document.getElementById("Table1");

          //Reference the CheckBoxes in Table.
          var checkBoxes = grid.getElementsByTagName("INPUT");
          var message = "";
          var pushValue = [];
          //Loop through the CheckBoxes.
          for (var i = 0; i < checkBoxes.length; i++) {
            // @ts-expect-error: Let's ignore a compile error like this unreachable code 
              if (checkBoxes[i].checked) {
                  var row = checkBoxes[i].parentNode.parentNode;
                  // @ts-expect-error: Let's ignore a compile error like this unreachable code 
                  message += row.cells[1].innerHTML;
              //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
              //     message += "   " + row.cells[2].innerHTML;
              //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
              //     message += "   " + row.cells[3].innerHTML;
              //     message += "\n";
              pushValue.push(message);

              if(pushValue[0].length > 1) {
                setCheckboxValue(pushValue[0].split(","));
              } else {
                setCheckboxValue(pushValue[0]);
              }
               }
          }      
    }

  const checkboxBurnValue = () => {
      //Reference the Table.
      var grid = document.getElementById("Table2");

      //Reference the CheckBoxes in Table.
      var checkBoxes = grid.getElementsByTagName("INPUT");
      var message = "";
      var pushValue = [];
      //Loop through the CheckBoxes.
      for (var i = 0; i < checkBoxes.length; i++) {
        // @ts-expect-error: Let's ignore a compile error like this unreachable code 
          if (checkBoxes[i].checked) {
              var row = checkBoxes[i].parentNode.parentNode;
              // @ts-expect-error: Let's ignore a compile error like this unreachable code 
              message += row.cells[1].innerHTML;
          //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
          //     message += "   " + row.cells[2].innerHTML;
          //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
          //     message += "   " + row.cells[3].innerHTML;
          //     message += "\n";
          pushValue.push(message);

          if(pushValue[0].length > 1) {
            setCheckboxBurnValue(pushValue[0].split(","));
          } else {
            setCheckboxBurnValue(pushValue[0]);
          }
           }
      }      
}

    

    const getSelected = (data) => {

      // dispatch(mintComponent(false));
      // dispatch(mintProduct(true));
      // dispatch(burnProduct(false));
      dispatch(mintProductComponentsData(data,"mintAProduct", checkboxValueRetrive));
    }

    const burnAProduct = () => {
      dispatch(mintComponent(false));
      dispatch(mintProduct(false));
      dispatch(burnProduct(true));
      dispatch(burnComponentData("BurnAProduct", checkboxValueBurnRetrive));

    }; 

  return (
    <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step"  data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Produce</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger"  >
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
                  <Form key={1} onSubmit={handleSubmit(onSubmit)}>
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
                          <div className="col-md-5 offset-md-2">
                          <div className="form-row">
                                <div className="form-group col-md-6">
                                
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
                  <Form key={2} onSubmit={handleSubmit2(getSelected)}>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Component ID
                        </Form.Label>
                        <Form.Control {...register2("componentid", {
                          required: true,
                          minLength: 1,
                          maxLength: 255,
                        })} type="text" placeholder="Enter Component ID" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Description 
                        </Form.Label>
                        <Form.Control {...register2("description", {
                        })} type="text" placeholder="Enter Description" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Form.Control {...register2("name", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Serial no.
                        </Form.Label>
                        <Form.Control {...register2("serielNo", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Serial No" />
                      </Form.Group>
                      <br />
                      <div>
                        <Form.Label column sm={2}>
                            Select Seriel Number
                        </Form.Label>
                        <select onChange={(event)=> serielDropdown(event)} className="form-control" aria-label="Default select example">
                          <option>Select Seriel Number</option>
                          {
                              keyVariable.map(elem => (
                                  <option >{elem}</option>
                                
                              ))
                          }
                        </select>
                      </div> 
                      <br />
                      <Table striped bordered hover variant="dark" id="Table1">
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th>Id</th>
                                      <th>Name</th>
                                      <th>Description</th>
                                      <th>Seriel Number</th>
                                      {/* <th></th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                     
                                         <tr key={uuid_v4()}>
                                            <td style={{whiteSpace:'nowrap'}} >
                                              <input type="checkbox" className="messageCheckbox" 
                                              name="mintData" onChange={checkboxValue} /></td>
                                            {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData && tableData.id}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData && tableData.name}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData && tableData.description}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}} >{tableData && tableData.serielNo}</td>
                                            {/* <td> <button type="button" style={{float:'right', marginTop:'10px', whiteSpace:'nowrap'}} className="btn btn-primary" onClick={(e) => showModal(e)} >Show Detail</button> </td> */}
                                          </tr>
                                       
                                    }
                                  </tbody>
                          </Table>
                      <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit"  >Mint a Product</Button>
                    </Form>  
                </div>
              </div>
              <div id="test-l-3" className="content">
                <div className="form-group">
                <Form.Label column sm={2}>
                    Select Seriel Number
                </Form.Label>
                <select onChange={(event)=> serielDropdown(event)} className="form-control" aria-label="Default select example">
                  <option>Select Seriel Number</option>
                  {
                      keyVariable.map(elem => (
                          <option >{elem}</option>
                        
                      ))
                  }
                </select>
                <br />
                <Table striped bordered hover variant="dark" id="Table2">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Seriel Number</th>
                        {/* <th></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {
                          tableData && tableData.length > 0 && tableData.map(elem => (
                            <tr key={uuid_v4()}>
                              <td style={{whiteSpace:'nowrap'}} >
                                <input type="checkbox" className="messageCheckbox" 
                                name="mintData" onChange={checkboxBurnValue} /></td>
                              <td style={{whiteSpace:'nowrap'}}>{elem.id}</td>
                              <td style={{whiteSpace:'nowrap'}}>{elem.name}</td>
                              <td style={{whiteSpace:'nowrap'}}>{elem.description}</td>
                              <td style={{whiteSpace:'nowrap'}} >{elem.serielNo}</td>
                              {/* <td> <button type="button" style={{float:'right', marginTop:'10px', whiteSpace:'nowrap'}} className="btn btn-primary" onClick={(e) => showModal(e)} >Show Detail</button> </td> */}
                            </tr>
                          ))
                      }
                    </tbody>
                    </Table>
                  <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit" onClick={burnAProduct}  >Burn a Product</Button>
                </div>
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