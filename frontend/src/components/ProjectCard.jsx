import { Link } from "react-router-dom";

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="absolute left-125 w-100">
      <div className="bg-violet-400 p-4 rounded-xl shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-200 mb-3">{project.description}</p>
        <div className="flex justify-between">
          <Link
            to={`/projects/${project._id}`}
            className="text-teal-600 hover:underline"
          >
            View
          </Link>
          <button
            onClick={() => onDelete(project._id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
