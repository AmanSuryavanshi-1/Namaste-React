import express from 'express';
const app = express();

// $ 7.2) How get calls works
// -> app.get call should be in smallCase always 
// -> and when there is a change you have to run it so that it can get loaded in server link
app.get('/api/restaurants', (req, res)=>{
    const resList = [
        {
                id: 0,
                name: "KFC",
                cuisines: ["Burger", "Biryani", "American", "Chinese"],
                avgRating: ["4.2"],
                price: 45000,
                deliveryTime: "30mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        
        },
        {
                id: 1,
                name: "Pizza Hut",
                cuisines: ["Pizza", "Pasta", "Italian"],
                avgRating: ["4.5"],
                price: 60000,
                deliveryTime: "40mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
           
        },
        {
                id: 2,
                name: "McDonald's",
                cuisines: ["Burger", "Fries", "Fast Food"],
                avgRating: ["3.8"],
                price: 35000,
                deliveryTime: "25mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
        {
                id: 3,
                name: "Sushi Express",
                cuisines: ["Sushi", "Japanese"],
                avgRating: ["4.7"],
                price: 80000,
                deliveryTime: "35mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
            },
        {
                id: 4,
                name: "Taco Bell",
                cuisines: ["Tacos", "Mexican"],
                avgRating: ["4.0"],
                price: 50000,
                deliveryTime: "32mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
        {
                id: 6,
                name: "Taco Bell",
                cuisines: ["Tacos", "Burritos", "Mexican"],
                avgRating: ["4.0"],
                price: 28000,
                deliveryTime: "28mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
          
        },
        {
                id: 7,
                name: "Sushi Palace",
                cuisines: ["Sushi", "Japanese"],
                avgRating: ["4.8"],
                price: 60000,
                deliveryTime: "45mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
         
        },
        {
                id: 8,
                name: "Indian Spice",
                cuisines: ["Indian", "Curry", "Naan"],
                avgRating: ["4.3"],
                price: 38000,
                deliveryTime: "32mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
        {
                id: 9,
                name: "Mama Mia Pizzeria",
                cuisines: ["Pizza", "Calzone", "Italian"],
                avgRating: ["4.4"],
                price: 48000,
                deliveryTime: "38mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
      
        },
        {
                id: 10,
                name: "Smoothie Haven",
                cuisines: ["Smoothies", "Juices", "Healthy"],
                avgRating: ["4.7"],
                price: 32000,
                deliveryTime: "30mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    ];
   
// $ 7.1) Providing data according to the requested parameters in the link below:-
// http://localhost:3000/api/resList?search=KFC
// -> When ever we get these query parameters (?) we need to check what to provide normal list of restaurants or filtered list of it.
// -> We need to make sure that we have the right parameters and then the backend returns the data according to it
// -> check if req.query.search is there then pass it in for loop
// -> Then inside the loop we will take the filteredRestaurant list and return it.

if(req.query.search){
    const filterRestaurants = resList.filter(product => product.name.includes(req.query.search))
    res.send(filterRestaurants);
    return;
}
    setTimeout(()=>{
        res.send(resList);
    },3000)
})
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});