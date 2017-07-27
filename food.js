/**
 * Created by beelarr on 7/26/17.
 */
var Food = (function (){
    let dog_food = []
    let cat_food = []

        return{

        load_food : function () {
            var loader = new XMLHttpRequest();
            loader.addEventListener('load', function () {
                dog_food = JSON.parse(this.responseText);
                show_food(dog_food);

            });
            loader.open('GET', 'dog.json')
            loader.send();

        },

        load_cat_food : function () {
            var cat_loader = new XMLHttpRequest();
            cat_loader.addEventListener('load', function () {
                cat_food = JSON.parse(this.responseText)
                show_cat_food(cat_food);
            });
            cat_loader.open('GET', 'cat.json');
            cat_loader.send();
        }
    }



})()




function show_food(dog_food) {
    document.querySelector('#name').innerHTML = dog_food.dog_brands[0].name;
    document.querySelector('#type').innerHTML = dog_food.dog_brands[0].types[0].type
    document.querySelector('#size').innerHTML = dog_food.dog_brands[0].types[0].volumes[0].name
    document.querySelector('#price').innerHTML = dog_food.dog_brands[0].types[0].volumes[0].price
    document.querySelector('#size00').innerHTML = dog_food.dog_brands[0].types[0].volumes[1].name
    document.querySelector('#price00').innerHTML = dog_food.dog_brands[0].types[0].volumes[1].price

    document.querySelector('#type0').innerHTML = dog_food.dog_brands[0].types[1].type
    document.querySelector('#size0').innerHTML = dog_food.dog_brands[0].types[1].volumes[0].name
    document.querySelector('#price0').innerHTML = dog_food.dog_brands[0].types[1].volumes[0].price
    document.querySelector('#size000').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].name
    document.querySelector('#price000').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].price






    document.querySelector('#name1').innerHTML = dog_food.dog_brands[1].name;
    document.querySelector('#type1').innerHTML = dog_food.dog_brands[1].types[0].type
    document.querySelector('#size1').innerHTML = dog_food.dog_brands[1].types[0].volumes[0].name
    document.querySelector('#price1').innerHTML = dog_food.dog_brands[1].types[0].volumes[0].price
    document.querySelector('#size11').innerHTML = dog_food.dog_brands[1].types[0].volumes[1].name
    document.querySelector('#price11').innerHTML = dog_food.dog_brands[1].types[0].volumes[1].price

    document.querySelector('#type2').innerHTML = dog_food.dog_brands[1].types[1].type
    document.querySelector('#size2').innerHTML = dog_food.dog_brands[1].types[1].volumes[0].name
    document.querySelector('#price2').innerHTML = dog_food.dog_brands[1].types[1].volumes[0].price
    document.querySelector('#size22').innerHTML = dog_food.dog_brands[1].types[1].volumes[1].name
    document.querySelector('#price22').innerHTML = dog_food.dog_brands[1].types[1].volumes[1].price



}


function show_cat_food(cat_food) {
    document.querySelector('#c-name').innerHTML = cat_food.cat_brands[0].name;
    document.querySelector('#c-type').innerHTML = cat_food.cat_brands[0].types[0].type
    document.querySelector('#c-age').innerHTML = cat_food.cat_brands[0].types[0].volumes[0].age

    document.querySelector('#c-size').innerHTML = cat_food.cat_brands[0].types[0].volumes[0].name
    document.querySelector('#c-price').innerHTML = cat_food.cat_brands[0].types[0].volumes[0].price
    document.querySelector('#c-size00').innerHTML = cat_food.cat_brands[0].types[0].volumes[1].name
    document.querySelector('#c-price00').innerHTML = cat_food.cat_brands[0].types[0].volumes[1].price
    document.querySelector('#c-size001').innerHTML = cat_food.cat_brands[0].types[0].volumes[2].name
    document.querySelector('#c-price001').innerHTML = cat_food.cat_brands[0].types[0].volumes[2].price

    document.querySelector('#c-type0').innerHTML = cat_food.cat_brands[0].types[1].type
    document.querySelector('#c-age0').innerHTML = cat_food.cat_brands[0].types[0].volumes[1].age

    document.querySelector('#c-size0').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].name
    document.querySelector('#c-price0').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].price
    document.querySelector('#c-size002').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].name
    document.querySelector('#c-price002').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].price
    document.querySelector('#c-size003').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].name
    document.querySelector('#c-price003').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].price

    document.querySelector('#c-age01').innerHTML = cat_food.cat_brands[0].types[0].volumes[3].age
    document.querySelector('#c-size004').innerHTML = cat_food.cat_brands[0].types[1].volumes[3].name
    document.querySelector('#c-price004').innerHTML = cat_food.cat_brands[0].types[1].volumes[3].price
    document.querySelector('#c-size005').innerHTML = cat_food.cat_brands[0].types[1].volumes[4].name
    document.querySelector('#c-price005').innerHTML = cat_food.cat_brands[0].types[1].volumes[4].price



    console.log(cat_food.cat_brands[0].types[0].volumes[3].age)

    document.querySelector('#c-type01').innerHTML = cat_food.cat_brands[0].types[2].type
    document.querySelector('#c-age02').innerHTML = cat_food.cat_brands[0].types[0].volumes[1].age

    document.querySelector('#c-size006').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].name
    document.querySelector('#c-price006').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].price
    document.querySelector('#c-size007').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].name
    document.querySelector('#c-price007').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].price
    document.querySelector('#c-size008').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].name
    document.querySelector('#c-price008').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].price

    document.querySelector('#c-age03').innerHTML = cat_food.cat_brands[0].types[1].volumes[3].age
    document.querySelector('#c-size009').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].name
    document.querySelector('#c-price009').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].price
    document.querySelector('#c-size010').innerHTML = cat_food.cat_brands[0].types[1].volumes[3].name
    document.querySelector('#c-price010').innerHTML = cat_food.cat_brands[0].types[1].volumes[3].price

    document.querySelector('#c-type02').innerHTML = cat_food.cat_brands[0].types[3].type
    document.querySelector('#c-age04').innerHTML = cat_food.cat_brands[0].types[3].volumes[0].age
    document.querySelector('#c-size011').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].name
    document.querySelector('#c-price011').innerHTML = cat_food.cat_brands[0].types[1].volumes[0].price
    document.querySelector('#c-size012').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].name
    document.querySelector('#c-price012').innerHTML = cat_food.cat_brands[0].types[1].volumes[1].price
    document.querySelector('#c-size013').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].name
    document.querySelector('#c-price013').innerHTML = cat_food.cat_brands[0].types[1].volumes[2].price

    console.log(cat_food.cat_brands[0].types[3])
    document.querySelector('#c-age05').innerHTML = cat_food.cat_brands[0].types[3].volumes[3].age
    document.querySelector('#c-size014').innerHTML = cat_food.cat_brands[0].types[3].volumes[3].name
    document.querySelector('#c-price014').innerHTML = cat_food.cat_brands[0].types[3].volumes[3].price
    document.querySelector('#c-size015').innerHTML = cat_food.cat_brands[0].types[3].volumes[4].name
    document.querySelector('#c-price015').innerHTML = cat_food.cat_brands[0].types[3].volumes[4].price


    document.querySelector('#c-name1').innerHTML = cat_food.cat_brands[1].name;
    document.querySelector('#c-type03').innerHTML = cat_food.cat_brands[1].types[0].type
    document.querySelector('#c-age06').innerHTML = cat_food.cat_brands[1].types[0].volumes[0].age
    document.querySelector('#c-size016').innerHTML = cat_food.cat_brands[1].types[0].volumes[0].name
    document.querySelector('#c-price016').innerHTML = cat_food.cat_brands[1].types[0].volumes[0].price
    document.querySelector('#c-size017').innerHTML = cat_food.cat_brands[1].types[0].volumes[1].name
    document.querySelector('#c-price017').innerHTML = cat_food.cat_brands[1].types[0].volumes[1].price

    document.querySelector('#c-age07').innerHTML = cat_food.cat_brands[1].types[0].volumes[2].age
    document.querySelector('#c-size018').innerHTML = cat_food.cat_brands[1].types[0].volumes[2].name
    document.querySelector('#c-price018').innerHTML = cat_food.cat_brands[1].types[0].volumes[2].price
    document.querySelector('#c-size019').innerHTML = cat_food.cat_brands[1].types[0].volumes[3].name
    document.querySelector('#c-price019').innerHTML = cat_food.cat_brands[1].types[0].volumes[3].price

    document.querySelector('#c-type04').innerHTML = cat_food.cat_brands[1].types[1].type
    document.querySelector('#c-age08').innerHTML = cat_food.cat_brands[1].types[1].volumes[0].age
    document.querySelector('#c-size020').innerHTML = cat_food.cat_brands[1].types[0].volumes[0].name
    document.querySelector('#c-price020').innerHTML = cat_food.cat_brands[1].types[0].volumes[0].price
    document.querySelector('#c-size021').innerHTML = cat_food.cat_brands[1].types[0].volumes[1].name
    document.querySelector('#c-price021').innerHTML = cat_food.cat_brands[1].types[0].volumes[1].price

    document.querySelector('#c-age09').innerHTML = cat_food.cat_brands[1].types[1].volumes[2].age
    document.querySelector('#c-size022').innerHTML = cat_food.cat_brands[1].types[0].volumes[2].name
    document.querySelector('#c-price022').innerHTML = cat_food.cat_brands[1].types[0].volumes[2].price
    document.querySelector('#c-size023').innerHTML = cat_food.cat_brands[1].types[0].volumes[3].name
    document.querySelector('#c-price023').innerHTML = cat_food.cat_brands[1].types[0].volumes[3].price










}

Food.load_food(show_food)
Food.load_cat_food(show_cat_food)


