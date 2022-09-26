import Search from "./components/Todos/Search";
import Title from "./components/Todos/Title";
import { Container, Row, Col } from "react-bootstrap";
import AllFunctions from "./components/Groups/AllFunctions";
import ListView from "./components/ListView";
import TableView from "./components/TableView";
import { useState } from "react";

const todos = [
  {
    id: 1,
    title: "Do Something Amazing",
    description: "This is awesome description",
    // time: new Date(),
    isComplete: false,
    isSelect: false,
  },
  {
    id: 2,
    title: "Do some relationsship",
    description: "Oh my god this is a description",
    // time: new Date(),
    isComplete: false,
    isSelect: false,
  },
];

const App = () => {
  const [allTodos, setTodos] = useState(todos || null);
  const [views, setViews] = useState(null);

  const toggleSelect = (id) => {};

  const submitedData = (data) => {
    const newData = [data, ...allTodos];
    setTodos(newData);
  };

  const ViewController = (views) => {
    console.log(views);
    return views ? (
      <ListView todos={allTodos} toggleSelect={toggleSelect}></ListView>
    ) : (
      <TableView todos={allTodos} toggleSelect={toggleSelect}></TableView>
    );
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Title></Title>
            <Search submitedData={submitedData}></Search>
            <AllFunctions
              setViews={setViews}
              ViewController={ViewController}
            ></AllFunctions>
            <ViewController></ViewController>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
