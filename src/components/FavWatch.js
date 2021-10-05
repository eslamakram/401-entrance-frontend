import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FavCard from './FavCard';
import { withAuth0 } from '@auth0/auth0-react';
import UpdateModal from './UpdateModal';


class FavWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FavData: [],
            selectedWatchUpdate:{},
            showUpdateModal: false
        }
    }

    componentDidMount = () => {
        let url = 'https://watches-401-entrance.herokuapp.com/getFav';
        axios.get(url).then(res => {
            this.setState({
                FavData: res.data
            })
        })

    }

   
    deleteFav = (id) => {
        const { user } = this.props.auth0;
        const email = user.email;
        const id = id;
        let url = `https://watches-401-entrance.herokuapp.com/deleteFav/${id}?email=${email}`;
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

    handleUpdate =(event)=>{

        const { user } = this.props.auth0;
        const email = user.email;
        const reqBody = {
            
                name: event.target.watchName.value,
                description: event.target.watchDesc.value,
                image: event.target.watchImage.value,
                toUSD: event.target.watchToUSD.value,
                 email:email
               
        };
        let url = `https://watches-401-entrance.herokuapp.com/updateFav/${this.state.selectedWatchUpdate._id}?email=${email}`;
        axios.put(url,reqBody).then(res =>
            this.setState({
                FavData: res.data,
                selectedWatchUpdate:{},
                showUpdateModal: !this.state.showUpdateModal

            })).catch(error => { alert(error.message) })
    }


    
    


    render() {

        return (
            <div>
                {this.state.FavData.length?
                <FavCard FavData={this.state.FavData}
                deleteFav={this.deleteFav} 
                handleDisplayUpdateModal={this.handleDisplayUpdateModal}
                handleUpdate={this.handleUpdate}/>
            : 
            <h4> no found data</h4>}
                

                { this.state.showUpdateModal &&   <UpdateModal selectedWatchUpdate={this.state.selectedWatchUpdate}
                                 handleUpdate={this.handleUpdate}
                                 handleDisplayUpdateModal={this.handleDisplayUpdateModal}
                                 showUpdateModal={this.state.showUpdateModal}/>}

            </div>
        )
    }
}

export default withAuth0(FavWatch)

