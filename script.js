// let apiQuote;


// function randomQuote(){
//   const random=apiQuote[Math.floor(Math.random()*apiQuote.length)]
//   console.log(random)
// }
// async function getQuote(){
//   const apiUrl="https://type.fit/api/quotes"
//   try{
//     const response=await fetch(apiUrl);
//     apiQuote=await response.json()
//     randomQuote()
//    // console.log(apiQuote)
//   }
 
//   catch(error){
//  console.log(error)
//   }
// }


// getQuote()


const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')


function randomQuote(){
  const randomQuote=localQuotes[Math.floor(Math.random()*localQuotes.length)]
 // console.log(random)

 //if autor is null return undefine
 if(!randomQuote.author){
  authorText.textContent=('Unknown')
 }
 else{
  authorText.textContent=(randomQuote.author)
 }

 //if quote text is more than 50
 if(randomQuote.text.length>60){
  quoteText.classList.add('long-quote')
 }
 else{
  quoteText.classList.remove('long-quote')
 }


 
    quoteText.textContent=(randomQuote.text)
  
}


randomQuote()