import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
    return (
        <header
            className="d-flex align-items-center justify-content-between px-4 py-2 bg-dark text-white"
            style={{ height: "70px" }}
        >

            <div>
                <h5 className="fw-bold mb-0" style={{ marginLeft: "-100px" }}>
                    <i className="bi bi-bar-chart-fill me-2 text-primary"></i>

                </h5>

            </div>


            <div className="d-flex align-items-center gap-4">
                <div className="text-center">
                    <i className="bi bi-inbox fs-5 d-block"></i>
                    <small>Inbox</small>
                </div>
                <div className="text-center">
                    <i className="bi bi-pencil-square fs-5 d-block"></i>
                    <small>Compose</small>
                </div>
                <div className="text-center">
                    <i className="bi bi-geo-alt fs-5 d-block"></i>
                    <small>Maps</small>
                </div>
                <div className="text-center">
                    <i className="bi bi-images fs-5 d-block"></i>
                    <small>Gallery</small>
                </div>
            </div>


            <div className="d-flex align-items-center gap-4">

                <div
                    className="d-flex align-items-center justify-content-center border border-2 border-black rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                >
                    <i className="bi bi-chat-dots text-white fs-6"></i>
                </div>


                <div
                    className="d-flex align-items-center justify-content-center border border-2 border-black rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                >
                    <i className="bi bi-bell text-white fs-6"></i>
                </div>


                <div
                    className="d-flex align-items-center justify-content-center border border-2 border-black rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                >
                    <i className="bi bi-gear text-white fs-6"></i>
                </div>


                <div className="d-flex align-items-center gap-2">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User Avatar"
                        className="rounded-circle border border-light"
                    />
                </div>
            </div>
        </header>
    );
}
