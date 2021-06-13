import React, { useState, useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function PlaylistMenu() {

    const [playlists, setPlaylists] = useState([
        {
            name: "Workout",
            id: 1,
        },
        {
            name: "Chill",
            id: 2
        },
        {
            name: "Let's code",
            id: 3
        },
        {
            name: "Weekend beats",
            id: 4
        }
    ]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(playlists => setPlaylists(playlists))
    // })

    const displayPlaylistMenu = () => {
        return playlists.map((playlist) => {
            return (
                <NavItem key={playlist.id}>
                    <NavIcon>
                        <i className="nav-icon" />
                    </NavIcon>
                    <NavText>
                        {playlist.name}
                    </NavText>
                </NavItem>
            )
        } )
    }
    return (
        <SideNav
            // onSelect={(selected) => {
            //         const to = '/' + selected;
            //         if (location.pathname !== to) {
            //             history.push(to);
            //         }
            //     }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem>
                    <NavIcon>
                        <i className="nav-icon" />
                    </NavIcon>
                    <NavText>
                        Your Playlists
                    </NavText>
                </NavItem>
                {displayPlaylistMenu()}
            </SideNav.Nav>
        </SideNav>
    )
}
