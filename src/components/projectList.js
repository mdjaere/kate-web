import img2 from "../assets/1_web14.jpg";
import img3 from "../assets/1_web31.jpg";
import img26 from "../assets/1_web17.jpg";
import img30 from "../assets/1_unbuilding-2010-web2.jpg";
import img31 from "../assets/1_unbuilding-2010-web.jpg";

const project1 = {
  date: "2012",
  urlTitle: "cross_gallery_2012",
  headline: "Cross Gallery",
  coverImage: img3,
  images: [img2, img3, img26],
  videos: [],
  text: "'If, then else' at Cross Gallery",
  intro: "Solo Exhibition in Cross Gallery in Dublin, Ireland.",
  body:
    "You can use any one of the following command " +
    "to list network cards installed under Linux operating systems. " +
    "Please note that the ifconfig and ip commands will also display " +
    " interfaces information about vpn, loopback, and other configured " +
    "interfaces." +
    "You can use any one of the following command " +
    "to list network cards installed under Linux operating systems. " +
    "Please note that the ifconfig and ip commands will also display " +
    " interfaces information about vpn, loopback, and other configured " +
    "interfaces."
};
const project2 = {
  date: "Spring 2010",
  urlTitle: "the_sinking_world",
  headline: "The Sinking World",
  coverImage: img31,
  images: [img30, img31],
  videos: [],
  text: "'The Sinking World' 2010: Unbuilding project",
  intro:
    "How do I display a list of all network cards under Linux operating " +
    "systems? You can use any one of the following command to list network " +
    "cards installed under Linux operating systems. ",
  body:
    "You can use any one of the following command " +
    "to list network cards installed under Linux operating systems. " +
    "Please note that the ifconfig and ip commands will also display " +
    " interfaces information about vpn, loopback, and other configured " +
    "interfaces." +
    "You can use any one of the following command " +
    "to list network cards installed under Linux operating systems. " +
    "Please note that the ifconfig and ip commands will also display " +
    " interfaces information about vpn, loopback, and other configured " +
    "interfaces."
};

const projectList = [].concat(project1, project2, project1, project2, project1, project2);

export default projectList;
