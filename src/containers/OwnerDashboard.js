import React, { Component } from 'react'
import AddGenreForm from '../components/AddGenreForm'
import AddSongForm from '../components/AddSongForm'
import AddArtistForm from '../components/AddArtistForm'

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
            <div>
               <button onClick={this.handleClick}>Add Genre</button> 
               <button onClick={this.handleClick}>Add Artist</button> 
               <button onClick={this.handleClick}>Add Song</button>
               <div>
                   {this.displayItems()}
               </div>
            </div>
        )
    }
}
