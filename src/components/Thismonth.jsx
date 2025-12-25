import React from 'react';

export default function ThisMonth() {
    const stats = [
        { label: 'Sales', value: 52, color: 'bg-danger' },
        { label: 'Projects', value: 80, color: 'bg-success' },
        { label: 'Visitors', value: 25, color: 'bg-warning' },
        { label: 'New Users', value: 93, color: 'bg-info' },
        { label: 'Revenue', value: 50, color: 'bg-primary' },
        { label: 'Total Sold', value: 40, color: 'bg-secondary' },
    ];

    return (
        <div className="card h-100" style={{ marginLeft: "-70px", width: "420px" }}>
            <div className="card-header">
                <h5 className="card-title mb-0">This Month</h5>
            </div>
            <div className="card-boddy" style={{ marginLeft: "20px", paddingTop: "1px" }}>
                <hr />
                {stats.map((item, idx) => (
                    <div key={idx} className="mb-3">
                        <div className="d-flex justify-content-between">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                            <div
                                className={`progress-bar ${item.color}`}
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
