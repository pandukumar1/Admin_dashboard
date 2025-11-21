
import React from 'react';


export default function StatCard({ colorClass, icon, title, value }) {
    return (
        <div className=" my-stat-card">
            <div className={`card stat-card ${colorClass}`}>
                <div className="card-body d-flex align-items-center">
                    \
                    <div className="icon-circle">
                        <i className={`bi ${icon}`}></i>
                    </div>


                    <div className="two">
                        <div className="text-white small">{title}</div>
                        <div className="h4 text-white mb-0">{value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

