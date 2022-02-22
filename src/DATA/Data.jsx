import React from 'react'
import Home from '../Home'

const data = (props) => {
    var data = [
        {
            
            "id": 1,
            "title": "Chapati",
            "desc": " chapatis are a healthy option to add to your daily diet. Packed full of vitamins and minerals, it can help improve health and prevent diseases.",
            "url": "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "price": "10",
          },
          {
            "id": 2,
            "title": "Pickle",
            "desc": "Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in vinegar. The pickling procedure typically affects the food's texture and flavor.",
            "url": "https://images.pexels.com/photos/9005955/pexels-photo-9005955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "price": "100",
          },
          {
            "id": 3,
            "title": "Curd",
            "desc": "Good Souce of protin",
            "url": "https://images.pexels.com/photos/3212808/pexels-photo-3212808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "price": "25",
          },
          {
            "id": 4,
            "title": "Sweet",
            "desc": "Gulab Jamun is a very famous sweet dish of india",
            "url": "https://images.pexels.com/photos/7449105/pexels-photo-7449105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "price": "400",
          },
          {
            "id": 5,
            "title": "Daal",
            "desc": "In Indian cuisine, dal are dried, split pulses that do not require soaking before cooking",
            "url": "https://media.gettyimages.com/photos/dal-fry-in-a-bowl-lemon-wedges-and-onion-rings-picture-id813258134?s=2048x2048",
            "price": "400",
          },
          {
            "id": 6,
            "title": "Panner Butter Masala",
            "desc": "Made with an aromatic and creamy tomato cashew base, this Paneer Curry recipe is a dinnertime delight! Unlike my Paneer Butter Masala,",
            "url": "https://imagevars.gulfnews.com/2021/08/30/Paneer-Masala-_17b9680cdfb_base.jpg",
            "price": "260",
          },
          {
            "id": 7,
            "title": "Chiken Fry",
            "desc": "Fried chicken is a classic, much-loved chicken dish across the globe. It is a must on the menu of all the restaurants and street food stalls selling non-vegetarian dishes in India,",
            "url": "https://spoonsofflavor.com/wp-content/uploads/2020/08/Easy-Chicken-Fry-Recipe-1.jpg?ezimgfmt=ng:webp/ngcb23",
            "price": "180",
          },

    ]
  return (
    <div>
           <Home data={data}/>
    </div>
  )

}
export default data
