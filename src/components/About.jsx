import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="eyebrow mb-5">About TERVOQ</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Building Technology For The Future.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          TERVOQ combines software engineering, automation, customer experience, and product thinking to create solutions that help businesses move forward.
        </p>
      </motion.div>
    </section>
  )
}
