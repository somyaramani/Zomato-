//We will require different models in different files. So, just importing them in this file and will import this file whenever required
import { Foodmodel } from './Food/index';
import { Imagemodel } from './Images/index';
import { Menumodel } from './Menu/index';
import { Ordermodel } from './Order/index';
import { RestaurantModel } from './Restaurant/index';
import { Reviewmodel } from './Reviews/index';
import { UserModel } from './Users/index';



export {
    Foodmodel,
    Imagemodel,
    Menumodel,
    Ordermodel,
    RestaurantModel,
    Reviewmodel,
    UserModel
};