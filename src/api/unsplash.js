import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 178dbb60966f5323fe01df7d3de7ddc2f6dabf820f7a2bde8c381a360c8d7a68'
    }
})

