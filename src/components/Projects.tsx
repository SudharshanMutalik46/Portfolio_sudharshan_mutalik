import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AWS EKS Cluster with CI/CD and Observability",
      description: "Designed and implemented a secure, production-ready Kubernetes infrastructure with CI/CD using Jenkins and ArgoCD (GitOps). Provisioned all resources using Terraform, with observability via the Kube-Prometheus stack and centralized logging through ELK. Integrated Alertmanager with Slack for real-time alerts. Enabled TLS/SSL with ACM, domain routing via Route 53, and deployed a private EKS cluster with bastion host access—exposing services securely through ingress without port forwarding.",
      image: "/diagram-export.JPG",
      technologies: ["AWS", "Terraform", "EKS", "Jenkins", "ArgoCD", "Route 53", "Prometheus", "Helm", "ELK Stack", "Bastion Host" ],
      github: "https://github.com/SudharshanMutalik46/E-Commerce_Website",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Automated EKS Cluster Setup with Terraform & GitHub Actions",
      description: "Provision and automate a production-ready Amazon EKS cluster using Terraform and GitHub Actions. This repository demonstrates Infrastructure as Code (IaC) best practices and CI/CD automation to streamline Kubernetes deployments. Follows a secure and scalable setup ideal for real-world cloud-native workloads.",
      image: "/Presentation1.gif",
      technologies: ["Amazon EKS ", "Terraform", "Docker", "GitHub Actions ", "IAM Roles & Policies"],
      github: "https://github.com/SudharshanMutalik46/EKS-Terraform-Jenkins-project",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Reddit Clone App on Kubernetes with Ingress",
      description: "This project demonstrates how to deploy a Reddit clone app on Kubernetes with Ingress and expose it to the world using Minikube as the cluster. Below is an overview of the architecture of this Reddit Clone App running on Kubernetes with Ingress.",
      image: "/porject.png",
      technologies: ["Docker", "Prometheus", "Kubernetes", " Ingress", " Ingress", "AWS"],
      github: "https://github.com/SudharshanMutalik46/reddit-clone-k8s-ingress?tab=readme-ov-file",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Serverless Microservices Architecture",
      description: "This repository demonstrates an end-to-end DevOps implementation for a multi-microservice E-Commerce application, following real-time industry practices. The project covers complete infrastructure setup on AWS, application containerization with Docker, orchestration using Kubernetes, infrastructure provisioning with Terraform, and automated deployments via GitHub Actions and Argo CD (GitOps). It also includes custom domain integration with Route 53, and concludes with resume preparation tips and interview Q&A based on hands-on tasks.",
      image: "/project_1.png",
      technologies: ["AWS ", "Terraform ", "Docker & Docker Compose", "Kubernetes", "Argo CD", "GitHub Actions", "Route 53", "VPC"],
      github: "https://github.com/SudharshanMutalik46/ultimate-devops-project-aws",
      live: "https://example.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles size={14} />
                  Featured
                </div>
              )}
              
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className={`p-8 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;