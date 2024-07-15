import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Patient Management System",
        img:"https://i.imgur.com/2VxlT8J.jpeg",
        desc:" This project is a comprehensive healthcare management system designed to streamline and enhance the efficiency of patient care. This system allows doctors to log in, view detailed patient information, and manage diagnoses seamlessly."
    },
    {
        id:2,
        title:"CoinTracker",
        img:"https://i.imgur.com/IpCn9xp.jpeg",
        desc:"A comprehensive personal finance tracker built using HTML, JavaScript, and CSS, and aims to help users manage and track their personal finances effectively."
    }, {
        id:3,
        title:"Restaurant Logistics System",
        img:"https://i.imgur.com/IEfhMK8.jpeg",
        desc:"The Restaurant Logistics System is a database management system designed to streamline restaurant operations.The system utilizes MySQL for efficient data management, providing a robust platform for handling complex queries and ensuring data integrity."
    }, {
        id:4,
        title:"Fraud Detection Tool for Bank Transactions",
        img:"https://i.imgur.com/Gv16Xpz.jpeg",
        desc:"This project is a web-based application designed to identify fraudulent bank transactions using a machine learning model. Users can input transaction details such as transaction type, amount, old balance, and new balance to determine if a transaction is fraudulent. "
    },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className='container'>
        <div className='wrapper'>
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={`/projects/${item.id}`} className="button">See More</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='portfolio'>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
