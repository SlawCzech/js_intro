// Zmienne

// var x = 42;
// let y = 42;
// const z = 42;

// console.log(x, y, z);

// Redeklaracja
// tworzenie zmiennej drugi raz (w pythonie sie da)
// var x = 666; // ok redeklaracja
// let y = 666; // nie da sie redeklarowac
// const z = 666; // nie da sie redeklarowac

// console.log(x, y, z);

// Reinicjalizacja, ponowne przypisanie wartosci
// x = 666; // ok
// y = 666; // ok
// z = 666; // nie da sie reinicjalizowac
// console.log(x, y, z);

// Hoisting - przenoszenie deklaracji zmienych var, deklaracji funkcji i klas na gore aktualnie przetwarzanego zasiegu
// jest to wazna funkcjonalnosc dla funkcji ktore sie wywoluja wzajemnie
// dla zmiennych uzywanie hoistingu jest zlym pomyslem

// console.log(magic);
// var magic = 42;

// console.log(doMagic());
//
// function doMagic() {
//     return 42
// }

// Zasieg - scope w pythonie jest tylko funkcyjny
// w JS sa dwa rodzaje zasiegow - funkcyjny i blokowy
// blok to jest zestaw dwoch klamerek {} czyli np if tworzy blok
// var ma zasieg funkcyjny (czyli funckja go ogranicza albo ma zasieg globalny; blok nie ogranicza zmiennej var)

// var x = 42;
//
// if (true) {
//     var x = 666;
//     console.log(x);
// }
//
// console.log(x)


// let i const maja zasieg blokowy
// let x = 42;
//
// if (true) {
//     let x = 666;
//     console.log(x);
// }
//
// console.log(x)

//RHS (odczyt) i LHS (zapis) assignment
// rozni sie przeszukiwaniem zasiegow
// let y = [1, 2, 3] to jest przypisanie
// console.log(y[0]) to jest odczyt

let x = 42;

if (true) {
    x = 666;
    console.log(x);
}

console.log(x)