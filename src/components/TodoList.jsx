// import React, { useEffect, useState } from 'react';
// import todoStore, { readTodo, deleteAllTodo, reorderTodo } from '../store/todos';
// import TodoItem from './TodoItem';

// const SECOND_TO_MS = 100;

// const TodoList = () => {
//   const [todoItems, setTodoItems] = useState([]);

//   useEffect(() => {
//     readTodo();
//     todoStore.subscribe('todoItems', () => {
//       setTodoItems([...todoStore.state.todoItems]);
//     });
//   }, []);

//   const handleShowAllClick = () => {
//     // '전체보기' 버튼 클릭 시의 처리 로직
//     // 여기에 필요한 로직을 구현
//   };

//   const handleActiveClick = () => {
//     // '진행중' 버튼 클릭 시의 처리 로직
//     // 여기에 필요한 로직을 구현
//   };

//   const handleCompletedClick = () => {
//     // '완료' 버튼 클릭 시의 처리 로직
//     // 여기에 필요한 로직을 구현
//   };

//   const handleDeleteAllClick = () => {
//     // '완료 삭제' 버튼 클릭 시의 처리 로직
//     const todoIdsToDelete = todoStore.state.todoItems
//       .filter(status => status.done)
//       .map(todoId => todoId.id);
//     deleteAllTodo(todoIdsToDelete);
//   };

//   const handleSortableMouseUp = () => {
//     // 항목 순서가 바뀔 때의 처리 로직
//     setTimeout(() => {
//       const todoIds = document.querySelectorAll('.todo-id');
//       const arr = Array.from(todoIds).map(todoId => todoId.value);
//       reorderTodo(arr);
//     }, SECOND_TO_MS);
//   };

//   return (
//     <div className="todo-list">
//       <div className="filter">
//         <button type="button" className="show-all" onClick={handleShowAllClick}>
//           전체보기
//         </button>
//         <button type="button" className="active" onClick={handleActiveClick}>
//           진행중
//         </button>
//         <button type="button" className="completed" onClick={handleCompletedClick}>
//           완료
//         </button>
//         <button type="button" className="delete-all" onClick={handleDeleteAllClick}>
//           완료 삭제
//         </button>
//       </div>
//       <div className="todo-item sortable" onMouseUp={handleSortableMouseUp}>
//         {todoStore.state.todoItems.map((todoItem, index) => (
//           <TodoItem key={index} todoItem={todoItem} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoList;
