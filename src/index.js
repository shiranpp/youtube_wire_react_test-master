const React = require('react');
const ReactDOM = require('react-dom');
const API_KEY = 'AIzaSyDAcmalOoVTC9XrSP3-S_ebSlOjhIuioqs';
const SearchBar = require('./components/search_bar');
const YTSearch = require('youtube-api-search');
const {Component} = require('react');
import VideoList from './components/video_list';
import VideDetail from './components/video_detail'
import _ from 'lodash';
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedvideo:null
        };

        this.videoSearch('battlefield 1')
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedvideo:videos[0]
            });
            console.log(videos);
        });
    }
    render() {
        const videoSearch=_.debounce((term)=>{this.videoSearch(term),300})
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideDetail video={this.state.selectedvideo} />
                <VideoList
                    onVedioSelect={selectedvideo=>this.setState({selectedvideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));