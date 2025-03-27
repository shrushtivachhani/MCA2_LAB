import React from 'react'

class EventDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    btnUpdate(e) {
        console.log(e)
    }
    render() {
        return (
            <>
                <h2>Event Demo</h2>
                <input type='text' name="text1" onClick={this.btnUpdate.bind(this)} />
                <input type='text'name="text2" onClick={this.btnUpdate.bind(this)} />
                <input type='buttton' onClick={this.btnUpdate.bind(this)} value="clickme" />
                <input type='buttton' onClick={this.btnUpdate.bind(this)} value="clickme" />
            </>
        );
    }
}

export default EventDemo;