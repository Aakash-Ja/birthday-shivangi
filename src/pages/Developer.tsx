import { Heart, Code, Github, Linkedin, Mail, Globe, PhoneIcon, Sparkles } from "lucide-react";

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-romantic pt-20 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-rose-light/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[35rem] md:h-[35rem] bg-gold-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 shadow-soft border border-rose-light/30 animate-scaleIn text-center">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose/10 mb-4 md:mb-6 text-rose animate-heartbeat">
              <Code className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h1 className="text-3xl md:text-7xl font-display text-foreground mb-3 md:mb-4 font-bold leading-tight">
              The Mind Behind <br/><span className="text-rose italic">the Magic</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/70 font-body italic font-bold">
              "Crafting digital experiences with love and precision."
            </p>
          </div>

          {/* Profile Details */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-1 md:mb-2 font-bold tracking-tight">Aakash Jaiswal</h2>
              <p className="text-xl md:text-3xl text-rose font-bold mb-4 md:mb-6 italic">Full Stack Developer & Creative Soul</p>
              <p className="text-base md:text-xl text-foreground/80 font-medium leading-relaxed font-body max-w-2xl mx-auto">
                With over 4 years of experience, I specialize in breathing life into ideas. From complex backend architectures to pixel-perfect romantic frontends, I build for human connection.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
              <a href="tel:+919580974395" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-[1.8rem] md:rounded-[2rem] bg-rose/5 hover:bg-rose/10 transition-all group border border-rose-light/10 shadow-sm">
                <div className="p-2.5 md:p-3 rounded-xl bg-white text-rose group-hover:scale-110 transition-transform shadow-sm">
                  <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-foreground font-body text-base md:text-lg font-bold">+91 9580974395</span>
              </a>
              <a href="mailto:aakash123564@gmail.com" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-[1.8rem] md:rounded-[2rem] bg-rose/5 hover:bg-rose/10 transition-all group border border-rose-light/10 shadow-sm overflow-hidden">
                <div className="p-2.5 md:p-3 rounded-xl bg-white text-rose group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-foreground font-body text-base md:text-lg font-bold truncate">aakash123564@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Aakash-Ja" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aakash-jaiswal-1982b6198/" },
                { icon: Globe, label: "Portfolio", href: "https://aakash-ja.vercel.app" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white shadow-sm border border-rose-light/20 hover:border-rose hover:text-rose transition-all font-bold hover:shadow-md text-sm md:text-base"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto">
              {[
                { title: "Frontend", desc: "React, Next.js, TS", icon: <Sparkles className="text-rose" size={20} /> },
                { title: "Backend", desc: "Node.js, NestJS", icon: <Code className="text-gold" size={20} /> }
              ].map((skill, i) => (
                <div key={i} className="bg-white/40 p-4 md:p-6 rounded-[1.8rem] md:rounded-[2rem] border border-rose-light/20 text-center shadow-sm">
                  <div className="inline-block p-2.5 md:p-3 rounded-xl bg-white shadow-sm mb-2 md:mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-base md:text-xl font-display text-foreground font-bold">{skill.title}</h4>
                  <p className="text-[10px] md:text-sm text-foreground/60 font-body font-bold">{skill.desc}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center pt-6 md:pt-8 border-t border-rose-light/20">
              <p className="text-foreground/40 font-body font-bold flex items-center justify-center gap-2 text-xs md:text-base">
                Made with <Heart className="w-4 h-4 text-rose fill-rose" /> for Love
              </p>
              <p className="text-[8px] md:text-[10px] text-rose/40 font-bold mt-2 uppercase tracking-widest">
                © 2026 Aakash Jaiswal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
