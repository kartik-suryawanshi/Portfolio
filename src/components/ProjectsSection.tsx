import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ChevronRight, Sparkles, Globe, Cpu, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Air Pollution Monitoring System',
    subtitle: 'AI/ML Pipeline for Environmental Analysis',
    description: 'An end-to-end machine learning pipeline to estimate surface-level particulate matter (PM) concentrations across India using satellite observations and ground-based measurements.',
    problem: 'Manual air quality monitoring is sparse and expensive, leaving vast regions without real-time pollution data critical for public health decisions.',
    solution: 'Developed an AI/ML pipeline that integrates satellite-derived Aerosol Optical Depth (AOD) data with ground measurements to predict PM values across unmeasured regions.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'MERRA-2 Data'],
    features: [
      'Integration of INSAT-3D/3DR/3DS satellite data',
      'Ground-based CPCB PM measurements correlation',
      'Random Forest regression for PM prediction',
      'High-resolution spatial distribution maps',
    ],
    outcomes: [
      'Achieved accurate PM estimation validated against CPCB stations',
      'Generated actionable environmental monitoring insights',
      'Demonstrated real-world ML application in public health',
    ],
    icon: Globe,
    color: 'hsl(175 85% 50%)',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'EduConnect',
    subtitle: 'Peer Learning & Earning Platform',
    description: 'A full-stack web application enabling students to act as both learners and educators, democratizing knowledge sharing and creating earning opportunities.',
    problem: 'Students often struggle to find affordable, peer-level explanations for concepts while talented students lack platforms to monetize their knowledge.',
    solution: 'Built a platform where students can seamlessly switch between learning and teaching roles, with integrated course management and peer-to-peer knowledge sharing.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Dual-role system (learner/educator)',
      'Intuitive dashboard for role switching',
      'Course listing and management',
      'Peer-to-peer knowledge marketplace',
    ],
    outcomes: [
      'Enabled skill democratization among students',
      'Created student-driven monetization opportunities',
      'Built intuitive UX for complex role management',
    ],
    icon: Users,
    color: 'hsl(38 95% 55%)',
    github: 'https://github.com/kartik-suryawanshi/StudentPortal',
    demo: '#',
  },
  {
    id: 3,
    title: 'Smart Complaint Management',
    subtitle: 'SCMS - Digital Civic Platform',
    description: 'A digital grievance redressal platform connecting citizens with municipal authorities for transparent, accountable complaint resolution.',
    problem: 'Traditional complaint systems lack transparency and accountability, leading to delayed resolutions and citizen distrust in civic services.',
    solution: 'Designed a platform that assigns each complaint to designated officials, connects authorities with verified vendors, and provides real-time tracking.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Supabase'],
    features: [
      'Geolocation-based nearest corporation routing',
      'Personalized official assignment system',
      'Verified vendor/contractor network',
      'Real-time complaint status tracking',
    ],
    outcomes: [
      'Bridged gap between citizens, officials, and service providers',
      'Promoted trust and transparency in civic services',
      'Hackathon project demonstrating rapid development skills',
    ],
    icon: Cpu,
    color: 'hsl(142 70% 45%)',
    github: 'https://github.com/kartik-suryawanshi/Hack-a-Bit',
    demo: '#',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'hsl(38 95% 55% / 0.05)' }} />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case studies showcasing problem-solving, technical depth, and end-to-end delivery.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Project Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-sm text-muted-foreground">
                      0{project.id}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                    <div 
                      className="p-2 rounded-lg"
                      style={{ background: `${project.color}20` }}
                    >
                      <project.icon className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-primary mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <span className="font-mono text-xs text-destructive uppercase tracking-wider">Problem</span>
                      <p className="text-sm text-foreground/80 mt-1">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                      <span className="font-mono text-xs text-success uppercase tracking-wider">Solution</span>
                      <p className="text-sm text-foreground/80 mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground font-mono text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Project Card Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden border border-border bg-card group-hover:border-primary/50 transition-colors">
                    {/* Card Header */}
                    <div className="px-6 py-4 border-b border-border bg-muted/30">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-destructive/40" />
                          <div className="w-3 h-3 rounded-full bg-accent/40" />
                          <div className="w-3 h-3 rounded-full bg-success/40" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground ml-2">
                          features.md
                        </span>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5">▸</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-mono text-xs text-success uppercase tracking-wider mb-3">
                          Outcomes & Learning
                        </h4>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-success mt-0.5">✓</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div 
                      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity" 
                      style={{ background: project.color }} 
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
