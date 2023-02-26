import React, { useState } from "react";
import { Form, Button, FormSelect } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
//import { Form } from "react-bootstrap";

const options = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
  { value: "Option 4", label: "Option 4" },
  { value: "Option 5", label: "Option 5" },
  { value: "Option 6", label: "Option 6" },
  { value: "Option 7", label: "Option 7" },
  { value: "Option 8", label: "Option 8" },
  { value: "Option 9", label: "Option 9" },
  { value: "Option 10", label: "Option 10" },
];

export function MedicalHistoryForm() {
  const [patientName, setPatientName] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [disease, setDisease] = useState("");
  const [endDate, setEndDate] = useState("");
  const [previousConditions, setPreviousConditions] = useState("");
  const [medications, setMedications] = useState("");
  const [allergies, setAllergies] = useState("");
  const [surgeries, setSurgeries] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorLic, setDoctorLic] = useState("");
  const [expense, setExpense] = useState("");
  const [status, setStatus] = useState("Active");

  
  

 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend or do whatever you want with it.
    console.log({ patientName, beginDate ,disease , endDate, previousConditions, medications, allergies, surgeries, familyHistory , doctorName, doctorLic, expense, status});
  };

  return (
    <div className="container" style={{maxWidth: "600px"}}>
      <h2 className="text-center">Patient Medical History Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPatientName">
          <Form.Label>Patient Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter patient name" value={patientName} onChange={(event) => setPatientName(event.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formDateRange">
          <Form.Label>Duration of Treatment:</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control type="date" placeholder="Begin" value={beginDate} onChange={(event) => setBeginDate(event.target.value)} required />
            <span className="mx-2">to</span>
            <Form.Control type="date" placeholder="End" value={endDate} onChange={(event) => setEndDate(event.target.value)} required />
          </div>
        </Form.Group>
        <Form.Group controlId="formDisease">
          <Form.Label>Disease Detected</Form.Label>
          <Typeahead
            id="disease-dropdown"
            options={options}
            selected={disease}
            //onChange={handleDiseaseChange}
            placeholder="Search or select an option"
            clearButton
            highlightOnlyResult
          />
        </Form.Group>
        <Form.Group controlId="formPreviousConditions">
          <Form.Label>Previous Conditions:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter previous conditions (if any)" value={previousConditions} onChange={(event) => setPreviousConditions(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formMedications">
          <Form.Label>Medications:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter current medications (if any)" value={medications} onChange={(event) => setMedications(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formAllergies">
          <Form.Label>Allergies:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter allergies (if any)" value={allergies} onChange={(event) => setAllergies(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formSurgeries">
          <Form.Label>Surgeries:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter previous surgeries (if any)" value={surgeries} onChange={(event) => setSurgeries(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFamilyHistory">
          <Form.Label>Family History:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter family medical history (if any)" value={familyHistory} onChange={(event) => setFamilyHistory(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formDoctorName">
          <Form.Label>Doctor Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter Doctor Name" value={doctorName} onChange={(event) => setDoctorName(event.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formDoctorLic">
          <Form.Label>Doctor Licence:</Form.Label>
          <Form.Control type="text" placeholder="Enter Licence No" value={doctorLic} onChange={(event) => setDoctorLic(event.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formExpense">
          <Form.Label>expense:</Form.Label>
          <Form.Control type="text" placeholder="Enter Expenditure" value={expense} onChange={(event) => setExpense(event.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="Active">Active</option>
            <option value="Ended">Ended</option>
          </Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center" style={{ marginTop:"10px", marginBottom:"100px"}}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}
