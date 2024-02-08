import { Hero } from "./components/Hero";
import { motion, useScroll } from "framer-motion";
import Example from "./components/Header";
import "./index.css";


export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Example />
      {/* <div className="absolute top-0 h-10 w-full bg-blue"></div> */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink via-purple via-blue to-cyan origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <div className="flex justify-center h-screen">
        <div className="w-full overflow-hidden">
          <div className="fade"></div>
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>UWB HACKS AI</p>
                <h1>2024</h1>
              </div>
              <p>
              UWB Hacks In Person is the 7th annual hackathon at the University of Washington, Bothell. 
              The UWB ACM intends to bring students with diverse skill sets together to make connections and create something useful and/or fun.
              </p>
              <p>
              Our hackathon is a great way for college students to network, get hands-on experience in programming, and solve problems in teams. 
              Whether this is your first or hundredth hackathon, come join UWB Hacks In Person this year for a fun time!
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-5 bottom-0 h-10 w-full bg-blue"></div>
    </>
  );
}
