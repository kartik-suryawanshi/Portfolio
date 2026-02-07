import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Code2, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'hsl(175 85% 50% / 0.03)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-header">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an <span className="text-foreground font-medium">AI and Data Science Engineering</span> student 
                at Pune Institute of Computer Technology with a clear mission: to bridge the gap between complex 
                technical solutions and intuitive user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines <span className="text-primary">analytical thinking</span> with creative 
                problem-solving. Whether I'm training machine learning models to predict air quality or 
                building full-stack platforms that connect students with learning opportunities, I focus on 
                solutions that are both technically robust and genuinely useful.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently seeking <span className="text-foreground font-medium">internship opportunities</span> where 
                I can contribute to meaningful projects while continuing to grow as an engineer.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: GraduationCap, label: 'B.E. in AI & DS', sublabel: 'PICT, Pune' },
                { icon: MapPin, label: 'Based in', sublabel: 'Pune, India' },
                { icon: Code2, label: 'Focus on', sublabel: 'Full-Stack & ML' },
                { icon: Lightbulb, label: 'Passionate about', sublabel: 'Open Source' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground text-sm">
                      {item.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Code Block Visual */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">kartik.tsx</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span>{' '}
                  <span className="text-accent">kartik</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-primary">{'{'}</span>
                </div>
                <div className="pl-4 mt-2 space-y-1">
                  <div>
                    <span className="text-foreground">name</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-success">"Kartik Suryawanshi"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div>
                    <span className="text-foreground">role</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-success">"AI & Data Science Engineer"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div>
                    <span className="text-foreground">education</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-success">"B.E. @ PICT"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div>
                    <span className="text-foreground">status</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-success">"Open to Opportunities"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div>
                    <span className="text-foreground">skills</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-primary">[</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-success">"Python"</span>
                    <span className="text-muted-foreground">,</span>{' '}
                    <span className="text-success">"React"</span>
                    <span className="text-muted-foreground">,</span>{' '}
                    <span className="text-success">"ML"</span>
                    <span className="text-muted-foreground">,</span>{' '}
                    <span className="text-success">"..."</span>
                  </div>
                  <div>
                    <span className="text-primary">]</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div>
                    <span className="text-foreground">available</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-accent">true</span>
                  </div>
                </div>
                <div className="mt-2 text-primary">{'}'}</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl pointer-events-none" style={{ background: 'hsl(175 85% 50% / 0.15)' }} />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl pointer-events-none" style={{ background: 'hsl(38 95% 55% / 0.1)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
