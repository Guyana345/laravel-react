import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tasks: []
        }

        this.HandleChange = this.HandleChange.bind(this);
    }

    // handle change
    handleChange(e) {
        // console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Todo Tasks</div>

                            <div className="card-body">
                               <form>
                                   <div className="form-group">
                                        <textarea onChange={this.HandleChange} value={this.state.name} maxLength="255" className="form-control" rows="5" placeholder="Create a new task" required/>
                                   </div>
                                   <button type="submit" className="btn btn-primary">Create Tasks</button>
                               </form>

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
            </div>
        );
    }
};

