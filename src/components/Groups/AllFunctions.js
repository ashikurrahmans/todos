import React from "react";
import { ButtonGroup, Button, Form } from "react-bootstrap";

const AllFunctions = ({ setViews, ViewController }) => {
  return (
    <div className="d-flex justify-content-between my-4">
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">All</Button>
          <Button variant="secondary">Runnings</Button>
          <Button variant="secondary">Completed</Button>
        </ButtonGroup>
      </div>

      <div className="d-flex py-2">
        <div>
          <input
            type="radio"
            value="listview"
            name="view"
            id="listview"
            defaultChecked={setViews(true)}
            onChange={() => {
              ViewController(true);
            }}
          />
          <label htmlFor="listview" style={{ marginLeft: "10px" }}>
            List View
          </label>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            value="tableview"
            name="view"
            id="tableview"
            onChange={() => {
              ViewController(false);
            }}
            defaultChecked={setViews(false)}
          />
          <label htmlFor="tableview" style={{ marginLeft: "10px" }}>
            Table View
          </label>
        </div>
      </div>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="danger">Clear Selected</Button>
          <Button variant="danger">Clear Completed</Button>
          <Button variant="danger">Reset</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default AllFunctions;
