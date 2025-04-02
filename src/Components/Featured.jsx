export default function FeaturedResources() {
    const resources = [
      { title: "React Basics", category: "Web Development" },
      { title: "Graphic Design Fundamentals", category: "Design" },
      { title: "Marketing Strategies", category: "Marketing" },
      { title: "Data Analysis with Python", category: "Data Science" }
    ];
  
    return (
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <p className="text-gray-500">{resource.category}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  