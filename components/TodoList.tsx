'use client'

import { useState } from 'react'
import { Plus, Trash2, Edit, Save, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [editId, setEditId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const startEdit = (todo: Todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = () => {
    if (editText.trim() && editId) {
      setTodos(todos.map(todo =>
        todo.id === editId ? { ...todo, text: editText.trim() } : todo
      ))
      setEditId(null)
      setEditText('')
    }
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText('')
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6 md:p-10">
        <div className="flex gap-2 mb-6">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="flex-grow"
          />
          <Button onClick={addTodo} className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-3">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              
              {editId === todo.id ? (
                <div className="flex-grow flex gap-2">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                    className="flex-grow"
                  />
                  <Button onClick={saveEdit} size="sm" variant="outline" className="text-emerald-600">
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button onClick={cancelEdit} size="sm" variant="outline" className="text-gray-500">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.text}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => startEdit(todo)}
                      size="sm"
                      variant="outline"
                      className="text-blue-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => deleteTodo(todo.id)}
                      size="sm"
                      variant="outline"
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
          
          {todos.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No tasks yet. Add your first task above!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

