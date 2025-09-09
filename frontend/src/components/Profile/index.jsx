import React from 'react';
import './styles.css';

function Profile() {
    // Example user data; replace with actual data from your backend or context
    const user = {
        name: 'Himanshu Rajpoot',
        email: 'himanshu@gmail.com',
        role: 'Alumni',
        bio: 'Software Engineer, passionate about connecting alumni.',
        graduationYear: '2018',
        department: 'Computer Science'
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded shadow">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">My Profile</h2>
            <div className="mb-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-700 mb-4">
                    {user.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full mt-2">{user.role}</span>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold text-blue-600">Bio</h4>
                <p className="text-gray-700">{user.bio}</p>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold text-blue-600">Graduation Year</h4>
                <p className="text-gray-700">{user.graduationYear}</p>
            </div>
            <div className="mb-4">
                <h4 className="font-semibold text-blue-600">Department</h4>
                <p className="text-gray-700">{user.department}</p>
            </div>
            {/* Additional Alumni Content */}
            <section className="mt-8 bg-blue-50 p-6 rounded">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Welcome to Your Alumni Profile!</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                    <li>Update your profile to let others know about your journey.</li>
                    <li>Connect with fellow alumni and expand your professional network.</li>
                    <li>Share your achievements and inspire current students.</li>
                    <li>Participate in alumni events, reunions, and mentorship programs.</li>
                </ul>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-semibold text-blue-600 mb-2">Recent Activities</h4>
                        <p>See your latest posts, event participations, and connections made in the alumni network.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-semibold text-green-600 mb-2">Mentorship Opportunities</h4>
                        <p>Become a mentor or find one to help guide your career and personal growth.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-semibold text-purple-600 mb-2">Upcoming Events</h4>
                        <p>Stay informed about reunions, webinars, and workshops tailored for alumni.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h4 className="font-semibold text-pink-600 mb-2">Community Forums</h4>
                        <p>Join discussions, ask questions, and share advice with other alumni and students.</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <h4 className="font-bold text-blue-700 mb-2">Give Back</h4>
                    <p className="text-gray-700 mb-2">
                        Support your alma mater by volunteering, donating, or sharing your expertise with current students.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Become a Mentor
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Profile;