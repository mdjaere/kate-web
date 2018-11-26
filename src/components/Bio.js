import React from "react";
import styled from "styled-components";

const Biotext = styled.div`
  font-size: 0.7em;
`;

const Bio = props => (
  <Biotext>
    <strong>katewarner@gmail.com</strong>
    <p>
      Born 1982, Ireland <br />
      Based in London, UK
    </p>

    <strong>Education</strong>
    <p>
      Royal College of Art, London, MA Painting 2012 <br />
      National College of Art & Design, Dublin, BA Fine Art & History of Art
      2005 <br />
    </p>
    <strong>Projects/ Residencies</strong>
    <p>
      <a href="https://themothershipproject.wordpress.com">
        The Mothership Project Satellite Residency
      </a>
      ,{" "}
      <a href="https://cowhousestudios.com/satellite-residency-kate-warner-james-o-haodha/">
        Cow House Studios, Co.Wexford 2018
      </a>{" "}
      <br />
      Unbuilding Project, Co.Wicklow 2009-10 <br />
      Independent Studio Artists Ltd, Dublin 2007-2010 <br />
    </p>
    <strong>Awards</strong>
    <p>
      Neville Burston Award 2012 <br />
      Villiers David Travel Award, 2011 <br />
      Arts Council of Ireland Travel & Training Award, 2010 & 2011 <br />
      Wicklow County Council Project Award, 2010 <br />
      Mermaid Greenstar Award, 2007 <br />
    </p>
    <strong>Solo Exhibitions</strong>
    <p>
      If, Then, Else, Cross Gallery, Dublin 2013 <br />
      The Sinking World, Mermaid Arts Centre, Bray 2010 <br />
      Adventuring, Cross Gallery 2009 <br />
      Things Being Various, Cross Gallery 2007 <br />
    </p>
    <strong>Group Exhibitions</strong>
    <p>
      Sentient Objects AMP Peckham, London 2018
      <br />
      Surface Music, Gallery 64a, Whitstable 2018
      <br />
      Occupation (with IOE & Freelands Foundation), Tate Exchange, London 2017
      <br />
      Autocatalytic Future Games, no format, London 2015 <br />
      53 Beck Road, London, 2013 <br />
      40/40/40 Madrid, Warsaw, Rome, 2013 <br />
      RCA MA Degree Show 2012 <br />
      The Enchanted Garden, Kilruddery House 2009 <br />
      Timbuktu, Pallas Contemporary Projects, Dublin 2008 <br />
      Winter Salon, Temple Bar Gallery, Dublin 2008 <br />
      The Plinian Sponge, Maybe? 2008 <br />
      Reflections, works from the OPW collection 2006 <br />
      Eigse Festival, Carlow 2006 <br />
      Kate Warner & Leda Scully, Cross Gallery 2005 <br />
      Recent Graduates, RHA Ashford Gallery, Dublin 2005 <br />A Moment in Time,
      Temple Bar Gallery 2005 <br />
      It’s All Over & About to Begin, Ard Bia Gallery, Galway 2005 <br />
    </p>
  </Biotext>
);

export default Bio;
