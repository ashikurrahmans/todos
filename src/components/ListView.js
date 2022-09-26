import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const ListView = ({
  id,
  title,
  description,
  isComplete,
  isSelect,
  toggleSelect,
}) => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start py-3"
        >
          <Form.Check
            type="checkbox"
            className="mt-2"
            id={id}
            checked={isSelect}
            onChange={() => {
              toggleSelect(id);
            }}
          />

          <div className="ms-2 me-auto ms-3">
            <div className="fw-bold ">{title ? "Hello" : "No data"}</div>
            <div>{description}</div>
          </div>
          <Button variant={isComplete ? "danger" : "secondary"} size="lg">
            {isComplete ? "Completed" : "Running"}
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ListView;
