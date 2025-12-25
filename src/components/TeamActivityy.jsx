import React from 'react';

export default function TeamActivity() {
    const people = [
        { name: 'Celeste Foxx', text: 'Lorem ipsum is simply dummy text of printing ppppppppppp', time: '1m ago', icon: 'bi-person-circle' },
        { name: 'Mildred Yanez', text: 'Lorem ipsum is simply dummy text vvvvvvvvvvvvvvvvvvv', time: '2m ago', icon: 'bi-person-badge' },
        { name: 'Thomas Rogers', text: 'Lorem ipsum is simply dummy text kkkkkkkkkkkkkkkkkkk', time: '3m ago', icon: 'bi-person-check' }
    ];

    return (
        <div className="card " style={{ height: "400px", fontSize: "20px" }}>
            <div className="card-header">Team Activities</div>
            <hr />
            <div className="car p-2">
                {people.map((p, i) => (
                    <div key={i} className="d-flex align-items-start gap-2 mb-2">
                        <div className="avatar-sm bg-secondary rounded-circle">  <i className={`bi ${p.icon} text-white fs-4`}></i></div>
                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <span className="fw-bold small">{p.name}</span>
                                <small className="text-muted">{p.time}</small>
                            </div>
                            <div className="small text-muted" style={{ padding: "10px" }}>{p.text}</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
