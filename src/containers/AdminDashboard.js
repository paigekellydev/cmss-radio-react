import React, { Component } from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import AddSongForm from '../forms/AddSongForm'
import AddArtistForm from '../forms/AddArtistForm'

export default class OwnerDashboard extends Component {

    state = {
        display: 'home'
    }

    handleClick = (event) => {
        console.log(event)
    }

    displayItems = () => {
        if (this.state.display === 'add genre') {
            return <AddGenreForm />
        } else if (this.state.display === 'add artist') {
            return <AddArtistForm />
        } else if (this.state.display === 'add artist') {
            return <AddSongForm />
        }
    }
    render() {
        return (
            <div className="admin-dashboard">
                <h2>Administrative Dashboard</h2>
               <button className="add-button" onClick={this.handleClick}>Add Genre</button> 
               <button className="add-button" onClick={this.handleClick}>Add Artist</button> 
               <button className="add-button" onClick={this.handleClick}>Add Song</button>
               <div>
                   {this.displayItems()}
               </div>
            </div>
        )
    }
}
