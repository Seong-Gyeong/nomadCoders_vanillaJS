const quotes = [
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "You must expect great things of yourself before you can do them.",
    author: "Michael Jordan",
  },
  {
    quote: "해가 뜨기 전 새벽이 가장 어두우니까",
    author: "Tomorrow by BTS",
  },
  {
    quote: "Die with memories, not dreams",
    author: "Anonymous",
  },
  {
    quote: "Happiness is a journey, not a destination.",
    author: "Buddha",
  },
  {
    quote:
      "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "남과 비교하면 당신의 행복을 망칠 수 있다",
    author: "꾸뻬씨의 행복여행",
  },
  {
    quote: "귀는 친구를 만들고, 입은 적을 만든다",
    author: "탈무드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
