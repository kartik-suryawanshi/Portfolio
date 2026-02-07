import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Database, Wrench, Brain, Layers, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    icon: Code2,
    title: 'Languages',
    color: 'hsl(175 85% 50%)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'C', level: 70 },
    ],
  },
  {
    id: 'frontend',
    icon: Layers,
    title: 'Frontend',
    color: 'hsl(38 95% 55%)',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 92 },
    ],
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Backend & DB',
    color: 'hsl(142 70% 45%)',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 80 },
      { name: 'Supabase', level: 85 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    id: 'ml',
    icon: Brain,
    title: 'AI / ML',
    color: 'hsl(280 70% 55%)',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'Random Forest', level: 85 },
      { name: 'Data Analysis', level: 82 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile',
    color: 'hsl(200 80% 50%)',
    skills: [
      { name: 'Android (Java)', level: 75 },
      { name: 'XML Layouts', level: 78 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools',
    color: 'hsl(0 0% 70%)',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Firebase', level: 80 },
      { name: 'Django', level: 70 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('languages');

  const activeData = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'hsl(175 85% 50% / 0.05)' }} />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <span className="font-mono text-sm text-primary">{'<'}</span>
            <span className="font-mono text-sm text-muted-foreground">Skills & Technologies</span>
            <span className="font-mono text-sm text-primary">{'/>'}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated toolkit refined through projects, internships, and continuous learning.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border'
              }`}
              style={activeCategory === category.id ? { boxShadow: `0 0 20px ${category.color}40` } : {}}
            >
              <category.icon className="w-4 h-4" />
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-xl border border-border p-8 relative overflow-hidden">
            {/* Glow Effect */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30" 
              style={{ background: activeData?.color }} 
            />
            
            <div className="relative space-y-6">
              {activeData?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div 
                    className="h-3 rounded-full overflow-hidden border border-border/60"
                    style={{ backgroundColor: 'hsl(220 15% 20%)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.08 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full min-w-[4px]"
                      style={{ 
                        backgroundColor: activeData?.color,
                        boxShadow: `0 0 12px ${activeData?.color}80`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Full Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'React', 'Next.js', 
              'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase',
              'Git', 'Tailwind CSS', 'Scikit-learn', 'Pandas', 'Django', 'Android'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="skill-tag cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
