import React from 'react'
import { ProgressBar } from 'primereact/progressbar';

const Loading = () => {
    return (
        <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ProgressBar mode="indeterminate" style={{ height: '6px', width: '50%' }}></ProgressBar>
        </div>
    )
}

export default Loading
