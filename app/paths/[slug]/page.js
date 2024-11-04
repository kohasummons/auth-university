export default function LearningPathPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href="/">← Back</a>
          </div>

          <h1 className="text-2xl font-bold mb-6">Get started with Auth</h1>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-semibold mb-4">Details</h2>
            <div className="space-y-4">
              <div>
                <div className="text-gray-600">Duration:</div>
                <div>3 hrs</div>
              </div>
              <div>
                <div className="text-gray-600">Roles:</div>
                <div>Developer</div>
              </div>
              <div>
                <div className="text-gray-600">Level:</div>
                <div>Beginner</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="font-semibold mb-2">Description:</h2>
              <p className="text-gray-600">
                This Get started with Auth learning path is designed for developers who are new to authentication. 
                Whether you're ready to start implementing auth in production or just interested in learning, 
                we'll guide you through the process of setting up authentication and arm you with the basic tools 
                that every developer needs to start building right away.
              </p>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Learning Experience:</h2>
              <p className="text-gray-600">
                This learning path offers just enough information to get you started and points you to more details 
                when you're ready to dive deeper. Each course in the learning path is roughly 10 mins with a short 
                video tutorial, a written lab guide with linked resources, and occasionally, a short quiz to check 
                your understanding.
              </p>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Platform:</h2>
              <p className="text-gray-600">
                We'll focus our examples and labs on modern authentication patterns, but these foundational skills 
                can be applied to any platform or framework. We'll point you to differences and share documentation 
                for other platforms where applicable.
              </p>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Pre-Requisites:</h2>
              <p className="text-gray-600">
                We'll assume you have a background in development and basic computer science.
              </p>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Learning Objectives:</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Configure and connect authentication to your application</li>
                <li>Identify common authentication patterns and how to implement them</li>
                <li>Describe common authentication use cases</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Instructors:</h2>
              <p className="text-gray-600">
                John Doe - Senior Developer Advocate<br />
                Jane Smith - Senior Developer Advocate
              </p>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Contents</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Start</button>
            </div>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-sm text-purple-600">Course</div>
                    <div className="text-sm font-medium">{course}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const courses = [
  "Introduction to Authentication",
  "Basic Authentication Patterns",
  "OAuth and OpenID Connect",
  "JWT Authentication",
  "Session Management",
  "Multi-factor Authentication",
  "Authorization Basics",
  "Security Best Practices"
]; 