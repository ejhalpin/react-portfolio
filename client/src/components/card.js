import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, IconButton, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faGamepad,
  faProjectDiagram,
  faShareAlt,
  faCodeBranch,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
const styles = theme => ({
  cardRoot: {
    padding: "9px"
  },
  cardTitle: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    color: "#f0efd1",
    textShadow: "1px 1px #000"
  },
  cardSubheader: {
    fontSize: "0.625rem",
    color: "#f0efd1"
  },
  card: {
    minWidth: 350,
    maxWidth: 350,
    margin: 10,
    minHeight: 400,
    backgroundColor: "#191919",
    color: "#f0efd1"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  mediaRoot: {
    backgroundSize: "contain"
  },
  actions: {
    display: "flex",
    color: "#f0efd1"
  },
  color: {
    color: "#f0efd1"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#bf3211"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  desc: {
    fontSize: "1.0rem"
  }
});

class AppCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleNav = loc => {
    if (loc.length === 1) {
      loc = "https://ejhalpin.github.io/" + this.props.repo;
    }
    window.open(loc, "_blank");
  };

  getIcon = category => {
    switch (category) {
      case "CLI":
        return <FontAwesomeIcon icon={faTerminal} />;
      case "Game":
        return <FontAwesomeIcon icon={faGamepad} />;
      case "UI":
        return <FontAwesomeIcon icon={faSearchengin} />;
      case "Project":
        return <FontAwesomeIcon icon={faProjectDiagram} />;
      case "Social":
        return <FontAwesomeIcon icon={faShareAlt} />;
      case "github":
        return <FontAwesomeIcon icon={faCodeBranch} />;
      case "external":
        return <FontAwesomeIcon icon={faExternalLinkAlt} />;
      default:
        return null;
    }
  };

  render() {
    const { classes, cat, title, img, desc, href, tech, repo } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="App" className={classes.avatar}>
              {this.getIcon(cat)}
            </Avatar>
          }
          action={
            <IconButton
              classes={{ root: classes.color }}
              onClick={() => {
                this.handleNav(href);
              }}
            >
              {this.getIcon("external")}
            </IconButton>
          }
          title={title}
          classes={{
            title: classes.cardTitle,
            root: classes.cardRoot
          }}
        />
        <CardMedia
          className={classes.media}
          classes={{ root: classes.mediaRoot }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography component="p" classes={{ root: classes.desc }}>
            {desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            classes={{ root: classes.color }}
            aria-label="GitHub Repo"
            onClick={() => {
              this.handleNav("https://github.com/ejhalpin/" + repo);
            }}
          >
            {this.getIcon("github")}
          </IconButton>
          <IconButton
            classes={{ root: classes.color }}
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              {tech.map(item => {
                return <ListItem>{item}</ListItem>;
              })}
            </List>
            +
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppCard);
