// $ 46) Don't use hardcoded data on your file instead build a constant file in utils folder
//       -> You can store all the constant data or links here

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const LOGO_URL = "https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg";


// export default CDN_URL
// export default LOGO_URL
// $ 47) You can not export twice in the same file
//       -> There are two types of exports (default exports & named exports)
//       -> So export multiple times in the same file 
//       -> We use named exports like this :- export const CDN_URL = "link"
//       -> We use named imports in curly braces {} like this :- import { CDN_URL } from '../utils/constant';
//       -> Default imports does not have {} it will be like this:- import CDN_URL from '../utils/constant';