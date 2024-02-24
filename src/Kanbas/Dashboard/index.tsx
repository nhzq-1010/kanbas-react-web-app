import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaPenSquare, FaBell } from "react-icons/fa";
import "./index.css"


function Dashboard() {
  return (
    <div className="p-4 dashboard-topic">
      <h1 className="topic">Dashboard</h1>              <hr />
      <h2 className="topic">Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} />

                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>

                  <Link style={{ textDecoration: "none" }} to={`/Kanbas/Courses/${course._id}/Home`}>
                    <p className="card-text grey-text-larger">{course.name}</p>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to={`/Kanbas/Courses/${course._id}/Home`}>
                    <p className="card-text grey-text-smaller">{course._id}.{course.number}.{course.startDate} </p>
                  </Link>

                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="icon" >
                    <FaPenSquare className="fs-0" /> </Link>

                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="icon">
                    <FaBell className="fs-0" /> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;