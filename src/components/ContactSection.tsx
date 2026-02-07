import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kartiksuryawanshi55@gmail.com',
    href: 'mailto:kartiksuryawanshi55@gmail.com',
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, India',
    href: '#',
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'kartik-suryawanshi',
    href: 'https://github.com/kartik-suryawanshi',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'suryawanshi-kartik',
    href: 'https://linkedin.com/in/suryawanshi-kartik',
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || 'Failed to send message. Please try again.');
        return;
      }
      toast.success('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'email') setEmailError('');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, hsl(175 85% 50% / 0.05) 0%, transparent 50%)' }} />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for an internship opportunity or want to collaborate on a project? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div 
                      key={item.label}
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <a 
                        href={item.href}
                        className="flex items-center gap-4 flex-1"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </a>
                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value)}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Copy ${item.label}`}
                        >
                          {copied === item.value ? (
                            <Check className="w-4 h-4 text-success" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Social Profiles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-xs text-muted-foreground">{social.label}</p>
                        <p className="text-foreground text-sm font-medium truncate">{social.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-full p-8 rounded-xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'hsl(175 85% 50% / 0.1)' }} />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  I'm actively looking for software engineering internship opportunities. Have a role or project in mind? Reach out!
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/80 border-border font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`bg-background/80 border-border font-mono ${emailError ? 'border-destructive' : ''}`}
                      />
                      {emailError && (
                        <p className="font-mono text-xs text-destructive">{emailError}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/80 border-border font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/80 border-border font-mono resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg btn-glow disabled:opacity-70"
                    style={{ boxShadow: '0 0 20px hsl(175 85% 50% / 0.3)' }}
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
