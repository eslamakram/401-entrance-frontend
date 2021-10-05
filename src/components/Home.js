import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WatchCard from './WatchCard';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WatchData: [],
            FavData: []
        }
    }

    componentDidMount = () => {
        let url = 'https://watches-401-entrance.herokuapp.com/getApi';
        axios.get(url).then(res => {
            this.setState({
                WatchData: res.data
            })
        })

    }

    addtoFav = ({name, description, image, toUSD}) => {
        const { user } = this.props.auth0;
        const email = user.email;
        const obj = {
            name: name,
            image: image,
            description: description,
            toUSD: toUSD,
            email: email
        };
        let url = "https://watches-401-entrance.herokuapp.com/addtoFav";
        axios.post(url, obj).then(res =>
            this.setState({
                FavData: res.data
            })).catch(error => { alert(error.message) })
    }


    render() {

        return (
            <div>
                {this.state.WatchData.length?
                <WatchCard WatchData={this.state.WatchData}
                addtoFav={this.addtoFav} />
            : 
            <h4> no found data</h4>}
                

                    {}

            </div>
        )
    }
}

export default withAuth0(Home)
