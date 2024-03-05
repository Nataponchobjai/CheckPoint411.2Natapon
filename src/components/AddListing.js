import React, { Component, Fragment } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import Map from './Maps';

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
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, address, hours, description } = this.state;
        const payload = { name, address, hours, description };
        this.props.addListing(payload);
        this.setState({ open: false, name: '', address: '', hours: '', description: '' });
    };

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Link
                        variant="contained"
                        className="add-Listing"
                        onClick={this.toggleDialog}
                    >
                        Add
                    </Link>
                </div>
                
                <Dialog maxWidth='xlg' open={this.state.open} onClose={this.toggleDialog}>
                    <DialogTitle>Add New Listing</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '450px' }}>
                            <TextField id="name" 
                                placeholder="Name" 
                                value={this.state.name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField id="address" 
                                placeholder="Address" 
                                value={this.state.address} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField id="hours" 
                                placeholder="Hours (ex. 8AM - 9PM)" 
                                value={this.state.hours} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField id="description" 
                                placeholder="Description" 
                                value={this.state.description} 
                                onChange={this.handleTextChange} 
                                required />
                            
                            <Button type="submit" variant="contained" color="primary">Save</Button>
                        </form>
                        <br />
                        <br />
                        
                        <div style={{ width: '50%', height: '400px' }}> 
                            <Map />
                        </div>
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
}

export default AddListing;