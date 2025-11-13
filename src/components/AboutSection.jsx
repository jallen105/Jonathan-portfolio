
import { Code, Brackets, Users } from "lucide-react"

const AboutSection = () => {
  return (
    <section id='about' className="py-24 px-4 relative">
      {' '}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Full Stack Software Engineer</h3>

            <p className="text-muted-foreground">
              I’m a curious, growth-driven problem solver who thrives on learning, accountability, and creating enjoyable experiences through technology. With a foundation in IT support and a passion for building engaging, user-friendly apps, I combine technical skill with creativity to make tech fun, accessible, and rewarding. My mission is to keep learning, keep improving, and develop tools that bring value — and a bit of joy — to people’s everyday lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contacts" className="cosmic-button">Get In Touch</a>
              <a href="https://docs.google.com/document/d/1IcWfjo9SdYvNWG0FtNdTtrKVdxUhkdrnJGka3ae600s/edit?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">View Resume</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">Developing frontend web applications with modern frameworks.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <Brackets className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">Creating backend server APIs and databases utilizing Express and Django.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-muted-foreground">Working together with teammates to quickly solve errors.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection