import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../actions/ItemActions";

export const ItemModal = () => {
  const dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  const [itemName, setItemName] = useState("");

  const toggle = () => setModal(!modal);

  const onChange = (e) => {
    setItemName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
    };
    dispatch(addItem(newItem));
    toggle();
  };

  return (
    <div>
      <Button color="dark" onClick={toggle} style={{ marginBottom: "2rem" }}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="itemName"
                id="item"
                placeholder="Add Your Item"
                onChange={onChange}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
