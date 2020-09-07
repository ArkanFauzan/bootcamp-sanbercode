// import React from 'react';
// import { connect } from 'react-redux';
// import './App.css';
// /**
//  * 
//  * Redux -> State Management
//  * 
//  * Provider : provide state ke React Component
//  * Store    : Sumur Semua State Global
//  * Dispatch : Yang akan memilih action apa yang akan dieksekusi
//  * Action   : Tindakan yang seperti apa
//  * Reducer  : eksekusinya
//  * 
//  * 
//  */

// class TodoList extends React.Component {
//   todoRef = React.createRef();

//   _handleNewTodo = (e) => {
//     let newTodo = todoRef.current.value;
//     props.addNewTodo(newTodo);

//     e.preventDefault();
//     todoRef.current.value = '';
//   }

//   render() {
//     const { todos } = props;

//     return (
//       <div className="App App-header">
//         <div>Todo List</div>
//         <form onSubmit={_handleNewTodo}>
//           <label>New todo <input ref={todoRef} /></label>
//         </form>
//         <ul>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   todos: state.todos
// })

// const mapDispatchToProps = dispatch => ({
//   addNewTodo: todo => dispatch({ type: 'ADD TODO', todo })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function TodoList() {
  let todoRef;

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const _handleNewTodo = (e) => {
    let newTodo = todoRef.value;
    dispatch({
      type: 'ADD TODO',
      todo: newTodo
    })

    e.preventDefault();
    todoRef.value = '';
  }

  return (
    <div className="App App-header">
      <div>Todo List</div>
      <form onSubmit={_handleNewTodo}>
        <label>New todo <input ref={input => todoRef = input} /></label>
      </form>
      <ul>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default TodoList;