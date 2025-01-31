import { Shield, TrendingUp, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Planning",
    description: "Expert financial planning with a focus on security and growth"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Investment Strategy",
    description: "Customized investment strategies aligned with your goals"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Personal Approach",
    description: "Dedicated advisors providing personalized guidance"
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovative Solutions",
    description: "Modern financial solutions for today's challenges"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;