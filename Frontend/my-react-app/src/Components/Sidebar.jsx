import react from "react";
//import axios from "axios";



function Sidebar({ Courses, onSelectCourse }) {
  return (
    <aside className="w-56 bg-red-400 h-screen px-4 py-6 ">
      <h3 className="text-lg font-bold mb-4">Courses</h3>
      <ul>
        {Courses.map((course) => (
          <li key={course.id}>
            <button
              onClick={() => onSelectCourse(course)}
              className="block text-left w-full px-3 py-2 mb-1 rounded hover:bg-blue-100"
            >
              {course.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
