import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { FaPenSquare, FaBell } from "react-icons/fa";
import "./index.css"


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {


  return (
    <div className="p-4 dashboard-topic">
      <h1 className="topic">Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button className="btn btn-primary" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>


      <hr />
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
                    {course.name}

                    <button className="btn btn-success btn-sm float-end" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm float-end" onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                      Delete
                    </button>

                  </Link>


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