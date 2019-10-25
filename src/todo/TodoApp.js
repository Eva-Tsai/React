import React from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      // {id:number,text:'string',completed:boolean}
      todos: [
        { id: 1, text: 'read book', completed: false },
        { id: 2, text: 'learn react', completed: true },
      ],
    }
  }

  handleTodoCompleted = id => {
    const newTodos = [...this.state.todos]
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        // 反轉布林值
        newTodos[i].completed = !newTodos[i].completed
      }
    }
    this.setState({ todos: newTodos })
  }

  handleTextChange = event => {
    this.setState({ inputText: event.target.value })
  }

  handleTextKeyPress = event => {
    //判斷輸入框是否有值
    if (event.target.value && event.key === 'Enter') {
      // 建立新項目
      const newTodo = {
        id: +new Date(),
        text: event.target.value,
        completed: false,
      }
      // 加入陣列中
      this.setState({
        //   ...表展開
        todos: [newTodo, ...this.state.todos],
      })
      //清空輸入框
      this.setState({ inputText: '' })
    }
  }

  render() {
    return (
      <>
        <h1>TodoApp</h1>
        <TodoAddForm
          value={this.state.inputText}
          onChange={this.handleTextChange}
          onKeyPress={this.handleTextKeyPress}
        />
        <TodoList
          todos={this.state.todos}
          clickMethod={this.handleTodoCompleted}
        />
      </>
    )
  }
}

export default TodoApp
