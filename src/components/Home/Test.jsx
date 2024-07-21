import React from 'react';
import './test.css';

const ChallengeCard = ({ title, sections, questions, description, imageSrc, imageAlt,link }) => (
  <div
    className="rounded-lg border  text-card-foreground shadow-sm bg-muted p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-customGray m-2.5"
    data-v0-t="card"
  >
    {/* #f4f4f500 */}
    <div className="relative overflow-hidden rounded-md">
      <img
        src={imageSrc}
        alt={imageAlt}
        width="400"
        height="225"
        className="w-full h-48 object-cover"
        style={{ aspectRatio: '400/225', objectFit: 'cover' }}
        />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            >
            <line x1="8" x2="21" y1="6" y2="6"></line>
            <line x1="8" x2="21" y1="12" y2="12"></line>
            <line x1="8" x2="21" y1="18" y2="18"></line>
            <line x1="3" x2="3.01" y1="6" y2="6"></line>
            <line x1="3" x2="3.01" y1="12" y2="12"></line>
            <line x1="3" x2="3.01" y1="18" y2="18"></line>
          </svg>
          <span>{sections} Sections</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            >
            <path d="M12 17h.01"></path>
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
            <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
          </svg>
          <span>{questions} Questions</span>
        </div>
      </div>
    </div>
            
    <div className="mt-6">
      <p className="text-muted-foreground text-justify w-[300px]">{description}</p>
      <a
        className="inline-flex h-10 bg-blue-500 text-white items-center justify-center rounded-md bg-secondary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
        href={"challenge/"+link}
      >
        Start Challenge
      </a>
    </div>
  </div>
);



export default ChallengeCard;
const Test = () => {
  const challenges = [
    {
      title: "Two Sum",
      sections: 3,
      questions: 15,
      description: "Solve the classic Two Sum problem and learn how to efficiently find two numbers in an array that add up to a target value.",
      imageSrc: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
      imageAlt: "Two Sum"
    },
   
    {
      title: "Binary Tree Traversal",
      sections: 5,
      questions: 25,
      description: "Learn how to traverse binary trees with our Binary Tree Traversal challenge and get comfortable with different traversal techniques.",
      imageSrc: "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
      imageAlt: "Binary Tree Traversal"
    },
    {
      title: "Dynamic Programming",
      sections: 6,
      questions: 30,
      description: "Dive into the world of Dynamic Programming with our comprehensive challenge and solve a variety of problems using this powerful technique.",
      imageSrc: "https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png",
      imageAlt: "Dynamic Programming"
    },
  ];

  
};

