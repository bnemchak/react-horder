import React from 'react';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';

import itemsData from '../../../helpers/data/itemsData';

class NewItem extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  };

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  };

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  };

  changeDescEvent = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  };

  saveItem = (e) => {
    e.preventDefault();
    const keysIWant = [
      'itemName',
      'itemImage',
      'itemDescription',
    ];

    const newItem = _.pick(this.state, keysIWant);
    newItem.uid = authData.getUid();

    itemsData
      .createItem(newItem)
      .then((res) => {
        this.props.history.push(`/items/${res.data.name}`);
      })
      .catch((err) => console.error('new item broken', err));
  };

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="NewItem col-12">
        <h1>New Item</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="itemName">Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Enter Item Name"
              value={itemName}
              onChange={this.changeNameEvent}
              />
          </div>
          <div className="form-group">
            <label htmlFor="itemImage">Image</label>
            <input
              type="text"
              className="form-control"
              id="itemImage"
              placeholder="Enter Item Image"
              value={itemImage}
              onChange={this.changeImageEvent}
              />
          </div>
          <div className="form-group">
            <label htmlFor="itemDesc">Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              placeholder="Enter Item Description"
              value={itemDescription}
              onChange={this.changeDescEvent}
              />
          </div>
          <button className="btn btn-light" onClick={this.saveItem}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default NewItem;
