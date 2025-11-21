import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const CounterContext = createContext();

export function CounterProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        // 2️⃣ Provide the context value
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
}

// 3️⃣ Use the context anywhere
export function CounterDisplay() {
    const { count } = useContext(CounterContext);
    return <h1>{count}</h1>;
}

export function CounterButton() {
    const { setCount } = useContext(CounterContext);
    return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}
