"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="text-center font-bold text-red-600">
            {error.message}
        </div>
    )
}
