export const profile = {
  name: import.meta.env.VITE_SITE_NAME || 'John Doe',
  title: 'Full-Stack Developer',
  tagline:
    'Building full-stack web applications with React, Node.js, Express.js, PostgreSQL, and REST APIs.',
  intro:
    'Passionate about building responsive, scalable, and user-friendly web applications with modern technologies.',
  bio: 'Computer Science graduate with hands-on experience developing full-stack web applications using modern web technologies. I enjoy solving complex problems, writing clean and maintainable code, and collaborating with clients and teams to deliver practical digital solutions. I also use AI-assisted development tools to enhance productivity, streamline development, and continuously learn new technologies and best practices.',
  objective:
    'Seeking an opportunity to contribute to innovative web applications while growing my skills as a Full Stack Web Developer.',
  strengths: [
    'React & JavaScript',
    'Node.js & Express',
    'TypeScript',
    'REST APIs',
    'PostgreSQL & Supabase',
    'Git',
    'Responsive Design',
    'Testing & Debugging',
  ],
  interests: [
    'Open source contributions',
    'UI/UX design',
    'Web performance optimization',
    'Learning new frameworks',
    'Developing useful web applications',
  ],
  email: import.meta.env.VITE_EMAIL || 'john.doe@email.com',
  github: import.meta.env.VITE_GITHUB || 'https://github.com/johndoe',
  linkedin: import.meta.env.VITE_LINKEDIN || 'https://linkedin.com/in/johndoe',
  resumeUrl: '/resume.pdf',
}
