import React from 'react';

const Notes = () => {
    const notes = [
        "Send e-mails",
        "Sometimes on purpose",
        "It is a long established",
        "Contrary to popular belief",
        "Bootstrap4 admire admin",
        "Company status",
        "Sometime is special",
        "Meeting with CEO",
        // "Team out",
        // "Welcome to admire"
    ];

    return (
        <div className="card " style={{ height: "400px" }}>
            <div className="card-header">
                <h5 className="card-title mb-0">Notes</h5>
                <hr />
            </div>
            <div className="card-boddy p-2" style={{ marginTop: "-20px", marginLeft: "40px", borderLeft: "1px solid #000" }}>
                <ul className="list-group list-group-flush">
                    {notes.map((note, index) => (
                        <li key={index} className="list-group-item p-2">
                            {note}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notes;
