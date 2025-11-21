
import React from 'react';

export default function Sidebar() {
    return (
        <aside className="sidebar bg-dark text-light d-flex flex-column position-fixed">
            <div className="sidebar-top p-3 d-flex align-items-center">
                <div>
                    <h5 className="mb-0" style={{ marginTop: "-60px", fontSize: "12px" }}>
                        <i className="bi bi-bar-chart-fill me-2 text-primary"></i>
                        ADMIRE ADMIN
                    </h5>
                </div>
                <div
                    className="avatar rounded-circle bg-secondary me-2"
                    style={{ marginLeft: "-110px", marginTop: "30px" }}
                ></div>
                <div>
                    <div className="h6 mb-0" style={{ fontSize: "12px", marginTop: "60px" }}>
                        Welcome Michael
                    </div>
                    <small className="text-muted">Admin</small>
                </div>
            </div>

            <div className="input-group input-group-sm" style={{ width: "150px", marginLeft: "20px" }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{
                        background: "white",
                        color: "white",
                        border: "none",
                    }}
                />
                <span className="input-group-text bg-primary border-0">
                    <i className="bi bi-search text-white"></i>
                </span>
            </div>

            <nav className="nav flex-column p-2">
                <a className="nav-link active text-light rounded" href="#" style={{ backgroundColor: "lightpink" }}>
                    <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-puzzle me-2"></i> Components <span className="float-end" style={{ marginLeft: "50px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-grid-1x2 me-2"></i> Widgets <span className="float-end" style={{ marginLeft: "75px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-grid-1x2 me-2"></i> Forms <span className="float-end" style={{ marginLeft: "85px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-table me-2"></i> Tables <span className="float-end" style={{ marginLeft: "85px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-bar-chart me-2"></i> Charts <span className="float-end" style={{ marginLeft: "85px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-person me-2"></i> Users <span className="float-end" style={{ marginLeft: "90px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-gear me-2"></i> Settings <span className="float-end" style={{ marginLeft: "78px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-calendar me-2"></i> Calendar <span className="float-end" style={{ marginLeft: "72px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-image me-2"></i> Gallery <span className="float-end" style={{ marginLeft: "83px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-envelope me-2"></i> Email <span className="float-end" style={{ marginLeft: "92px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-map me-2"></i> Maps <span className="float-end" style={{ marginLeft: "92px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-file-earmark-text me-2"></i> Pages <span className="float-end" style={{ marginLeft: "85px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-layout-text-sidebar me-2"></i> Layouts <span className="float-end" style={{ marginLeft: "75px" }}>&lt;</span>
                </a>
                <a className="nav-link text-light rounded" href="#">
                    <i className="bi bi-list-nested me-2"></i> Multi Level Menu <span className="float-end" style={{ marginLeft: "25px" }}>&lt;</span>
                </a>
            </nav>

            <div className="mt-auto p-3 small text-muted">© Admire Admin</div>
        </aside>
    );
}
