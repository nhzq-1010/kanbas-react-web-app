import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      {
        <>
          <button className="button-gray">
            Collapse All
          </button>
          <button className="button-gray">
            View Progress
          </button>

          <button className="button-gray" > <FaCheckCircle className="text-success" />
            Publish All <FaCaretDown className="fs-0" /></button>
          <button className="button-red">
            + Module
          </button>
          <button className="button-gray" > <FaEllipsisV className="me" />
          </button>
        </>
      }
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <input value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
            <button className="btn btn-danger float-end"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add</button>
            <button className="btn btn-primary float-end"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>

          </div>

        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}

                <button className="btn btn-success float-end"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className="btn btn-danger float-end"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>


                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>

              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;