import React from "react";
import Blog from "./Blog";
import interior1 from "../../assets/images/interior-blog-1.jpg";
import interior2 from "../../assets/images/interior-blog-2.png";
import interior3 from "../../assets/images/interior-blog-3.jpg";
import interior4 from "../../assets/images/interior-blog-4.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./_blogs.scss"

const Blogs = () => {
  const blogsVariant = {
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" }, y: 0 },
    hidden: { opacity: 0, y: "20px" }
  }

  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={blogsVariant}
      initial="hidden"
      animate={control}
      className="blogs"
    >
      <h2>Blogs & News</h2>
      <div className="blogs-container">
        <Blog image={interior1} title="Trending Interior Home Design for 2024" date="January 2, 2024" url="https://www.homesandgardens.com/interior-design/interior-design-trends">
          volutpat ac tincidunt vitae semper quis lectus nulla...
        </Blog>
        <Blog image={interior2} title="7 Must-Follow Tips for Starting a House Renovation" date="October 13, 2022" url="https://www.bhg.com/home-improvement/advice/planning/read-this-before-you-start-your-home-renovation-281474979547593/">
          lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim...
        </Blog>
        <Blog image={interior3} title="How to Set a Budget for Buying Your First Home" date="June 14, 2022" url="https://www.investopedia.com/personal-finance/how-set-budget-your-first-home/">
          auctor urna nunc id cursus metus aliquam eleifend mi...
        </Blog>
        <Blog image={interior4} title="House Vs Apartment – Which Is The Better Option?" date="April 20, 2020" url="https://graana.com/blog/house-vs-apartment/">
          nisi scelerisque eu ultrices...
        </Blog>
      </div>
    </motion.div>
  )
}

export default Blogs;