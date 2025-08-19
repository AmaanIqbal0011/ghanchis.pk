'use client'

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Spinner */}
            <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-gray-300 border-t-red-600 animate-spin shadow-lg"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 opacity-30 blur-xl animate-pulse"></div>
            </div>
            
            {/* Branding text */}
            <div className="ml-6 flex flex-col items-start">
                <h1 className="text-4xl font-extrabold tracking-tight">
                    <span className="text-black">ghanchi</span>
                    <span className="text-red-600">'s.pk</span>
                </h1>
                <p className="mt-2 text-lg font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                    The Smart Collection
                </p>
            </div>
        </div>
    )
}

export default Loader;
