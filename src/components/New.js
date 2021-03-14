import React from 'react';

export default function New(props) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.Item = props.Item;
    }
    render() {
      return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            <this.Item {...props}/>
        </div>
      )
    }
  }
}
