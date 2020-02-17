export default class Order {

  constructor(dataStore) {
    this.dataStore = dataStore;
  }

  add(id) {

    //objekt ma tu vlastnost, ze kdyz neexistuje id, tak ho vytvori
    // tady nemuzu jen pricitat jedna, protze nic plus jedna je NaN (not a number)
    // kdyz pouziju hranaty zavorky, tak se vlastnost muze jmenovat i cislo (1, 2, atd), pres tecku se to neda udelat
    this.dataStore.order[id] = this.dataStore.order[id] + 1 || 1;


    console.log(this.dataStore.order);
    this.update();
    
  }


  update() {
    for(let id in this.dataStore.order) {
      let produkt = this.dataStore.getProductById(id);
      console.log('produkt ' + produkt.name + ' : ' + this.dataStore.order[id] +'x')
    }
  }



}