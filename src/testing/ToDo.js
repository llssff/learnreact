import React from 'react';

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            text: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //update items during input
    handleChange(e) {
        this.setState({text: e.target.value});
        console.log(e.target.value);
    }

    //append text into newItem into items list
    handleSubmit(e){
        e.preventDefault();
        if (this.state.text.length === 0){
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(e => ({
            items: e.items.concat(newItem),
            text: ''
        }));
    }


    render(){
        return (
            <div>
                <h3>TODO</h3>
                <ToDoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Things to do
                    </label>
                    <br/>
                    <input
                        id = "new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        />/
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }
}

class ToDoList extends React.Component {
    render(){
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default ToDo;