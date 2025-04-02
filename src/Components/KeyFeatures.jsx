export default function KeyFeatures() {
    const features = [
      { icon: "📚", title: "100% Free Resources" },
      { icon: "🌎", title: "Learn from Anywhere" },
      { icon: "🚀", title: "Community-Powered" }
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  