import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
import { ALL_RESTAURANTS_LIST } from '../utils/MockData';;

// $ 49) Creating a filter for top rated restaurants
//       -> Adding onclick(a JS event) to give functionality
//       -> u can add multiple events too.
//       -> passing empty list instead of resList
// $ 49.1) Using const we will not be able to change the values which will be displayed in the cards(NORMAL JS VARIABLE)
//       -> so to change and update the values we should use let for these instances

const Body = () =>{

// $ 50) (STATES & HOOKS) Used When data gets changed when we use filter to filter ListOfRestaurants then data should also get changed in UI.
//       -> This is the main problem which react is solving and other framework's are not able to do.
//       -> We have to keep data and UI layer to change together.
//       -> To do this React provides State variable
//       -> For this we will use a react hook known as useState.

// $ 50.1) REACT HOOKS
//   -> are normal JS utility functions
//   -> all these function are stored in nodeModules we import it from there while creating webapp with react 

//   ~ There are two important React Hooks
//   -> There are 2 Most Important hooks which are used almost 99% of times:-
//   ->   50.1.1) useState(); 
//   ->   50.1.2) useEffect();  

// ~  50.1.1) useState()
//    ->  a) You have to import it inside react form node modules
//    ->  b) It maintains the state of a component
//    ->  c) import { useState } from 'react';
//    ->  d) local state variable is created inside the scope of component in our case inside Body

// State variable
        const [listOfRestaurants , setListOfRestaurants] = useState([]);
// Normal JS variable
    //    let listOfRestaurantsJS = [];

//     e) inside [] data are passed it can be null or a object with a number of restaurants in it
//  -> f) when we do setListOfRestaurants it is used to update the list of restaurants in UI also
//  -> g) Then we can add it in onclick functionality by giving filtered list(a constant created to store the restaurants left after using filtering process) to it :-setListOfRestaurants(filteredList);
//     h) When we click on Top rated restaurants list of restaurants get's filtered according to the logic inside onclick
//     i) Then it is provided to setListOfRestaurants(filteredList) which will then use useState and update the list of restaurants.
//  ~  j) Whenever we want to change the data going to the UI we will give that logic to setListOfRestaurants() and will then change the original data in listOfRestaurants.
//  ~  k) Whenever a state variable changes react ReRender's the component

// ! 51) REACT ALGORITHM(Notes.jsx)

console.log("EP6");

// !EP6
// $ 53) How react renders data from an API
// -> 1st approach => As soon as our page loads we call the API for data then it will render the whole page. Suppose it takes 500ms.
// =>  Loads -> API -> Render

//&  2nd approach is the better approach. It is used in React & it will give you a better UX.
// -> 2nd approach => As soon as our page loads we will render the UI and then call the API for data then it will ReRender the whole page by providing data to it. It will take lesser time.
// =>  Loads -> Render -> API -> ReRender

// $ 54) (useEffect HOOK) HOW TO GET DATA FROM AN API INSIDE REACT APP
// -> useEffect will come from react library some we have to import in the file before using it.
// -> There are 2 arguments which it will pass
// -> There is an arrow function ()=>, 1st argument i.e. a callback function {} and 2nd argument as an array [] ==>  useEffect(()=>{},[]);  <==

//& useEffect(()=>{
//&   console.log("useEffect Called");
//& },[])
//=> console.log("Body rendered");
//& When console.log wil get printed?
// -> After the React component will get rendered it will then ReRender the data from an API.
// -> The code will run the body component will render and then the useEffect is executed and then the callback function is called and then the console.log() will get printed in console.
// -> When you have to do something which you want to be rendered after the react component will get loaded then you have to use useEffect.
//=> The body rendered will be printed first in the console and then the useEffect called will be printed

// $ 55) HOW TO FETCH THE DATA AFTER GETTING IT FROM AN API USING UseEffect

useEffect(()=>{
  setListOfRestaurants(ALL_RESTAURANTS_LIST);
},[]);

// -> we can fetch data by using fetch() it is provided by JS to fetch the data from external sources
// -> using live Swiggy data
// -> This fetch will return a promise
// -> Once the promise get's resolved we get the data.
// -> Then we will convert the data into json.

/* const fetchData = async () =>{
  // setFilteredRestaurants(resList);
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QVUlsbzBaQVE5QTBDeSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwNjg3MDQxMH0.0SGkS_b-nPjyzSqqmV0JVHxSZoZJsh9kqhNEQkjNVaM";
  const data = await fetch(
    `https://api.techspecs.io?api_key=${apiKey}`
  );
  const json = await data.json();
  console.log(json);
  // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} */
// => HOW TO HANDLE PROMISE?
// => 1st-> by .then and catch
// => 2nd-> using async await (mostly preferred)

// $ 56) CORS in notes.md
// $ 57) Getting the data from live API Link(Change link? EP6 44:55)
// -> Rendering data inside body with the live api link instead of using hardcoded Data.
// -> using setListOfRestaurants inside fetchData
// -> Then we will update the new data which is coming in const json to setListOfRestaurants();

return(
        <div className="body">
            <div className="search">Search</div>
            <div className='filter'>

                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4
                    );
                    //~ 50.1.1)  useState()
                    // ->    l) WE ARE MAKING CHANGES IN listOfRestaurants AND STORING IT IN filteredList.
                    // ->    m) THEN UPDATING THE setListOfRestaurants BY PROVIDING IT filteredList
                    setListOfRestaurants(filteredList);
                  }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="RestaurantContainer">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))}
            </div>
        </div>
    )
   };

export default Body

