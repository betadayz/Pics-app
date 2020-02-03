import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';


export default class App extends Component {
    state = { images: [] };
    
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 178dbb60966f5323fe01df7d3de7ddc2f6dabf820f7a2bde8c381a360c8d7a68'
            }
        });
        console.log(this)
        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
            </div>
        )
    }
}
