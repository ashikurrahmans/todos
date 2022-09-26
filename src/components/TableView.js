import React from "react";
import { Button, Form, Table } from "react-bootstrap";

const TableView = ({
  id,
  title,
  description,
  time,
  isComplete,
  isSelect,
  toggleSelect,
}) => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <Form.Check
                type="checkbox"
                className="mt-2"
                id={id}
                checked={isSelect}
                onChange={() => toggleSelect(id)}
              />
            </th>
            <td>
              <div className="me-auto">
                <div className="fw-bold">{time}</div>
              </div>
            </td>
            <td>{title ? "Data is here" : "No data"}</td>
            <td>{description}</td>
            <td>
              <Button variant={isComplete ? "danger" : "secondary"} size="lg">
                {isComplete ? "Completed" : "Running"}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
