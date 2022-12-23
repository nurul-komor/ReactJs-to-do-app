import React, { Component } from 'react';
import classNames from 'classnames';
import Table from './Table';
// import formStyle from './Form.module.css';
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            toDos: [
                {
                    toDoName: "Wake up",
                    time: "5 Am",
                    status: "Done"
                },
                {
                    toDoName: "Morning Walk",
                    time: "7 Am",
                    status: "Didn't"
                },
            ]
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let toDoList = this.state.toDos;
        console.log(toDoList);
        const name = event.target.toDoName.value;
        const time = event.target.time.value;
        const status = event.target.status.value;
        let newToDo = {
            toDoName: name,
            time: time,
            status: status
        }
        toDoList.push(newToDo)
        this.setState({ toDos: toDoList }, () => { console.log(this.state) });
    }


    render() {
        let toDos;
        let id = 1;
        toDos = this.state.toDos.map((toDo, index) => {
            return <Table toDoName={toDo.toDoName} status={toDo.status} time={toDo.time} key={index} id={id++} />
        })
        return (
            <div className="container">
                <div className='card mb-3 p-2 col-md-6'>
                    <h5 style={{ margin: 0, padding: 0 }}>Add To do</h5>
                    <hr />
                    <form action="post" onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor="toDoName">To do name</label>
                            <input type="text" name="toDoName" id="toDoName" className={classNames("form-control")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="time">Time</label>
                            <input type="text" name="time" className={classNames("form-control")} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="status">status</label>
                            <select name="status" id="" className={classNames("form-control")}>
                                <option value="Done">Done</option>
                                <option value="Didn't">Didn't</option>
                                <option value="Will">Will</option>
                            </select>
                        </div>
                        <button type='submit' className={classNames("btn", "btn-secondary", "mt-2")}>Submit</button>
                    </form>
                </div>
                <div className="container">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name of To Do</th>
                                <th scope="col">Time</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toDos}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
