import React from 'react'
import ReactDOM from 'react-dom/client'

const Page: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">React + TypeScript + Tailwind 🎯</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Page />)
