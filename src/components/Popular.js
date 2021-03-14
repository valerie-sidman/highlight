import React from 'react';

export default function Popular(props) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.Item = props.Item;
    }
    render() {
      return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            <this.Item {...props}/>
        </div>
      )
    }
  }
}
