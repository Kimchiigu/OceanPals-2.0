import React from "react";
import { Link } from "react-router-dom";

interface EventGuideProps {
    eventId: string;
}

const EventGuide: React.FC<EventGuideProps> = ({ eventId }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 text-left">
            <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Guide
            </a>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">OceanPals Guide</h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Here are the guides to finish the event</p>
            <ol className="mb-5 max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li>Ensure that <span className="font-semibold text-gray-900 dark:text-white">you are on the correct beach cleaning event</span>. If not, then the points will not be sanctioned to your account</li>
                <li>If the event is correct, then you may proceed to the next step</li>
                <li>There are <span className="font-semibold text-gray-900 dark:text-white">4 dashboard cards</span> that you need to pay attention:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                        <li><span className="font-semibold text-gray-900 dark:text-white">Event Description</span>: Lets you know what current event you are in</li>
                        <li><span className="font-semibold text-gray-900 dark:text-white">OceanPals Guide</span>: Full guide for you to success the event</li>
                        <li><span className="font-semibold text-gray-900 dark:text-white">My Task</span>: List of task that you need to do to get full points</li>
                        <li><span className="font-semibold text-gray-900 dark:text-white">Team Performance</span>: See other users who participate in the current event</li>
                    </ul>
                </li>
                <li>Don't forget to <span className="font-semibold text-gray-900 dark:text-white">finish the task that was given</span> to get full points</li>
                <li>You could <span className="font-semibold text-gray-900 dark:text-white">join the OceanPals forum</span> to coordinate with other users</li>
                <li>If you have any questions, <span className="font-semibold text-gray-900 dark:text-white">don't hesitate to ask for help</span> from the OceanPals admin</li>
                <li>Lastly, have <span className="font-semibold text-gray-900 dark:text-white">fun</span> and become one with nature!</li>
            </ol>
            <Link to={`/events/forum/${eventId}`} className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Go to forum
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    )
}

export default EventGuide;
