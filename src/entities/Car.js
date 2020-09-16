import { Record, Immutable, fromJS, List } from "immutable";

const CarRecord = Record({
  id: "unknown",
  marque: "unknown",
  description: "unknown",
  //   categories: List(),
});

export default class Car extends CarRecord {
  constructor(props) {
    super(_reviveProps(props));
  }
}

const _reviveProps = ({ ...props }) => {
  //   if (props.categories.length > 0) {
  //     props.categories = List(props.categories);
  //   }

  return props;
};

// const immCar = new Car(plainJavascriptObjectFromDB);
