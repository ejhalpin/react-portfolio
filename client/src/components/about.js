import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "max-content"
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "max-content"
  },
  pic: {
    width: "200px",
    height: "240px",
    backgroundImage: 'url("/assets/images/profile.png")',
    backgroundSize: "contain",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px 2px #1c1c1c",
    marginRight: "20px"
  },
  text: {
    color: "#1c1c1c",
    marginLeft: "20px",
    maxWidth: "400px",
    minWidth: "280px"
  }
};

const About = props => {
  const { container, containerSm, pic, text, box } = props.classes;

  return (
    <div className={props.breakPoint ? containerSm : container}>
      <div className={box}>
        <div className={pic}></div>
        <div className={text}>
          <p>
            Eugene Halpin began his professional career as a teacher,
            specializing in physics. Eugene's problem solving skills, innovative
            teaching methods, and ability to make personal connections made him
            a favorite among students and coworkers alike. While teaching,
            Eugene began mentoring high school robotics teams and coaching the
            kids on how to build and code robots. Though Eugene possesses the
            confidence and organizational skills to manage large groups of
            people, he is also a natural problem-solver with the capability to
            excel at detailed, technical work. Eugene taught himself Java, HTML,
            CSS, and Javascript as a hobby.
          </p>

          <p>
            In Eugene’s spare time, he does woodwork. He is a master craftsman
            and his patience and attention to detail make his projects
            beautiful. He especially loves crafting large pieces of gorgeous
            furniture that are close to impossible to move.
          </p>

          <p>
            Eugene lives with his perfect daughter and kickass wife in Wendell,
            NC and is looking for challenging work with plenty of opportunities
            for growth and advancement. He likes money, too.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
