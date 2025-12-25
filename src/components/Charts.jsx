import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
export function LineChart({ data, options, id = 'lineChart', title = 'Server Load' }) {
    const ref = useRef();

    useEffect(() => {
        const ctx = ref.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });

        return () => chart.destroy();
    }, [data, options, id]);

    return (
        <div className="card h-100" style={{ width: "850px" }}>
            <div className="card-header">
                <h5 className="card-title mb-0">{title}</h5>
            </div>
            <div className="card-boddy p-2" >
                <canvas ref={ref} id={id} height="120"></canvas>
            </div>
        </div>
    );
}

export function PieChart({ data, options, id = 'pieChart' }) {
    const ref = useRef();

    useEffect(() => {
        if (!data || !ref.current) return;

        const ctx = ref.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'doughnut',
            data,
            options: {
                ...options,
                cutout: '70%',
                plugins: {
                    ...options?.plugins,
                    datalabels: {
                        color: '#000',
                        font: { weight: 'bold', size: 12 },

                        anchor: 'center',
                        align: 'end',
                        offset: -80,
                        formatter: (value, context) => {
                            const label = context.chart.data.labels[context.dataIndex];
                            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(0) + '%';
                            return `${label} (${percentage})`;
                        }
                    },
                    legend: { display: false }
                }
            },
            plugins: [ChartDataLabels]
        });

        return () => chart.destroy();
    }, [data, options]);

    return (
        <div className="card" style={{ maxWidth: '500px', margin: 'auto' }}>
            <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{ height: 400 }}
            >
                <canvas ref={ref} id={id}></canvas>
            </div>
        </div>
    );
}