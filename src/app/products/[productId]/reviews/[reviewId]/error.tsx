"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void; }) {
    return (
        <>
            <div className="text-center font-bold text-red-600">
                {error.message}
            </div>
            <div className="text-center font-bold">
                <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Try Again</button>
            </div>
        </>
    )
}
