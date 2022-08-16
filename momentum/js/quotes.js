const quotes = [
{
    quote : "Happiness depends upon ourselves.",
    author : "Aristotle"
},
{
    quote : "The purpose of our lives is to be happy.",
    author : "Dalai Lama"
},
{
    quote : "Your time is limited, so don’t waste it living someone else’s life.",
    author : "Steve Jobs"
},
{
    quote : "You must expect great things of yourself before you can do them.",
    author : "Michael Jordan"
},
{
    quote : "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
    author : "Warren Buffett"
},
{
    quote : "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author : "Buddha"
},
{
    quote : "Happiness is a journey, not a destination.",
    author : "Buddha"
},
{
    quote : "Happiness is not something readymade. It comes from your own actions.",
    author : "Dalai Lama"
},
{
    quote : "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author : "Audrey Hepburn"
},
{
    quote : "Happiness is the secret to all beauty. There is no beauty without happiness.",
    author : "Christian Dior"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;