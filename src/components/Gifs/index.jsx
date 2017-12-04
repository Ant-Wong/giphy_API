import React from 'react';

class Gifs extends React.Component {
    render() {
        return (
            <div className="gif-list">
                {this.props.gifArr}
            </div>
        )
    }
}

export default Gifs;