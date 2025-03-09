export const useData = () => {
  const seed = () => {
    useBlogStore().blogs = useBlogStore().blogs.concat(narnia);
  };
  return { seed };
};

const narnia = [
  {
    title: "The Lion, the Witch and the Wardrobe",
    text: "The first book in the Chronicles of Narnia series takes the reader into a magical world hidden behind the doors of an ordinary wardrobe. Four siblings—Peter, Susan, Edmund, and Lucy—are evacuated to the countryside during World War II, where they stumble upon Narnia, a land ruled by the White Witch, who has cast a spell to keep it in perpetual winter. The children meet Aslan, a great lion who represents good and rightful ruler of Narnia. Together with Aslan’s help, the children must battle the White Witch, defeat her evil reign, and bring spring to the land. The book explores themes of courage, sacrifice, and redemption, offering readers a powerful narrative about the power of hope, faith, and bravery in the face of adversity.",
    author: "C.S. Lewis",
    slug: `the-lion-the-witch-and-the-wardrobe-${Date.now()}`,
    date: new Date("1950-10-16"),
  },
  {
    title: "Prince Caspian",
    text: "In the second book of the Narnia series, the Pevensie children return to Narnia, only to find that hundreds of years have passed in the magical land. Narnia is now under the control of the Telmarines, a race of men who have conquered and enslaved the magical creatures of Narnia. The rightful heir to the throne, Prince Caspian, has been raised in secret by his uncle, King Miraz, who wants to keep the throne for himself. With the help of the Old Narnians, the Pevensies join forces with Caspian to reclaim his birthright and restore the magic and freedom to Narnia. Aslan returns to guide the children through this adventure, reminding them of the importance of faith, loyalty, and courage in the fight for what is right.",
    author: "C.S. Lewis",
    slug: `prince-caspian-${Date.now()}`,
    date: new Date("1951-10-15"),
  },
  {
    title: "The Voyage of the Dawn Treader",
    text: "Edmund, Lucy, and their cousin Eustace are once again swept into Narnia, this time by a picture that comes to life. They join King Caspian aboard the ship Dawn Treader as it sails on a quest to find seven lost lords and journey to the end of the world. Along the way, they encounter strange islands, mythical creatures, and face various trials that test their courage and morality. Each island offers its own challenges, with deeper meanings about temptation, personal growth, and redemption. This is a story of inner transformation, as the children, especially Eustace, deal with their flaws and grow into better versions of themselves. Themes of self-discovery, hope, and the importance of kindness and compassion run through the narrative.",
    author: "C.S. Lewis",
    slug: `the-voyage-of-the-dawn-treader-${Date.now()}`,
    date: new Date("1952-09-15"),
  },
  {
    title: "The Silver Chair",
    text: "Jill Pole and Eustace Scrubb are sent to Narnia by Aslan to rescue Prince Rilian, the son of King Caspian, who has been kidnapped by the mysterious Green Witch. Their quest takes them deep into the heart of Narnia, through dark caves and dangerous territories, where they must face treacherous creatures, solve riddles, and follow the signs that Aslan has given them. Along the way, Jill and Eustace must confront their own fears and doubts, learning valuable lessons about courage, trust, and obedience. The story reveals the importance of listening to guidance and the strength that can come from working together, even in the most difficult circumstances.",
    author: "C.S. Lewis",
    slug: `the-silver-chair-${Date.now()}`,
    date: new Date("1953-09-07"),
  },
  {
    title: "The Horse and His Boy",
    text: "This standalone novel takes place during the events of 'The Lion, the Witch, and the Wardrobe,' but follows a different set of characters. Shasta, a young boy raised by an abusive fisherman, escapes with a talking horse named Bree. Together, they embark on a dangerous journey to Narnia, seeking freedom from their oppressive lives. Along the way, they encounter new friends, fight enemies, and uncover a conspiracy that threatens Narnia itself. Themes of self-discovery, bravery, and destiny are explored as Shasta learns that he is not the person he thought he was and discovers his true purpose in life. This is a thrilling adventure that emphasizes the importance of friendship, loyalty, and trust in a higher power.",
    author: "C.S. Lewis",
    slug: `the-horse-and-his-boy-${Date.now()}`,
    date: new Date("1954-10-06"),
  },
  {
    title: "The Magician's Nephew",
    text: "A prequel to 'The Lion, the Witch, and the Wardrobe,' this book tells the origins of Narnia and the creation of the world. Two children, Digory Kirke and Polly Plummer, are transported to different worlds through the magical rings of Digory’s uncle, Andrew, a magician who dabbles in forbidden magic. Their adventures take them to the dying world of Charn, where they unwittingly awaken an evil queen named Jadis, who will become the White Witch in the future. They also witness the creation of Narnia by Aslan, a powerful and mysterious lion. This book explores themes of good versus evil, the consequences of curiosity, and the importance of making the right choices.",
    author: "C.S. Lewis",
    slug: `the-magicians-nephew-${Date.now()}`,
    date: new Date("1955-03-17"),
  },
  {
    title: "The Last Battle",
    text: "The final book in the Chronicles of Narnia series marks the end of Narnia itself. Aslan returns for one last battle against the forces of evil, led by the false King Tirian. The land of Narnia faces destruction as the false Aslan—an imposter who manipulates the people and animals—leads them toward their doom. The Pevensies and other familiar characters return to help in the final stand, where the ultimate battle between good and evil is fought. This conclusion to the series explores themes of faith, redemption, and the afterlife, leaving readers with a message of hope and the promise of a greater, eternal world beyond Narnia.",
    author: "C.S. Lewis",
    slug: `the-last-battle-${Date.now()}`,
    date: new Date("1956-09-06"),
  },
];
