import { Cloud, Settings, Shield, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Designing scalable and resilient AWS cloud solutions"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps Automation",
      description: "Implementing CI/CD pipelines and infrastructure as code"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Ensuring secure deployments and compliance standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing infrastructure costs and application performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image for About Section */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Sudharshan Mutalik - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
            </div>
          </div>

          <div className="lg:order-1 space-y-6">
          <p className="text-lg text-gray-300 text-left">
            I'm a passionate DevOps Engineer & AWS Cloud Engineer with over 1 year of experience 
            designing and implementing scalable cloud infrastructure. My journey in technology 
            started with system administration and evolved into a deep expertise in cloud 
            architecture, automation, and DevOps practices.
          </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in AWS cloud services, with expertise in EC2, EKS, Lambda, RDS, 
              and CloudFormation. Beyond infrastructure, I'm passionate about automation, 
              monitoring, and creating robust CI/CD pipelines that enable teams to deploy 
              with confidence and speed.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not optimizing infrastructure, you'll find me exploring new AWS services, 
              contributing to DevOps communities, or sharing my knowledge through technical 
              writing and mentoring junior engineers.
            </p>
          </div>

          <div className="lg:order-3 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-white mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;