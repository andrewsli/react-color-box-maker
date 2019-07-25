import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4';


class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  //{width, height, color,} => this.setState(every box plus the one entered)
  addBox(box){
    let newBox = {...box, id: uuid(), key: uuid()};
    this.setState(state =>({
      boxes: [...state.boxes, newBox]
    }))
  }

  //box ID => this.setstate(keep every box except the one with matching ID)
  removeBox(boxId){
    this.setState(st => ({
      boxes: st.boxes.filter(box => box.id !== boxId)
    }));
  }
  
  render() {
    let boxes =
    <div>
      {this.state.boxes.map(
        box => <Box
        height={box.height}
        width={box.width}
        backgroundColor={box.backgroundColor}
        id={box.id}
        key={box.id}
        removeThisBox={this.removeBox}/>
      )}
    </div>
    
    return(
      <div>
        {boxes}
        <br/>
        <NewBoxForm addNewBox={this.addBox}/>
      </div>
    )
  }
}

export default BoxList;