import React, { Component, Fragment } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // เพิ่ม import PropTypes

class AddListing extends Component {
    state = {
        open: false,
        name: '',
        address: '',
        hours: '',
        description: '',
    };

    toggleDialog = () => this.setState({ open: !this.state.open });

    handleTextChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { open, ...payload } = this.state;
        payload.id = this.props.listingTotal + 1;
        console.log("THE LISTING", payload);
        this.props.addListing(payload);
        this.setState({ open: false, name: '', address: '', hours: '', description: '' });
    };

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                <Link
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add
                    </Link>
                </div>
                <Dialog open={this.state.open} onClose={this.toggleDialog}>
                    <DialogTitle>Add New Listing</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                            <TextField id="name" placeholder="Name" value={this.state.name} onChange={this.handleTextChange} required />
                            <TextField id="address" placeholder="Address" value={this.state.address} onChange={this.handleTextChange} required />
                            <TextField id="hours" placeholder="Hours (ex. 8AM - 9PM)" value={this.state.hours} onChange={this.handleTextChange} required />
                            <TextField id="description" placeholder="Description" value={this.state.description} onChange={this.handleTextChange} required />
                            <br />
                            <Button type="submit" variant="contained" color="primary">Save</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
}

// เพิ่ม PropTypes ที่นี่
AddListing.propTypes = {
  addListing: PropTypes.func.isRequired, // ต้องรับฟังก์ชัน addListing และเป็นสิ่งที่ต้องการ
  listingTotal: PropTypes.number.isRequired, // ต้องรับตัวเลข listingTotal และเป็นสิ่งที่ต้องการ
};

export default AddListing;
