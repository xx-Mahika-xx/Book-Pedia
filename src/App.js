import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Classics: [
    {
      name: "The Great Gatsby",
      rating: "4/5",
      description:
        "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s."
    },
    {
      name: "The Old Man and The Sea",
      rating: "5/5",
      description:
        "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses—specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954."
    },
    {
      name: "To Kill A Mockingbird",
      rating: "4.5/5",
      description:
        "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
    },
    {
      name: "Animal Farm",
      rating: "4.5/5",
      description:
        "The animals of a farm, tired of the continuous abuses of human beings, decide to rebel. And after chasing the owner, they try to create a new order based on an ideological concept of equality. It looks like a fairy tale, but it's not to entertain the little ones. Mainly, Orwell explored a historical fact about Stanalist Russia through this story."
    },
    {
      name: "100 years of Soltitude",
      rating: "4/5",
      description:
        "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as 'magical realism.'"
    },
    {
      name: "The Little Prince",
      rating: "4/5",
      description:
        "A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. 'Please,' asks the stranger, 'draw me a sheep'. And the pilot realizes that when life's events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers."
    }
  ],

  Nonfiction: [
    {
      name: "Educated",
      rating: "4.5/5",
      description:
        "Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one's life through new eyes and the will to change it."
    },
    {
      name: "In cold blood",
      rating: "4/5",
      description:
        "As Truman Capote reconstructs the murder and the investigation that led to the capture, trial, and execution of the killers, he generates both mesmerizing suspense and astonishing empathy. At the center of his study are the amoral young killers Perry Smith and Dick Hickcock, who, vividly drawn by Capote, are shown to be reprehensible yet entirely and frighteningly human. In Cold Blood is a seminal work of modern prose, a remarkable synthesis of journalistic skill and powerfully evocative narrative."
    },
    {
      name: "The Silent Spring",
      rating: "4.5/5",
      description:
        "The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive. "
    },
    {
      name: "Hiroshima",
      rating: "3.7/5",
      description:
        "On August 6, 1945, Hiroshima was destroyed by the first atom bomb ever dropped on a city. This book, John Hersey's journalistic masterpiece, tells what happened on that day. Told through the memories of survivors, this timeless, powerful and compassionate document has become a classic that stirs the conscience of humanity."
    },
    {
      name: "Paradise",
      rating: "5/5",
      description:
        "The definitive firsthand account of California's Camp Fire--the nation's deadliest wildfire in a century--and a riveting examination of what went wrong and how to avert future tragedies as the climate crisis unfolds."
    }
  ],
  History: [
    {
      name: "The Girls who stepped Out of Line",
      rating: "5/5",
      description:
        "For fans of Radium Girls and history and WWII buffs, The Girls Who Stepped Out of Line takes you inside the lives and experiences of 15 unknown women heroes from the Greatest Generation, the women who served, fought, struggled, and made things happen during WWII--in and out of uniform, for theirs is a legacy destined to embolden generations of women to come."
    },
    {
      name: "Hero of Two Worlds",
      rating: "4.5/5",
      description:
        "Few in history can match the revolutionary career of the Marquis de Lafayette. Over fifty incredible years at the heart of the Age of Revolution, he fought courageously on both sides of the Atlantic. He was a soldier, statesman, idealist, philanthropist, and abolitionist.From the bestselling author of The Storm Before the Storm and host of the Revolutions podcast comes the thrilling story of the Marquis de Lafayette’s lifelong quest to defend the principles of liberty and equality."
    },
    {
      name: "Maiden Voyages",
      rating: "3.5/5",
      description:
        "During the early twentieth century, transatlantic travel was the province of the great ocean liners. It was an extraordinary undertaking made by many women, whose lives were changed forever by their journeys between the Old World and the New. Some traveled for leisure, some for work; others to reinvent themselves or find new opportunities. They were celebrities, migrants and millionaires, refugees, aristocrats and crew members whose stories have mostly remained untold—until now."
    },
    {
      name: "Being A Human",
      rating: "4.5/5",
      description:
        "Drawing on psychology, neuroscience, natural history, agriculture, medical law and ethics, Being a Human is one man's audacious attempt to feel a connection with 45,000 years of human history. This glorious, fiercely imaginative journey from our origins to a possible future ultimately shows how we might best live on earth--and thrive. "
    }
  ],
  Romance: [
    {
      name: "Bombshell",
      rating: "4.5/5",
      description:
        "New York Times bestselling author Sarah MacLean returns with a blazingly sexy, unapologetically feminist new series, Hell’s Belles, beginning with a bold, bombshell of a heroine, able to dispose of a scoundrel—or seduce one—in a single night."
    },
    {
      name: "The Wild Ones",
      rating: "3.5/5",
      description:
        "Meet the Wild Ones: girls who have been hurt, abandoned, and betrayed all their lives. It all began with Paheli, who was once betrayed by her mother and sold to a man in exchange for a favor. When Paheli escapes, she runs headlong into a boy with stars in his eyes. This boy, as battered as she is, tosses Paheli a box of stars before disappearing. A group of teenage girls must band together to sabe the life of the boyt who gave them their powers."
    },
    {
      name: "A walk to Remember",
      rating: "5/5",
      description:
        "No other author today touches our emotions more deeply than Nicholas Sparks.Illuminating both the strength and the gossamer fragility of our deepest emotionses,have established him as the leading author of today's most cherished love stories. In A Walk to Remember, he tells a truly unforgettable story, one that glimmers with all of his magic, holding us spellbound-and reminding us that in life each of us may find one great love, the kind that changes everything..."
    },
    {
      name: "Both Sides Now",
      rating: "4.5/5",
      description:
        "There's only one thing standing between Finch Kelly and a full-blown case of high school senioritis: the National Speech & Debate Tournament. Taking home the gold would not only be the pinnacle of Finch's debating career, but the perfect way to launch himself into his next chapter: college in Washington, D.C. and a history-making career as the first trans congressman. What could possibly go wrong?"
    },
    {
      name: "Small Favours",
      rating: "4.5/5",
      description:
        "Ellerie Downing lives in the quiet town of Amity Falls in the Blackspire Mountain range--five narrow peaks stretching into the sky like a grasping hand, bordered by a nearly impenetrable forest from which the early townsfolk fought off the devils in the woods. To this day, visitors are few and rare. But when a supply party goes missing, some worry that the monsters that once stalked the region have returned."
    }
  ],

  Business: [
    {
      name: "Outliers",
      rating: "3.5/5",
      description:
        "Malcolm Gladwell takes us on an intellectual journey through the world of outliers the best and the brightest"
    },
    {
      name: "Good to Great",
      rating: "5/5",
      description:
        "Good to great summarises the findings from extensive research into what makes certain high performing companies outperform their peers."
    },
    {
      name: "Start with Why",
      rating: "4/5",
      description:
        "Simon Sinek started a movement to help people become more inspired at work, and in turn inspire their colleagues and customers."
    },
    {
      name: "Business Adventures",
      rating: "5/5",
      description:
        "Bill Gates shares his thoughts on his favorite business book, “Business Adventures” by John Brooks, which was recommended to him by Warren Buffett."
    },
    {
      name: "Deep Work",
      rating: "3/5",
      description:
        "Deep work is the ability to focus without distraction on a cognitively demanding task."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Classics");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> BookPedia </h1>
      <p>Book Reccomendations</p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button class="linkhover" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <br />
      <div className="book-names" style={{ textAlign: "left" }}>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "150%" }}> {book.name} </div>
              <br />
              <p style={{ fontSize: "medium" }}>{book.description}</p>
              <br />
              <div style={{ fontSize: "medium", color: " #BE185D" }}>
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h3>
        <a id="link" href="https://mahikaportfolio.netlify.app/projects.html">
          View My Projects
        </a>
      </h3>
    </div>
  );
}
