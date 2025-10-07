// src/pages/ProjectDetailsPage.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../api/api'
import TaskCard from '../components/TaskCard'

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const fetchProject = async () => {
    try {
      const res = await api.get(`/projects/${id}`)
      setProject(res.data)
    } catch (err) {
      console.error('fetchProject error', err)
    }
  }

  const fetchTasks = async () => {
    try {
      const res = await api.get(`/tasks/project/${id}`) 
      setTasks(res.data)
    } catch (err) {
      console.error('fetchTasks error', err)
    }
  }

  useEffect(() => {
    fetchProject()
    fetchTasks()
  }, [id])

  const addTask = async (e) => {
    e.preventDefault()
    if (!title) return
    try {
      await api.post(`/tasks/project/${id}`, { title, description: '' }) 
      setTitle('')
      fetchTasks()
    } catch (err) {
      console.error('addTask error', err)
      alert('Failed to add task. See console for details.')
    }
  }

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`)
      fetchTasks()
    } catch (err) {
      console.error('deleteTask error', err)
      alert('Failed to delete task.')
    }
  }

  
  const updateStatus = async (taskId, status) => {
    try {
      await api.patch(`/tasks/${taskId}`, { status })
      fetchTasks()
    } catch (err) {
      console.error('updateStatus error', err)
      alert('Failed to update task status.')
    }
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-teal-500 hover:underline">&larr; Back</Link>
      {project && (
        <>
          <h1 className="text-2xl font-bold mt-3">{project.name}</h1>
          <p className="text-gray-200 mb-4">{project.description}</p>
        </>
      )}

      <form onSubmit={addTask} className="mb-6 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          required
          className="border p-2 rounded-md flex-1"
        />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onStatusChange={(taskId, newStatusLabel) => {
              updateStatus(taskId, newStatusLabel)
            }}
          />
        ))}
      </div>
    </div>
  )
}
