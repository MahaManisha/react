import {useState} from "react";
function App(){
    const [count, setCount] = useState(0);
    return(
        <div style={{textAlign: "center", marginTop: "2rem"}}>
            <h1>Hello from React Demo</h1>
            <p>cCount:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}