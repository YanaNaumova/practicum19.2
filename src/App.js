import { useState } from "react";
import "./App.css";
import { List, Input, InputGroup, Panel } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";

function App() {
  const [element, setElement] = useState("");
  const [elementsList, setElementsList] = useState([]);

  function addElement() {
    setElementsList([...elementsList, element]);
    setElement("");
  }
  return (
    <>
      <div style={{ padding: "20px" }}>
        <InputGroup
          inside
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input
            value={element}
            onChange={setElement}
            placeholder="Введите новый элемент"
            style={{
              padding: "3px",
              maxWidth: "300px",
              width: "100%",
            }}
          />
          <InputGroup.Button
            style={{
              backgroundColor: "#1675e0",
              border: "none",
              padding: "5px 10px",
              height: "100%",
            }}
          >
            <PlusIcon
              style={{ fontSize: "16px", color: "#fff" }}
              onClick={addElement}
            />
          </InputGroup.Button>
        </InputGroup>
      </div>

      <Panel bordered>
        <List size="sm">
          {elementsList.map((item, index) => (
            <List.Item
              key={index}
              index={index}
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "10px",
                margin: "5px",
                maxWidth: "600px",
              }}
            >
              {item}
            </List.Item>
          ))}
        </List>
      </Panel>
    </>
  );
}

export default App;
