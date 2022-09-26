import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Modal, ModalHeader } from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Search = ({ submitedData, todos }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const schema = yup
    .object({
      title: yup.string().required(),
      description: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    submitedData(data);
    setModal(false);
    console.log(submitedData);
    reset();
  };

  return (
    <>
      <div className="d-flex">
        <Form.Control
          type="text"
          id="search"
          aria-describedby="search"
          className="w-75"
          style={{ marginRight: "40px" }}
        />
        <Button variant="primary" onClick={toggle}>
          Add new todo
        </Button>
      </div>

      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add new todo</ModalHeader>
          <div className="p-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your title"
                  name="title"
                  {...register("title")}
                />
                <p className="text-danger">{errors.title?.message}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="description"
                  {...register("description")}
                />
                <p className="text-danger">{errors.description?.message}</p>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Search;
