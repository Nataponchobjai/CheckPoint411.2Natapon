import React, { Component, Fragment } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';


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
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...this.state }
        payload.id = this.props.listingTotal + 1;
        delete payload.open
        console.log("THE LISTING", payload);
        this.props.addListing(payload); // Assuming this method is correctly passed down as a prop and updates the parent state or global state
    
        // Reset the form fields and close the dialog
        this.setState({ open: false })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const payload = { ...this.state }
    //     payload.id = this.props.carTotal + 1
    //     delete payload.open
    //     console.log("THE LISTING", payload)
    //     // add this.props.addCar function here
    //     // also add this.setState to close the dialog
    //     this.props.addListing(payload)
    //     this.setState({ open: false })
    // }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                address: '',
                hours: '',
                description: ''
            })
        }
    }



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
                <Dialog open={this.state.open} onClose={this.toggleDialog}>
                    <DialogTitle>Add New Listing</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
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
                            <TextField id="description" placeholder="Description" 
                            value={this.state.description} 
                            onChange={this.handleTextChange} 
                            required />
                            <br />
                            <Button type="submit" variant="contained" color="primary">Save</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
}


export default AddListing;
