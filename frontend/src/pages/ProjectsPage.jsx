import { useEffect, useState } from 'react'
import { api } from '../api/api'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const fetchProjects = async () => {
    const res = await api.get('/projects')
    setProjects(res.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const addProject = async (e) => {
    e.preventDefault()
    await api.post('/projects', { name, description })
    setName('')
    setDescription('')
    fetchProjects()
  }

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`)
    fetchProjects()
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mt-4 mb-4">Projects</h1>
      <form onSubmit={addProject} className="mb-8 flex flex-col justify-center items-center gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          required
          className="border p-2 w-2xl rounded-md flex-1"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-2xl rounded-md flex-1"
        />
        <button type="submit" className="bg-teal-500 text-white w-2xl px-4 py-2 rounded-md">
          Add
        </button>
      </form>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} onDelete={deleteProject} />
        ))}
      </div>
    </div>
  )
}
