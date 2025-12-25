import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ToDoList() {
    const tasks = [
        {
            id: 1,
            text: "Meeting with CEO",
            color: "primary",
            icon: "bi-person-workspace",
            done: false,
        },
        {
            id: 2,
            text: "Team Out",
            color: "info",
            icon: "bi-people-fill",
            done: false,
        },
        {
            id: 3,
            text: "Review on Sales",
            color: "danger",
            icon: "bi-bar-chart-line-fill",
            done: true,
        },
        {
            id: 4,
            text: "Analysis on Views",
            color: "warning",
            icon: "bi-graph-up-arrow",
            done: false,
        },
        {
            id: 5,
            text: "Seminar on Market",
            color: "success",
            icon: "bi-easel2-fill",
            done: true,
        },
    ];

    return (
        <div className="card" style={{ height: "400px", padding: "20px" }}>
            <div className="card-header fw-bold">To Do List</div>
            <hr />
            <div className="card-boddy p-3">
                {tasks.map((t) => (
                    <div
                        key={t.id}
                        className="d-flex align-items-center justify-content-between  py-2"
                    >

                        <div className="d-flex align-items-center gap-3 flex-grow-1">
                            <div
                                className={`border-start border-4 border-${t.color}`}
                                style={{ height: "20px" }}
                            ></div>

                            <i className={`bi ${t.icon} fs-5 text-${t.color}`}></i>

                            <span
                                className={`small fw-semibold ${t.done ? "text-muted text-decoration-line-through" : ""
                                    }`}
                            >
                                {t.text}
                            </span>
                        </div>


                        {!t.done && (
                            <div className="d-flex gap-2">
                                <i className="bi bi-pencil text-primary" role="button"></i>
                                <i className="bi bi-trash text-danger" role="button"></i>
                            </div>
                        )}
                    </div>
                ))}


                <div className="mt-3 d-flex align-items-center gap-2">
                    <select className="form-select form-select-sm w-auto" style={{ backgroundColor: "lightblue" }}>
                        <option>Color</option>
                        <option>Primary</option>
                        <option>Info</option>
                        <option>Danger</option>
                        <option>Warning</option>
                        <option>Success</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Write and hit enter"
                        className="form-control form-control-sm"
                    />
                </div>
            </div>
        </div>
    );
}
