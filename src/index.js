import DataStore from "./DataStore";
import Products from "./Products";
import Order from "./Order";

//IIFE - tohle je vykonání nějakého výrazu (expression), pak zatím mám ty kulaté závorky, protože je to jakoby funkce
//vsechno, co je uvnitr takove funkce jsou lokalni (a my nechceme delat globalni promenne)

(
    function(){
        const dataStore = new DataStore();
        const order = new Order(dataStore);
        const products = new Products(dataStore, order);
        

        dataStore.loadData()
        .then(() => {
            products.render();
            //console.table(dataStore.categories);
            //console.table(dataStore.products);
        });
    }
)();


/*
kdyz chci odebrat vlastnost z objektu tak: delete animal.legs;
*/



