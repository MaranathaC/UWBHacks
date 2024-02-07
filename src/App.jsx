import { Hero } from "./components/Hero";
import { motion, useScroll } from "framer-motion"

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="absolute top-0 h-10 w-full bg-blue"></div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink via-purple via-blue to-cyan origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <div className="flex justify-center">
        <div className="lg:w-1/2 w-full font-mono text-xl lg:text-3xl text-center text-cyan rounded-lg border-2 border-pink">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at pellentesque elementum, risus nisl cursus erat, in condimentum
        </div>
      </div>

      <div className="mt-5 bottom-0 h-10 w-full bg-blue"></div>
    </>
  );
}
