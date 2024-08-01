import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <SectionTitle title="About Me" />
      <div className="text-center">
        <TextGenerateEffect words="I am Lungelo Zulu (known to many as Smile/Smiles)" />
        <TextGenerateEffect
          words="A tall Zulu boy who was born in August of ’96 in Dundee, Kwa-Zulu
          Natal, but raised by the grimy streets of Katlehong – “the far East”
          they say."
        />
        <TextGenerateEffect
          duration={1}
          words="His writing experience stems from 2015 with the establishment of his Tumblr blog www.smileythevisionaire.tumblr.com where he wrote music reviews, event reviews, as well as artist & brand profiles. Prior to that, Lungelo was a Rapper and Songwriter since his early teens, so make no mistake; that boy can write. Soon after dropping out of College, Lungelo Zulu started his own content production agency called HIP Daily Media Works. The agency’s first target was Sunday Kos & Chill, a gala dinner with friends ‘cause, of course, Lu is friends with many, many artists, across various mediums, so best believe, this bloke knows every-one. This gala dinner was the official launch of the company HIP Daily Media Works, a company that would soon launch Sithi No More Femicide: A War Against A War, a short socio-commentary piece written and produced by Lungelo Zulu himself. This project, as Lungelo’s first attempt at a documentary probed the intricate effects of patriarchy in modern society through the understanding of five young women majoring in Rugby, Beauty, Art and Student Relations."
        />
        <TextGenerateEffect words="Word on the street has it that Lungelo is returning fully to his initial duties at HIP Daily Media Works as Creative Director & Head of Content and has a possible docuseries in the pipelines. The first installation is set to premiere on the 5th of August via HIP Daily TV on YouTube." />
        <TextGenerateEffect
          words="A tall Zulu boy who was born in August of ’96 in Dundee, Kwa-Zulu
          Natal, but raised by the grimy streets of Katlehong – “the far East”
          they say."
        />
      </div>
    </>
  );
};

export default About;
