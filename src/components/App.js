import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <Footer />
  </div>
)

export default App
