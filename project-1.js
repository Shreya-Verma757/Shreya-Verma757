// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    person:"Margaret Mead"
}, {
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person:"Benjamin Franklin"
}, {
    quote:"In the end, it's not the years in your life that count. It's the life in your years.",
    person:"Abraham Lincoln"
}, {
    quote:"Life is either a daring adventure or nothing at all.",
    person:"Helen Keller"
}, {
    quote:"You will face many defeats in life, but never let yourself be defeated.",
    person:"Maya Angelou"
}, {
    quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    person:"Marilyn Monroe"
}, {
    quote:"In three words I can sum up everything I've learned about life: it goes on.",
    person:"Robert Frost"
}, {
    quote:"I find that the harder I work, the more luck I seem to have.",
    person:"Thomas Jefferson"
}, {
    quote:"I have learned over the years that when one's mind is made up, this diminishes fear.",
    person:"Rosa Parks"
}, {
    quote:"If at first you don’t succeed, try, try again.",
    person:"W. E. Hickson"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})