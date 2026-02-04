const Footer = () => {
  return (
    <footer className="text-center p-8 bg-black text-white">
      <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 500 }}>
        📫 Let's Connect
      </h3>
      <div className="flex flex-wrap justify-center gap-6 text-lg mb-4">
        <a
          href="mailto:id.tnyennhi@gmail.com"
          className="hover:text-accent-300 transition-colors flex items-center gap-2"
        >
          📧 id.tnyennhi@gmail.com
        </a>
        <span className="text-primary-300 hidden md:inline">|</span>
        <a
          href="tel:0412480535"
          className="hover:text-accent-300 transition-colors flex items-center gap-2"
        >
          📞 0412 480 535
        </a>
        <span className="text-primary-300 hidden md:inline">|</span>
        <a
          href="https://www.linkedin.com/in/janny-tran-a31621192"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-300 transition-colors flex items-center gap-2"
        >
          💼 LinkedIn
        </a>
        <span className="text-primary-300 hidden md:inline">|</span>
        <a
          href="https://github.com/id-nynt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-300 transition-colors flex items-center gap-2"
        >
          💻 GitHub
        </a>
      </div>
      <div className="text-primary-300 text-sm">
        © 2025 Janny Tran. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer