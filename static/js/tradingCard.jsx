"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];


function TradingCard(props) {
  return (
      <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill:{props.skill} </h2>
    </div>
  );
}

function TradingCardContainer(tradingCardData) {
    
    
    const tradingCards = [];
    for (const card of tradingCardData) {
        tradingCards.push(<TradingCard
        name = {card.name}
        skill = {card.skill}
        img = {card.imgUrl}

        />)
 
    };

    return  (
        <div>
        {tradingCards}
        </div>
    );
       
}

 


ReactDOM.render(
  <TradingCardContainer />,
  document.querySelector('#container')
);















// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// // MY CARD
// ReactDOM.render(
//     (
//       <TradingCard
//         name="seedpy"
//         skill="spitting out seeds"
//         imgUrl="/static/img/seedpy.jpg"
//       />
//     ),
//     document.querySelector('#seedy')
//   );

//   ReactDOM.render(
//     (
//       <TradingCard
//         name="polymorphism"
//         skill="scratch"
//         imgUrl="/static/img/polymorphism.jpg"
//       />
//     ),
//     document.querySelector('#polymorphism')
//   );