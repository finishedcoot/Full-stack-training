import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/ItemActions";

function Shoppinglist(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  console.log(items);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shoppping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => removeItem(_id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

export default Shoppinglist;
