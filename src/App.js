import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
export default function App() {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  const boxRotate = () => {
    setRotate(!rotate);
  };
  const boxMove = () => {
    setMove(!move);
  };
  return (
    <div className="App">
      <motion.h1
        drag="x"
        dragConstraints={{ letft: -50, right: 100 }}
        animate={{ rotate: [0, 360, -360, 0] }}
        //transition = {{repeat: 2, duration:3}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Framer Motion
      </motion.h1>
      <div className="boxes">
        <motion.div
          animate={{ y: -100, scale: 1 }}
          transition={{ type: "spring", bounce: 5 }}
          initial={{ scale: 0 }}
          className="box1"
        ></motion.div>
        <motion.div
          className="box2"
          //animate={{ rotate: rotate ? 360 : 0 }}
          animate={{
            rotate: [0, 200, 200, 0],
            x: [0, 200, 200, 0, -200, -200, 0]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={boxRotate}
        ></motion.div>
        <motion.div
          className="box3"
          animate={{ x: move ? 100 : -100 }}
          // transition={{ type: "inertia", velocity: 40 }}
          onClick={boxMove}
        ></motion.div>
        <motion.div
          className="box4"
          whileHover={{ y: 100 }}
          // transition ={{delay:3}}
          transition={{ type: "tween", duration: 2 }}
        ></motion.div>
        <motion.div className="box5" whileHover={{ scale: 3 }}></motion.div>
        <motion.div className="box6" drag whileDrag={{ scale: 2 }}></motion.div>
        <motion.div
          className="box6"
          animate={{ rotate: [0, 360, 360, 0] }}
          //transition = {{repeat: 2, duration:3}}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
      </div>
    </div>
  );
}
//Animations
//1.Move : x(left(negative number) and right(posotive number))
//: y(up(negative numbeer) and down(posotive number))
//2.Rotate: how many degree rotate

//Transition
//transition = {{delay: 5}}
//transition meanst time to make the animation
//delay:5 means make the animation with 5 seconds

//transition types
//1.transition = {{type: 'tween', duration: 5}}
//2.transition={{ type: "spring", bounce: 5 }}
//3.transition={{ type: "inertia", velocity: 40 }}
