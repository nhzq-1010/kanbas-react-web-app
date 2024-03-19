import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";


function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const { pathname } =useLocation();
  const course = courses.find((course) => course._id === courseId);
  const listPos = ['Modules', 'Piazza' ,'Assignments','Grades']
  const atModule = (pathname.includes("Modules")) ? " > Modules" : "" 
  const atHome = (pathname.includes("Home")) ? " > Home" : "" 
  const atAssign = (pathname.includes("Assignments")) ? " > Assignments" : "" 
  const atGrade = (pathname.includes("Grades")) ? " > Grades" : "" 
  const atPia = (pathname.includes("Piazza")) ? " > Piazza" : "" 



  return (
    <>
      <div className="Navbar-Style">
      <HiMiniBars3 /> Courses {course?.name} {atModule}{atHome}{atAssign}{atGrade}{atPia}
      </div>
      <hr />
      <div>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "220px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </>
  );
}
export default Courses;