import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FavCard from './FavCard';
import { withAuth0 } from '@auth0/auth0-react';


class FavWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
            selectedWatchUpdate:[],
            showUpdateModal: false
        }
    }

   
    deleteFav = (id) => {
        const { user } = this.props.auth0;
        const email = user.email;
        const id = id;
        let url = `https://watches-401-entrance.herokuapp.com/deleteFav/${id}`;
        axios.delete(url).then(res =>
            this.setState({
                FavData: res.data
            })).catch(error => { alert(error.message) })
    }


    handleDisplayUpdateModal =(obj)=>{
        this.setState({
            showUpdateModal:!showUpdateModal,
            selectedWatchUpdate:obj
        })

    }


    render() {

        return (
            <div>
                {this.state.FavData.length?
                <FavCard FavData={this.state.FavData}
                deleteFav={this.deleteFav} 
                handleDisplayUpdateModal={this.handleDisplayUpdateModal}/>
            : 
            <h4> no found data</h4>}
                

                    {}

            </div>
        )
    }
}

export default withAuth0(FavWatch)

