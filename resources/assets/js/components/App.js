import React, { Component } from 'react';
<<<<<<< HEAD
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
    //handle change
    HandleChange(e) {
=======

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
>>>>>>> 09b77e3d1bcfde887b18590447bdbd4f1df7751f
        this.setState({
            name: e.target.value
        });
    }

<<<<<<< HEAD
=======
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
>>>>>>> 09b77e3d1bcfde887b18590447bdbd4f1df7751f
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
<<<<<<< HEAD
                            <div className="card-header">Todo Tasks</div>

                            <div className="card-body">
                               <form>
                                   <div className="form-group">
                                        <textarea onChange={this.HandleChange} value={this.state.name} maxLength="255" className="form-control" rows="5" placeholder="Create a new task" required/>
                                   </div>
                                   <button type="submit" className="btn btn-primary">Create Tasks</button>
                               </form>
=======
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
>>>>>>> 09b77e3d1bcfde887b18590447bdbd4f1df7751f
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


