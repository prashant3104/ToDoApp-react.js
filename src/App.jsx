import React, { Component } from 'react';
import './App.css'
import Todos from './components/Todos';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/Pages/About'
import axios from 'axios';

class App extends Component{
    state = {
        todos: []
    };

    componentDidMount = () =>{
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({todos : res.data}))
    }

    addToDo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
            title : title,
            completed : false
        })
        .then(res => {this.setState({todos : [...this.state.todos, res.data]})})
    }

    markComplete = (id) => {
        const x = this.state.todos;
        for(let i=0; i<x.length; i++)
        {   
            if(x[i].id === id)
            {
                x[i].completed = !(x[i].completed);
            }
        }
        this.setState({todos : x})
    };

    delItem = (id) =>{
        const x = this.state.todos;
        const y = [];
        for(let i = 0; i<x.length; i++)
        {
            if(x[i].id !== id)
            {
                y.push(x[i])
            }
        }
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {this.setState({todos : y})})        
    }

    

    render(){
        console.log(this.state.todos)
        return(
            <Router>
                <div style={{padding:'0 30px', alignItems:'center'}}>
                    <Header />
                    <Route
                        path="/"
                        exact
                        render={props => (
                            <React.Fragment>
                                <AddToDo addToDo = {this.addToDo}/>
                                <Todos 
                                    todos={this.state.todos} 
                                    markComplete = {this.markComplete}
                                    delItem = {this.delItem}
                                />
                            </React.Fragment>
                        )}
                    
                    />
                    <Route 
                        path="/About"
                        component={About}
                    /> 
                </div>
            </Router>
        );
    }
}

export default App;