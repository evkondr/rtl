import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../store/todoSlice'


const List = () => {
  const { todos } = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [])
  return (
    <ul>
      {todos.map((item) => (<li>{item.title}</li>))}
    </ul>
  )
}

export default List