export default function TaskCard({ task, onStatusChange, onDelete }) {
  const handleChange = (e) => {
    onStatusChange(task._id, e.target.value)
  }

  return (
    <div className="bg-cyan-300 p-3 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h4 className="font-medium text-blue-950">{task.title}</h4>
        <p className="text-sm text-black">{task.status}</p>
      </div>
      <div className="flex items-center gap-3">
        <select
          value={task.status}
          onChange={handleChange}
          className="border text-black rounded-md p-1"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 text-sm hover:bg-red-100 hover:rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
