import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    YAxis,
    CartesianGrid,
} from "recharts";

export default function ServerLoad() {
    const serverStats = [
        { label: "Total Usage", value: "72GB", color: "#f76c6c" },
        { label: "Total Space", value: "600GB", color: "#00cfa1" },
        { label: "CPU", value: "57%", color: "#3aa0ff" },
    ];


    const chartData = [
        { value: 25 },
        { value: 40 },
        { value: 35 },
        { value: 55 },
        { value: 45 },
        { value: 60 },
        { value: 60 },
        { value: 50 },
        { value: 30 },
        { value: 50 },
        { value: 45 },
        { value: 55 },
    ];

    return (
        <div
            className="card"
            style={{
                borderRadius: 6,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                background: "#fff",
                width: "100%",
                maxWidth: 380,
                marginTop: 2,
            }}
        >
            <div
                style={{
                    padding: "10px 12px",
                    borderBottom: "1px solid #eee",
                    fontWeight: 600,
                    textAlign: "left",
                    fontSize: 14,

                }}
            >

            </div>

            <div style={{ padding: 12 }}>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 8,
                        marginBottom: 6,
                        alignItems: "center",
                        fontSize: 13,
                    }}
                >
                    {serverStats.map((s, i) => (
                        <div key={i} style={{ textAlign: "left", minWidth: 0 }}>
                            <div style={{ color: "#9aa0a6", fontSize: 12 }}>{s.label}</div>
                            <div style={{ color: s.color, fontWeight: 700, marginTop: 4 }}>
                                {s.value}
                            </div>
                        </div>
                    ))}
                </div>


                <div style={{ width: "100%", height: 290 }}>
                    <ResponsiveContainer>
                        <LineChart
                            data={chartData}
                            margin={{ top: 0, right: 10, left: 10, bottom: 6 }}
                        >

                            <YAxis
                                type="number"
                                domain={[0, 100]}
                                ticks={[0, 20, 40, 60, 80, 100]}
                                allowDecimals={false}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 11, fill: "#9aa0a6" }}
                                width={30}
                                dx={-8}
                            />


                            <CartesianGrid vertical={false} stroke="transparent" />

                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#13bfa6"
                                strokeWidth={1}
                                dot={false}
                                isAnimationActive={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
