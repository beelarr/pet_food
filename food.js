/**
 * Created by beelarr on 7/26/17.
 */
var Food = (function (){
    let dog_food = []

        return{

        load_food : function () {
            var loader = new XMLHttpRequest();
            loader.addEventListener('load', function () {
                dog_food = JSON.parse(this.responseText);
                show_food(dog_food);

            });
            loader.open('GET', 'dog.json')
            loader.send();

        }
    }



})()


function show_food(dog_food) {
console.log(dog_food.dog_brands[0].types[1].type)
    document.querySelector('#name').innerHTML = dog_food.dog_brands[0].name;
    document.querySelector('#type').innerHTML = dog_food.dog_brands[0].types[0].type
    document.querySelector('#size').innerHTML = dog_food.dog_brands[0].types[0].volumes[0].name
    document.querySelector('#price').innerHTML = dog_food.dog_brands[0].types[0].volumes[0].price
    document.querySelector('#size00').innerHTML = dog_food.dog_brands[0].types[0].volumes[1].name
    document.querySelector('#price00').innerHTML = dog_food.dog_brands[0].types[0].volumes[1].price

    document.querySelector('#type0').innerHTML = dog_food.dog_brands[0].types[1].type
    document.querySelector('#size0').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].name
    document.querySelector('#price0').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].price
    document.querySelector('#size000').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].name
    document.querySelector('#price000').innerHTML = dog_food.dog_brands[0].types[1].volumes[1].price






    document.querySelector('#name1').innerHTML = dog_food.dog_brands[1].name;
    document.querySelector('#type1').innerHTML = dog_food.dog_brands[1].types[0].type
    document.querySelector('#size1').innerHTML = dog_food.dog_brands[1].types[0].volumes[0].name
    document.querySelector('#price1').innerHTML = dog_food.dog_brands[1].types[0].volumes[0].price
    document.querySelector('#type2').innerHTML = dog_food.dog_brands[1].types[1].type
    document.querySelector('#size2').innerHTML = dog_food.dog_brands[1].types[1].volumes[1].name
    document.querySelector('#price2').innerHTML = dog_food.dog_brands[1].types[1].volumes[1].price



}

Food.load_food(show_food)


