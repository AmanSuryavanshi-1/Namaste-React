import react from "react";
import { CDN_URL } from "../utils/constant";
import vegIcon from "../../Assets/veg.png"; 
import nonVegIcon from "../../Assets/nonVeg.png";
import useFallbackImage from "../utils/useFallbackImage";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemCardsData }) => {
    const handleImageError = useFallbackImage();
    // console.log(itemCardsData);

    const dispatch = useDispatch();
    const handleAddItemToCart = (i) => {
      // dispatch an action which we are exporting in our cartSlice.js component 
      dispatch(addItem(i));
    }

    return(
 
        <div>
            {itemCardsData.map((i)=> (
                // <div key={i.card.info.id}>
                //     <h1>{i?.card?.info?.price}</h1>
                //     <h1>{i?.card?.info?.name}</h1>
                //     <p>{i?.card?.info?.description}</p>
                //     <img src={CDN_URL + i?.card?.info?.imageId} alt="" />
                // </div>
                // <h1 className="font-serif text-xl font-bold text-primary-light">{i?.title}</h1>
                <div key={i.card.info.id} className="flex items-center p-4 pt-0 mt-0 overflow-hidden rounded-lg shadow-xl">
                <img className="object-cover w-32 h-32 mr-4 rounded" src={CDN_URL + i?.card?.info?.imageId} alt={i?.card?.info?.name} onError={handleImageError} />  
                {/*  */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-primary-light">
                      {i?.card?.info?.name}
                    </h3>
                    <img
                        src={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                        alt={i?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                        className="inline-block w-6 h-6 ml-2"
                      />
                  </div>
                  {/* Price logic */}
                  <span className="text-primary-white">
                     ₹
                        {
                        (i?.card?.info?.defaultPrice || i?.card?.info?.price > 0)
                        ? (i?.card?.info?.defaultPrice/100 || i?.card?.info?.price / 100)
                        : " "}
                    </span>
                    <p className="text-sm text-green-600">★ {i?.card?.info?.ratings?.aggregatedRating?.rating}
                        {i?.card?.info?.ratings?.aggregatedRating?.ratingCount
                            ? ` (${i?.card?.info?.ratings?.aggregatedRating?.ratingCount})`
                            : " No ratings yet"}
                    </p>
  
                  <div className="flex items-center justify-between">
                  <p className="mb-2 mr-12 text-sm text-primary-light">{i?.card?.info?.description}</p>
{/* Redux -> adding item to cart */}
                    <button className="px-3 py-1 transition duration-300 rounded shadow-md bg-primary-yellow text-primary-bgColor hover:bg-primary-light" 
                    
                    onClick={() => handleAddItemToCart(i)} // passing a callback function // passing item card data in i and giving it to handleADdItemToCart
                    // onClick={handleAddItemToCart(item)} // calling a function just after
                    // onClick={handleAddItemToCart}
                    >
                      ADD+</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    )
}

export default ItemList;