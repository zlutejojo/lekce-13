export default class DataStore {

  constructor() {
    this.categories = [];
    this.products = [];
    this.order = {};
  }


  async loadData() {

    //toto vraci promise
    await Promise.all([
      this.getCategories(),
      this.getProducts()
    ]);
  }

  async getCategories() {

    try {
      const response = await fetch('../data/categories.json');
      const data = await response.json();
      this.categories = data;
    }
    catch {
      console.error('Nepovedlo se nacist kategorie');
    }

  }


  async getProducts() {

    try {
      const response = await fetch('../data/products.json');
      const data = await response.json();
      this.products = data;
    }
    catch {
      console.error('Nepovedlo se nacist produkty');
    }

  }

  getProductById(id) {

    //find je metoda pole a vrati to ten element
    // kdyz mam tri rovna se, tak se porovnava i datovy typ, a ja v tom id mam nazev vlastnosti jakoretezec 1
    return this.products.find(product => product.id == id);

  }






}