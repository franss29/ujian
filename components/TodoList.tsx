'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit, Save, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'

interface Todo {
  id: number
  task: string // Ganti `text` menjadi `task` sesuai dengan API response
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [editId, setEditId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  // Fetch tasks from the database
  const fetchTodos = async () => {
    const response = await fetch('http://localhost/pweb_ujian_api/tasks.php', {
      method: 'GET',
    })
    const data = await response.json()
    setTodos(data)  // Set tasks to the latest list from the API
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // Add new task to the database
  const addTodo = async () => {
    if (input.trim()) {
      const response = await fetch('http://localhost/pweb_ujian_api/tasks.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `task=${input.trim()}`,
      })
      const data = await response.json()
      fetchTodos() // Refresh the tasks list
      setInput('') // Clear input
    }
  }

  // Toggle task completion status
  const toggleTodo = async (id: number, completed: boolean) => {
    const response = await fetch('http://localhost/pweb_ujian_api/tasks.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, completed: !completed }),
    })
    const result = await response.json()
    if (result.message) {
      fetchTodos() // Refresh the tasks
    }
  }

  // Delete a task from the database
  const deleteTodo = async (id: number) => {
    const response = await fetch('http://localhost/pweb_ujian_api/tasks.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    const result = await response.json()
    if (result.message) {
      fetchTodos() // Refresh the tasks
    }
  }

  const startEdit = (todo: Todo) => {
    setEditId(todo.id)
    setEditText(todo.task) // Use correct property `task`
  }

  const saveEdit = async () => {
    if (editText.trim() && editId) {
      const response = await fetch('http://localhost/pweb_ujian_api/tasks.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editId, task: editText.trim() }), // Kirim teks tugas ke API
      });
      const result = await response.json();
      if (result.message) {
        setEditId(null);
        setEditText('');
        fetchTodos(); // Refresh daftar tugas setelah berhasil disimpan
      } else {
        console.error(result.error); // Log error jika API gagal
      }
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
            className="flex-grow bg-white text-black border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
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
                onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
              />
              
              {editId === todo.id ? (
                <div className="flex-grow flex gap-2">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                    className="flex-grow bg-white text-black border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
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
                    {todo.task} {/* Ensure to use correct property */}
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
