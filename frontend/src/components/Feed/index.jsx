import React from 'react';
import './styles.css';

function Feed() {
    // Example feed data; replace with actual data from backend or context
    const posts = [
        {
            id: 1,
            author: 'Priya Sharma',
            date: '8 Sep 2025',
            content: 'Excited to announce my new role at Google! Thanks to the alumni network for all the support.',
            type: 'achievement'
        },
        {
            id: 2,
            author: 'Rahul Verma',
            date: '7 Sep 2025',
            content: 'Looking forward to the Annual Alumni Meet next week. Who else is joining?',
            type: 'event'
        },
        {
            id: 3,
            author: 'Alumni Office',
            date: '6 Sep 2025',
            content: 'Mentorship program applications are open! Become a mentor or find one to guide your journey.',
            type: 'announcement'
        },
        {
            id: 4,
            author: 'Sonal Gupta',
            date: '5 Sep 2025',
            content: 'Shared a new article on AI advancements in healthcare. Check it out in the resources section!',
            type: 'resource'
        },
        {
            id: 5,
            author: 'Alumni Office',
            date: '4 Sep 2025',
            content: 'Congratulations to our alumni who received the Distinguished Alumni Award this year!',
            type: 'achievement'
        },
        {
            id: 6,
            author: 'Vikram Singh',
            date: '3 Sep 2025',
            content: 'Hosting a webinar on career transitions for tech professionals. Register now!',
            type: 'event'
        }
    ];

    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Alumni Feed</h2>
            <ul className="space-y-6">
                {posts.map(post => (
                    <li key={post.id} className="bg-blue-50 p-4 rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">{post.author}</span>
                            <span className="text-gray-500 text-sm">{post.date}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{post.content}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            post.type === 'achievement' ? 'bg-green-100 text-green-700' :
                            post.type === 'event' ? 'bg-purple-100 text-purple-700' :
                            post.type === 'announcement' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-pink-100 text-pink-700'
                        }`}>
                            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Extra professional content */}
            <div className="mt-10 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded shadow">
                <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Stay Connected & Engaged</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li>Share your achievements, articles, and career updates with the alumni community.</li>
                    <li>Participate in upcoming webinars, workshops, and networking events.</li>
                    <li>Access exclusive resources and learning materials shared by alumni and faculty.</li>
                    <li>Find mentors, join discussion forums, and collaborate on projects.</li>
                    <li>Celebrate alumni success stories and get inspired for your own journey.</li>
                </ul>
                <div className="text-center">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Post an Update
                    </button>
                </div>
            </div>
            {/* Section: Where Our Alumni Work */}
            <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6 text-purple-700">Where Our Alumni Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example company cards */}
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/google-logo.png" alt="Google" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">Google</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹60 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: Software Engineer, Data Scientist</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/microsoft-logo.png" alt="Microsoft" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">Microsoft</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹55 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: Cloud Architect, Product Manager</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/amazon-logo.png" alt="Amazon" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">Amazon</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹50 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: SDE, Operations Manager</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/tcs-logo.png" alt="TCS" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">TCS</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹28 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: Analyst, Consultant</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/infosys-logo.png" alt="Infosys" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">Infosys</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹25 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: Developer, System Engineer</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded shadow flex flex-col items-center">
                        <img src="/images/accenture-logo.png" alt="Accenture" className="h-12 mb-2" />
                        <span className="font-semibold text-gray-700 text-lg">Accenture</span>
                        <span className="text-green-700 font-bold mt-2">Highest Package: ₹30 LPA</span>
                        <span className="text-gray-600 mt-1">Roles: Consultant, Project Lead</span>
                    </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                    Our alumni have secured top positions and impressive packages at leading companies worldwide!
                </p>
            </section>
            {/* Section: Upcoming Events & Webinars */}
            <section className="mt-12 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6 text-blue-700">Upcoming Events & Webinars</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
                        <h4 className="font-semibold text-purple-600 mb-2">Annual Alumni Meet 2025</h4>
                        <p className="text-gray-700 mb-2">Date: 20th September 2025</p>
                        <p className="text-gray-700 mb-2">Location: College Auditorium & Online</p>
                        <p className="text-gray-600 mb-4">Reconnect with classmates, network with professionals, and celebrate alumni achievements.</p>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                            Register Now
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
                        <h4 className="font-semibold text-blue-600 mb-2">Webinar: Career Transitions in Tech</h4>
                        <p className="text-gray-700 mb-2">Date: 5th October 2025</p>
                        <p className="text-gray-700 mb-2">Time: 6:00 PM IST</p>
                        <p className="text-gray-600 mb-4">Join industry experts and alumni for insights on switching roles and growing your tech career.</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Join Webinar
                        </button>
                    </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                    Stay tuned for more events and learning opportunities. Don’t miss out!
                </p>
            </section>
        </div>
    );
}

export default Feed;


