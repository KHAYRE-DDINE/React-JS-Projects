import React, { useState } from "react";
import "./Home.css";
import Interface from "../Interface/Interface";
import { motion } from "framer-motion";
import srcImg from "../../images/space.png";

function Home({ navState }) {
  // eslint-disable-next-line
  const [data, setData] = useState([
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
  ]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className={navState ? "home section nav" : "home section"}
        data-index="0"
      >
        <Interface
          title="your next interactive experience"
          srcImg={srcImg}
          btn="hire us"
        />
        <div className="container">
          <div className="boxes">
            {data.map((e, id) => (
              <motion.div
                initial={{ y: "-500px" }}
                whileInView={{ y: "0" }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  y: { duration: 1 },
                }}
                key={id}
                className="box"
              >
                <h2>{e.head}</h2>
                <p>{e.paragraph}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default Home;
