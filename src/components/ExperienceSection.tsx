import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Sumago Infotech',
    location: 'Nashik, India',
    period: 'Jun 2023 – Jul 2023',
    duration: '6 weeks',
    description: 'Focused internship on Python Django development, contributing to real-world backend web modules.',
    highlights: [
      'Completed intensive training in Python Django framework',
      'Contributed to design and development of backend web modules',
      'Collaborated with development team on production projects',
      'Gained hands-on experience with MVC architecture',
    ],
    skills: ['Python', 'Django', 'Backend Development', 'Team Collaboration'],
  },
  
];

const education = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Pune Institute of Computer Technology',
    location: 'Pune, India',
    period: '2024 – 2027',
    grade: 'GPA: 8.84/10.0',
    current: true,
  },
  {
    id: 2,
    degree: 'Diploma in Computer Engineering',
    field: '',
    institution: '',
    location: '',
    period: '2021 – 2024',
    grade: 'Percentage: 87.43%',
    current: false,
  },  
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'hsl(175 85% 50% / 0.05)' }} />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">Experience</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Professional <span className="gradient-text">Journey</span>
              </h2>
            </motion.div>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="relative pl-12 pb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-sm text-primary">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="skill-tag text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <span className="font-mono text-sm text-muted-foreground">Education</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Academic <span className="text-accent">Background</span>
              </h2>
            </motion.div>

            {/* Education Cards */}
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-xl border transition-all ${
                    edu.current 
                      ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/50 hover:border-primary' 
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      {edu.field && (
                        <p className="text-primary font-mono text-sm mb-1">{edu.field}</p>
                      )}
                      {edu.institution && (
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm text-muted-foreground">{edu.period}</span>
                      <p className="font-mono text-sm text-foreground font-medium mt-1">{edu.grade}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
