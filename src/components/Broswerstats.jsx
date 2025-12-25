import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function BrowserStats() {
    const browsers = [
        { name: 'Google Chrome', value: 32, color: 'blue', icon: 'bi bi-browser-chrome', trend: 'up' },
        { name: 'Firefox', value: 51, color: 'pink', icon: 'bi bi-browser-firefox', trend: 'down' },
        { name: 'Safari', value: 10, color: 'blue', icon: 'bi bi-browser-safari', trend: 'up' },
        { name: 'Opera', value: 32, color: 'blue', icon: 'bi bi-alexa', trend: 'up' },
        { name: 'IE', value: 15, color: 'pink', icon: 'bi bi-arrow-clockwise', trend: 'down' },
        { name: 'mobile', value: 15, color: 'blue', icon: 'bi-phone', trend: 'up' },
        { name: 'others', value: 15, color: 'blue', icon: 'bi bi-people-fill', trend: 'up' },
    ];


    return (
        <div className="card h-100" style={{ padding: 0, width: '100%' }}>

            <div className="card-header fw-bold text-start" style={{ fontSize: '24px' }}>
                Browsers Stats
            </div>


            <div className="card-body p-3">
                {browsers.map((item, idx) => (
                    <div key={idx} className="browser-item d-flex justify-content-between align-items-center">

                        <div className="d-flex align-items-center">
                            {item.icon && (
                                <i
                                    className={`bi ${item.icon} me-2`}

                                ></i>
                            )}
                            <span>{item.name}</span>
                        </div>


                        <span style={{ color: item.color, fontWeight: 'bold' }}>{item.value}%
                            {item.trend === 'up' && <i className="bi bi-arrow-up ms-1"></i>}
                            {item.trend === 'down' && <i className="bi bi-arrow-down ms-1"></i>}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

}
