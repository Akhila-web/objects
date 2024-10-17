// question 1
person ={
    firstName:"Akhila",
    lastname:"cholleti",
    age:22,

};
console.log(person.firstName)
person.city="Newyork";
console.log(person)

// question 2
product={
    name: "iphone16",
    price:70000,
    instock:true,


};
product.price=100000;
console.log(product)

// question3
library={
    mystery:{
        books:["shrelockhomes","gonegirl"]
    },
    fantacy:{
        books:["the hobbit","harry potter","the witcher"]
    }

}
library['sciencefiction']={
    books:["dune","enders game"]
};
console.log(library.fantacy.books[0])
delete library.mystery;
console.log(library);

// question4
user={
    username:"akhila",
    email:"akhilacholleti@gmail.com",
    address:{
        city:"karimnagar",
        stake:"telangana",
        zip:"505001"

    }

};
Object.freeze(user);
user.email="akhila@gamil.com";
console.log(Object.isFrozen(user));
user.phone="1234567890";
console.log(user)
// here we can not add or modify or update an object when freeze method is used

// question5
car={
    make:"mahindra thar",
    model:"earthedition",
    price:1200000,
};
Object.seal(car);
car.price=1250000;
console.log(Object.isSealed(car));
console.log(Object.isExtensible(car));
console.log(car)



// question6
const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
  console.log(store.products.groceries.vegetables.spinach.stock)
  console.log(store.products.electronics.laptops.hp.Pavilion15.price)
  