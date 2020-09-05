import React from 'react';

class EditItem extends React.Component {
  render() {
    const { itemId } = this.props.match.params;

    return (
      <div className="EditItem">
        <h1>Editing Item: {itemId}</h1>
      </div>
    );
  }
}

export default EditItem;
