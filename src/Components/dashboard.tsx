import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {  Button, Modal, Form , Table, Tabs, Tab } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {mintComponentsData, mintProductComponentsData, mintComponent, mintProduct, burnProduct, burnComponentData, addAsAChild ,addAsAChild1, mintReproduceProductComponentsData} from '../redux/actions/loginUser';
import { useDispatch, useSelector} from "react-redux";
import type { RootState } from '../redux/store';
import {v4 as uuid_v4} from 'uuid';

 export const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [mintResponseData, setMintResponseData] = useState("");
    const [checkboxValueRetrive, setCheckboxValue] = useState("");
    const [checkboxValueRetrive1, setCheckboxValue1] = useState("");
    const [checkboxValueBurnRetrive, setCheckboxBurnValue] = useState("");
    const [tableData, setTableData] = useState([]);
    const [tableData1, setTableData1] = useState([]);
    const [searchDropDownText, setDropDownText] = useState();
    const [dropDownData, setDropDownData] = useState([]);
    const [addChildButton, setAddChildButton] = useState(true);
    const roleChange = useSelector((state: RootState) => state.loginReducer.roleChange);

    const [key, setKey] = useState('profile');

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

    const {
      register: register3,
      formState: { errors: errors3 },
      handleSubmit: handleSubmit3,
    } = useForm();

    const mintData = useSelector((state: RootState) => state.mintReducer.mintDataValues);

    const mintResponse = useSelector((state: RootState) => state.mintReducer.mintResponse);

    const addAsAChildButton = useSelector((state: RootState) => state.mintReducer.addAsAChildButton);

    const burnResponseData = useSelector((state: RootState) => state.mintReducer.burnResponseData);

    const onSubmit = (data) => {
      dispatch(mintComponent(true));
      dispatch(mintProduct(false));
      dispatch(burnProduct(false));
      dispatch(mintComponentsData(data,"mintComponent", mintData));

    }; // your form submit function which will invoke after successful validation

    const keyVariable =  Object.keys(localStorage);

    const valueVariable =  Object.values(localStorage);
 
    const keyVariable1 =  Object.keys(localStorage);

    const serielDropdown = (event) => {

      var searchText = event.target.value;

      console.log('searchText', searchText);

      setDropDownText(searchText);

      var data = Object.values(Object.entries(localStorage).filter(([key]) => key.includes(searchText)));


      //      let arrToObjects =  data && data.length > 0 && data.map((item, idx) => {
      //       return { [item[idx]]: item[1] };
      //     })

      // console.log('arrToObjects', arrToObjects);
      
      //pushToAry("myName", "myVal");
      data && data.length > 0 && data.map(elem => {
          let val1 = JSON.parse(elem[1]);
          setTableData(val1);
      })
 
     
  }

  const serielDropdown1 = (event) => {

    var searchText = event.target.value;

    console.log('searchText', searchText);

    setDropDownText(searchText);

    var data = Object.values(Object.entries(localStorage).filter(([key]) => key.includes(searchText)));


    //      let arrToObjects =  data && data.length > 0 && data.map((item, idx) => {
    //       return { [item[idx]]: item[1] };
    //     })

    // console.log('arrToObjects', arrToObjects);
    
    //pushToAry("myName", "myVal");
    data && data.length > 0 && data.map(elem => {
        let val1 = JSON.parse(elem[1]);
        setTableData1(val1);
    })

   
}


 

  const reCycle = () => {

    valueVariable && valueVariable.length > 0 && valueVariable.map(elem => {
      
       var dataPush = [];

    for(let i=0; i < valueVariable.length; i++){
      elem = JSON.parse(valueVariable[i]);
      if(elem.parent == 0){
        
        dataPush.push(elem.id);
      }   
         setDropDownData(dataPush);
      }
    })
  }

  const reProduceEmpty = () => {

    valueVariable && valueVariable.length > 0 && valueVariable.map(elem => {
      
       var dataPush = [];

    for(let i=0; i < valueVariable.length; i++){
      elem = JSON.parse(valueVariable[i]);
      if(elem.parent == 0){
        
        dataPush.push(elem.id);
      }   
         setDropDownData(dataPush);
      }
    })
  }

  useEffect(() => {
    valueVariable && valueVariable.length > 0 && valueVariable.map(elem => {
      
      var dataPush = [];

   for(let i=0; i < valueVariable.length; i++){
     elem = JSON.parse(valueVariable[i]);
     if(elem.parent == 0){
       
       dataPush.push(elem.id);
     }   
        setDropDownData(dataPush);
     }
   })
  },[burnResponseData])

  
   
  
    useEffect(() => {
      setMintResponseData(mintResponse)
    },[mintResponse])

    useEffect(() => {
      setAddChildButton(false)
    },[addAsAChildButton])
  
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
        //   for (var i = 0; i < checkBoxes.length; i++) {
        //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
        //     if (checkBoxes[i].checked) {
        //         var row = checkBoxes[i].parentNode.parentNode;
        //         // @ts-expect-error: Let's ignore a compile error like this unreachable code 
        //         message += row.cells[1].innerHTML;
        //         message += "\n";
        //     }
        // }
 
        // //Display selected Row data in Alert Box.
        // alert(message);
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
              console.log('message ***', message);
              setCheckboxValue(message);
              //pushValue.push(message);
              
              // if(pushValue[0].length > 1) {
              //   setCheckboxValue(pushValue[0].split(","));
              // } else {
              //   setCheckboxValue(pushValue[0]);
              // }
               }
          }      
    }

    const checkboxValue1 = () => {
      //Reference the Table.
      var grid = document.getElementById("Table3");

      //Reference the CheckBoxes in Table.
      var checkBoxes = grid.getElementsByTagName("INPUT");
      var message = "";
      var pushValue = [];
    //   for (var i = 0; i < checkBoxes.length; i++) {
    //     // @ts-expect-error: Let's ignore a compile error like this unreachable code 
    //     if (checkBoxes[i].checked) {
    //         var row = checkBoxes[i].parentNode.parentNode;
    //         // @ts-expect-error: Let's ignore a compile error like this unreachable code 
    //         message += row.cells[1].innerHTML;
    //         message += "\n";
    //     }
    // }

    // //Display selected Row data in Alert Box.
    // alert(message);
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
          console.log('message ***', message);
          setCheckboxValue1(message);
          //pushValue.push(message);
          
          // if(pushValue[0].length > 1) {
          //   setCheckboxValue(pushValue[0].split(","));
          // } else {
          //   setCheckboxValue(pushValue[0]);
          // }
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
          // pushValue.push(message);
          setCheckboxBurnValue(message);

          // if(pushValue[0].length > 1) {
          //   setCheckboxBurnValue(pushValue[0].split(","));
          // } else {
          //   setCheckboxBurnValue(pushValue[0]);
          // }
           }
      }      
}

    

    const getSelected = (data) => {

      console.log('mintAProduct1 ****');
      // dispatch(mintComponent(false));
      // dispatch(mintProduct(true));
      // dispatch(burnProduct(false));
      dispatch(mintProductComponentsData(data,"mintAProduct"));
    }

    const mintReProduceProduct = (data) => {

      // dispatch(mintComponent(false));
      // dispatch(mintProduct(true));
      // dispatch(burnProduct(false));
      dispatch(mintReproduceProductComponentsData(data,"mintAReproduceProduct"));
    }

    const addChildParent = () => {
      console.log('addChildParent Button');
      dispatch(addAsAChild("addAsAChild", checkboxValueRetrive));
    }

    const addChildParent1 = () => {
      console.log('addChildParent Button1');
      dispatch(addAsAChild1("addAsAChildReProduce", checkboxValueRetrive1));
    }

    const burnAProduct = () => {
      // dispatch(mintComponent(false));
      // dispatch(mintProduct(false));
      // dispatch(burnProduct(true));
      dispatch(burnComponentData("BurnAProduct", checkboxValueBurnRetrive));

    }; 

  return (
    <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step"  data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Produce Component</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger"  >
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Manufacture Product</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger" onClick={reCycle}>
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Recycle</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-4">
              <button className="step-trigger" onClick={reProduceEmpty}>
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Re-Productise</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
              <div id="test-l-1" className="content">
                <div className="form-group">
                  <Form key={1} onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Id
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
                          Serial Number
                        </Form.Label>
                        <Form.Control {...register("serielNo", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Serial No" />
                      </Form.Group>
                      <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit" >Mint Component</Button>
                      <br /> 
                        <div className="form-group">
                         <label htmlFor="exampleFormControlTextarea1">
                          Response from Solana blockchain 
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
                          Serial Number
                        </Form.Label>
                        <Form.Control {...register2("serielNo", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Serial No" />
                      </Form.Group>
                      <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit"  >Mint Product</Button>
                      <br />
                      <br />
                      <div>
                        <select onChange={(event)=> serielDropdown(event)} className="form-control" aria-label="Default select example">
                          <option>Select Item to add to product</option>
                          {
                              keyVariable.map(elem => (
                                  <option key={uuid_v4()}>{elem}</option>
                                
                              ))
                          }
                        </select>
                      </div> 
                      <br />
                     <div>
                      {
                      <Table striped bordered hover variant="light" id="Table1">
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th>Id</th>
                                      <th>Name</th>
                                      <th>Description</th>
                                      <th>Serial Number</th>
                                      {/* <th></th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                       
                                         <tr key={uuid_v4()}>
                                            <td style={{whiteSpace:'nowrap'}} >
                                              {
                                                tableData && Object.keys(tableData).length > 1 ?
                                                <input type="checkbox" className="messageCheckbox" id="myCheck"
                                                name="mintData" onChange={checkboxValue} value={checkboxValueRetrive} />
                                                : ''
                                              }
                                             </td>
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
                          }
                        </div>
                    </Form>  
                </div>
                <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit"  onClick={addChildParent} >Add as a Child</Button>
              </div>
              <div id="test-l-3" className="content">
                <div className="form-group">
                <select onChange={(event)=> serielDropdown(event)} className="form-control" aria-label="Default select example">
                  <option> Select Item to Recycle </option>
                  {
                      dropDownData && dropDownData.map(elem => (
                          <option key={uuid_v4()}>{elem}</option>
                        
                      ))
                  }
                </select>
                <br />
                <Table striped bordered hover variant="light" id="Table2">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Serial Number</th>
                        {/* <th></th> */}
                      </tr>
                    </thead>
                    <tbody>
                                    {
                                         <tr key={uuid_v4()}>
                                            <td style={{whiteSpace:'nowrap'}} >
                                            {
                                                tableData && Object.keys(tableData).length > 1 ?
                                                <input type="checkbox" className="messageCheckbox" 
                                                 name="mintData" onChange={checkboxBurnValue} />
                                                : ''
                                              }
                                             </td>
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
                  <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit" onClick={burnAProduct}  >Burn Product</Button>
                </div>
              </div>
              <div id="test-l-4" className="content">
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
                  <Form key={2} onSubmit={handleSubmit3(mintReProduceProduct)}>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Id
                        </Form.Label>
                        <Form.Control {...register3("componentid", {
                          required: true,
                          minLength: 1,
                          maxLength: 255,
                        })} type="text" placeholder="Enter Component ID" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Description 
                        </Form.Label>
                        <Form.Control {...register3("description", {
                        })} type="text" placeholder="Enter Description" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Form.Control {...register3("name", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                          Serial Number
                        </Form.Label>
                        <Form.Control {...register3("serielNo", {
                          required: true,
                          minLength: 5,
                          maxLength: 16,
                        })} type="text" placeholder="Enter the Serial No" />
                      </Form.Group>
                      <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="submit">Mint Product</Button>
                      <br />
                      <br />
                      <div>
                        <select onChange={(event)=> serielDropdown1(event)} className="form-control" aria-label="Default select example">
                          <option>Select Item to add to product</option>
                          {
                              keyVariable1.map(elem => (
                                  <option key={uuid_v4()}>{elem}</option>
                                
                              ))
                          }
                        </select>
                      </div> 
                      <br />
                     <div>
                      {
                      <Table striped bordered hover variant="light" id="Table3">
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th>Id</th>
                                      <th>Name</th>
                                      <th>Description</th>
                                      <th>Serial Number</th>
                                      {/* <th></th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                     
                                         <tr key={uuid_v4()}>
                                            <td style={{whiteSpace:'nowrap'}} >
                                            {
                                                tableData1 && Object.keys(tableData1).length > 1 ?
                                                <input type="checkbox" className="messageCheckbox"
                                              name="mintData" onChange={checkboxValue1} />
                                                : ''
                                            }
                                            </td>
                                            {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData1 && tableData1.id}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData1 && tableData1.name}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}}>{tableData1 && tableData1.description}</td>
                                             {/* @ts-expect-error: Let's ignore a compile error like this unreachable code */}
                                            <td style={{whiteSpace:'nowrap'}} >{tableData1 && tableData1.serielNo}</td>
                                            {/* <td> <button type="button" style={{float:'right', marginTop:'10px', whiteSpace:'nowrap'}} className="btn btn-primary" onClick={(e) => showModal(e)} >Show Detail</button> </td> */}
                                          </tr>
                                       
                                    }
                                  </tbody>
                          </Table>
                          }
                        </div>
                    </Form>  
                </div>
                <Button style={{float:'right', paddingTop:'10px'}} className="btn btn-primary" variant="success" type="button" onClick={addChildParent1} >Add as a Child</Button>
              </div>
          </div>
        </div>
      </div>

  );
};

export default Dashboard;