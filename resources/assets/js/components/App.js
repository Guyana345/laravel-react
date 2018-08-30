import React, { Component } from 'react';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tasks: []
        }

        //bind this to methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    //lifecycle methods
    componentWillMount() {
        this.getTasks();
    }




    //handle change
    handleChange(e){
        //set state
        this.setState({
            name: e.target.value
        });
    }

    //handle submit
    handleSubmit(e) {
        e.preventDefault();

        //using axios to make api requests
        axios.post('/tasks', {
            name: this.state.name
        })
            .then(response => {
                //console.log('from handle submit', response);
                this.setState({
                    //create tasks and merge with tasks that are already there ...
                   tasks: [response.data, ...this.state.tasks],
                    name: '' //clear the form on successful post request

                });
        });
    }

    //render tasks
    renderTasks() {
        // loop through our data
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">{task.user.name}</h5>
                            <p className="card-text">{task.name}</p>
                            <button className="btn btn-primary float-left">Edit</button>
                            <button className="btn btn-danger float-right" onClick={() => this.handleDelete(task.id)}>Delete </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    //get tasks from backend
    getTasks() {
        axios.get('/tasks').then(response =>
            //console.log(response)
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }

    //handle delete  tasks based on id
    handleDelete(id) {
        //remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });

        // delete from backend
        axios.delete(`/tasks/${id}`);
    }



    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">What would you like to do</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea  
                                            className="form-control" 
                                            required rows="5" 
                                            value={this.state.name}
                                            maxLength="255"
                                            onChange={this.handleChange}
                                            placeholder="Create a new task" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>

                                </form>

                                <hr/>

                                {this.renderTasks()}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


