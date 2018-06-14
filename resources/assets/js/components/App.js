import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            name: '',
            tasks: []
        }
        //bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change
    handleChange(e) {
        // console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();

        axios
            .post('/tasks', {
                name: this.state.name
            })
            .then(response => {
                //console.log('from handle response ', response);
                this.setState({
                    tasks: [response.data, ...this.state.tasks],
                    name: ''
                })
            }).catch(error => {
                console.log(error.response);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            onChange={this.handleChange}
                                            maxLength="255"
                                            value={this.state.name}
                                            id="formTextarea"
                                            rows="5" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


