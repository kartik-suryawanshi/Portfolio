import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { TerminalTyping } from './TerminalTyping';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(ellipse at 70% 30%, hsl(175 85% 50% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, hsl(38 95% 55% / 0.05) 0%, transparent 40%)' 
        }} 
      />
      
      {/* Floating Glows */}
      <motion.div
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(175 85% 50% / 0.08)' }}
      />
      <motion.div
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(38 95% 55% / 0.06)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Terminal Badge with Typing Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <TerminalTyping
              command="whoami"
              prefix="~/portfolio"
              promptSymbol="$"
              typeSpeed={{ min: 60, max: 120 }}
              deleteSpeed={{ min: 40, max: 70 }}
              pauseAfterType={1000}
              pauseAfterDelete={300}
              loop={true}
              showCaret={true}
              caretGlow={true}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-display font-bold tracking-tight">
              <span className="block text-muted-foreground text-xl md:text-2xl mb-3 font-body font-normal">
                Hi, I'm
              </span>
              <span className="block text-foreground">
                Kartik
              </span>
              <span className="block gradient-text">
                Suryawanshi
              </span>
            </h1>
          </motion.div>

          {/* Role Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-lg md:text-xl text-primary">
                &lt;
              </span>
              <span className="font-display text-lg md:text-xl text-foreground">
                AI & Data Science Engineer
              </span>
              <span className="font-mono text-lg md:text-xl text-primary">
                /&gt;
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
          >
            Engineering student building{' '}
            <span className="text-foreground font-medium">scalable web applications</span>{' '}
            and{' '}
            <span className="text-foreground font-medium">ML solutions</span>.
            Passionate about transforming complex problems into elegant, 
            user-focused digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:shadow-lg transition-all btn-glow"
              style={{ boxShadow: '0 0 20px hsl(175 85% 50% / 0.3)' }}
            >
              <Sparkles className="w-4 h-4" />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground font-mono font-medium rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats Row */}
         
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
