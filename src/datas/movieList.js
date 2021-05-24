import django from "../RS/django.jpg";
import hatefuleight from "../RS/hatefuleight.jpg";
import hollywood from "../RS/hollywood.png";
import inglorious from "../RS/inglorious.jpg";
import killbill from "../RS/killbill.jpg";
import killbilltwo from "../RS/killbilltwo.jpg";
import pulpfiction from "../RS/pulpfiction.jpg";
import jackiebrown from "../RS/jackiebrown.jpg";
import dogs from "../RS/dogs.jpg";
import deathproof from "../RS/deathproof.jpg";
import trainingday from "../RS/training-day.jpg";
import fences from "../RS/fences.jpg";

export const movieList = [
  {
    title: "Django Unchained",
    category: "Western",
    id: Math.random(),
    rate: 8,
    cover: django,
    cast: "Jamie Foxx, Leonardo DiCaprio, Christoph Waltz",
    release: "2012-12-25, ",
    description:
      "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
    src: "https://www.youtube.com/embed/_iH0UBYDI4g"
  },
  {
    title: "The Hateful Eight",
    category: "Mistery",
    id: Math.random(),
    rate: 7,
    cover: hatefuleight,
    cast: "Samuel L.Jackson, Kurt Russel",
    release: "2015-12-30, ",
    description:
      "A bounty hunter and his captured fugitive are caught in the middle of a snowstorm. They seek refuge at a small lodge and encounter a twisted turn of events there.",
    src: "https://www.youtube.com/embed/nIOmotayDMY"
  },
  {
    title: "Once Upon a Time in Hollywood",
    category: "Drama",
    id: Math.random(),
    rate: 7,
    cover: hollywood,
    cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
    release: "2019-07-26, ",
    description:
      "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.",
    src: "https://www.youtube.com/embed/ELeMaP8EPAA"
  },
  {
    title: "Inglourious Basterds",
    category: "War",
    id: Math.random(),
    rate: 8,
    cover: inglorious,
    cast: " Brad Pitt, Diane Kruger, Eli Roth",
    release: "2009-08-20, ",
    description:
      "A few Jewish soldiers are on an undercover mission to bring down the Nazi government and put an end to the war. Meanwhile, a woman wants to avenge the death of her family from a German officer.",
    src: "https://www.youtube.com/embed/KnrRy6kSFF0"
  },
  {
    title: "Kill Bill Vol. 1",
    category: "Crime",
    id: Math.random(),
    rate: 9,
    cover: killbill,
    cast: " Uma Thurman, David Carradine, Daryl Hannah",
    release: "2003-10-10,",
    description:
      "A pregnant assassin, code-named The Bride, goes into a coma for four years after her ex-boss Bill brutally attacks her. When she wakes up, she sets out to seek revenge on him and his associates.",
    src: "https://www.youtube.com/embed/7kSuas6mRpk"
  },
  {
    title: "Pulp Fiction",
    category: "Drama",
    id: Math.random(),
    rate: 9,
    cover: pulpfiction,
    cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
    release: "1994-10-14, ",
    description:
      "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
    src: "https://www.youtube.com/embed/s7EdQ4FqbhY"
  },
  {
    title: "Jackie Brown",
    category: "Crime",
    id: Math.random(),
    rate: 6,
    cover: jackiebrown,
    cast: "Pam Grier, Samuel L. Jackson, Robert Forster",
    release: "1997-12-25, ",
    description:
      "A flight attendant caught smuggling gun money has to choose between teaming up with the cops to bust her arms dealer boss or keeping her mouth shut and going to jail.",
    src: "https://www.youtube.com/embed/HlAECQzTkfY"
  },
  {
    title: "Kill Bill 2",
    category: "Crime",
    id: Math.random(),
    rate: 8,
    cover: killbilltwo,
    cast: "Uma Thurman, David Carradine, Michael Madsen",
    release: "2004-04-16",
    description:
      "A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad",
    src: "https://www.youtube.com/embed/WTt8cCIvGYI"
  },
  {
    title: "Reservoir Dogs",
    category: "Crime",
    id: Math.random(),
    rate: 7,
    cover: dogs,
    cast: "Harvey Keitel, Tim Roth, Michael Madsen",
    release: "1992-09-02",
    description:
      "Six criminals, hired to steal diamonds, do not know each other's true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer.",
    src: "https://www.youtube.com/embed/2KLZ4fSXtgI"
  },
  {
    title: "Death Proof",
    category: "Action",
    id: Math.random(),
    rate: 6,
    cover: deathproof,
    cast: " Kurt Russell, Zoë Bell, Rosario Dawson ",
    release: "2007-05-31",
    description:
      "Mike, a Hollywood stuntman, kills women and makes it look like a car accident. His plan works for several years until he meets a group of girls who are all set to fight back.",
    src: "https://www.youtube.com/embed/VHb56GTqukA"
  },
  {
    title: "Training Day",
    category: "Action",
    id: Math.random(),
    rate: 7,
    cover: trainingday,
    cast: "Denzel Washington, Ethan Hawke, Scott Glenn",
    release: "2001-10-05",
    description:
      "Detective Alonzo, a senior narcotics officer, must train Jake Hoyt during the course of a day. However, Hoyt learns that Alonzo's methods are not ethical and he soon realises that he is being trapped.",
    src: "https://www.youtube.com/embed/DXPJqRtkDP0"
  },
  {
    title: "Fences",
    category: "Drama",
    id: Math.random(),
    rate: 6,
    cover: fences,
    cast: " Denzel Washington, Viola Davis, Stephen McKinley Henderson",
    release: "2016-12-26",
    description:
      "Troy, an African American man who once longed to be a baseball player, misses the opportunity due to racism. As time passes, he takes out his frustration on his loved ones and ruins his son's future.",
    src: "https://www.youtube.com/embed/a2m6Jvp0bUw"
  }
];
