import React from 'react'

function Button({ type = "button", isLoading = 'flase', children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isLoading}
            className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors"

        >
            {
                isLoading ? 'Loading...' : children
            }

        </button>
    )
}

export default Button
