import { Link } from "react-router-dom"

export const GoTo = () => {
    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <Link to={'/signup'}>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Go to the signup page</button>
            </Link> 

        </div>
        

    </div> 
}