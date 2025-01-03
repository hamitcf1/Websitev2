import { motion } from "framer-motion"
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Prof. Smith",
    institution: "Yildiz Technical University",
    review: "A dedicated student with exceptional problem-solving skills.",
    rating: 5,
  },
  {
    name: "Dr. Johnson",
    institution: "Computer Science Department",
    review: "Shows great potential in software development and algorithmic thinking.",
    rating: 5,
  },
  {
    name: "Prof. Williams",
    institution: "Web Development Course",
    review: "Consistently delivers high-quality work and demonstrates strong coding practices.",
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold">Reviews from my teachers</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-card p-6 shadow-lg"
            >
              <div className="mb-4 flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 italic">"{review.review}"</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

