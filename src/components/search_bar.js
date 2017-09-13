const React = require('react');
const {Component} = require('react');

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: 'Starting Value'};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
                {/*<p>Value of input:{this.state.term}</p>*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

module.exports = SearchBar;