import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
    state = { alums: [] };

    componentWillMount() { 
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => this.setState({ alums: response.data }));
    }
    renderAlbums() {
       return this.state.alums.map(album => 
         <AlbumDetails key={album.title} Item={album} />
       );
    }
    render() {
        return (
            <ScrollView >
            {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
