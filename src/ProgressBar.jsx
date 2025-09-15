import { useState } from "react";

function ProgressBar () {
    const [tasks, setTasks] = useState([]);

    return (
        <section className="progress-bar-section">
            <div className="progress-bar">
                <div className="progress-bar-outside"> 
                    <div className="progress-bar-inside">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar;