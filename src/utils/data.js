const foodChoicesForBreakfast = [
  {id: 1, name: 'Scrambled eggs with asparagus and tomatoes', stars: 4, price: '', unhealthy: '', image_uri:'https://www.sydneymarkets.com.au/recipes/images/asparagus-and-parmesan-scrambled-eggs.jpg', meal_time: 'breakfast'},
  {id: 2, name: 'Greek yoghurt with mixed berries and chopped almonds', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.almonds.com/sites/default/files/2020-07/abc_BreakfastPairing_A_re01.jpg', meal_time: 'breakfast'},
  {id: 3, name: 'Oatmeal pancakes with blueberries', stars: 4, price: 0, unhealthy: '', image_uri:'https://s23209.pcdn.co/wp-content/uploads/2012/10/IMG_6988-360x360.jpg', meal_time: 'breakfast'},
  {id: 4, name: 'Greek yoghurt with mixed nuts, berries, and honey', stars: 4, price: 0, unhealthy: '', image_uri:'https://i0.wp.com/thedomesticdietitian.com/wp-content/uploads/2021/01/pomegranate-greek-yogurt-bowl-4.jpg?w=870&ssl=1', meal_time: 'breakfast'},
  {id: 5, name: 'Porridge with shredded chicken', stars: 5, price: 0, unhealthy: '', image_uri:'https://www.theworktop.com/wp-content/uploads/2019/11/Chicken-Congee-Slow-Cooker.jpg', meal_time: 'breakfast'},
  {id: 6, name: 'Kaya toast with soft-boiled eggs', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.seriouseats.com/thmb/TO4m30tEDM-ybj7rk0BPT7SE_Mg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140917-singapore-soft-eggs-kaya-toast-1-16ed35963ac446248a5749977e508fc9.jpg', meal_time: 'breakfast'},
  {id: 7, name: 'Whole wheat pancakes with fresh fruit toppings', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Whole-Wheat-Pancakes-Recipe-1-1200.jpg', meal_time: 'breakfast'},
  {id: 8, name: 'Scrambled eggs with cherry tomatoes', stars: 4, price: 0, unhealthy: '', image_uri:'https://images.eatthismuch.com/img/906301_tabitharwheeler_ed977b10-1407-4c8c-95b4-5cc414a1f618.jpg', meal_time: 'breakfast'},
  {id: 9, name: 'Scrambled eggs with spinach', stars: 4, price: 0, unhealthy: '', image_uri:'https://images.eatthismuch.com/img/905630_elm333_5bceb318-0dc9-4d99-8a82-a92b3fa9e088.jpg', meal_time: 'breakfast'},
  {id: 10, name: 'Scrambled eggs with bell peppers', stars: 4, price: 0, unhealthy: '', image_uri:'https://static01.nyt.com/images/2014/06/04/dining/04CHILE2/04JPCHILE2-articleLarge.jpg?w=1280&q=75', meal_time: 'breakfast'},
  {id: 11, name: 'Oatmeal with chopped apples and cinnamon', stars: 3, price: 0, unhealthy: '', image_uri:'https://simple-veganista.com/wp-content/uploads/2016/03/healthy-apple-baked-oatmeal-recipe-14.jpg', meal_time: 'breakfast'},
  {id: 12, name: 'Quinoa porridge with mixed fruits', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.simplyquinoa.com/wp-content/uploads/2020/01/ultimate-superfood-quinoa-porridge-7.webp', meal_time: 'breakfast'},
  {id: 13, name: 'Whole wheat toast with poached/scrambled/fried eggs', stars: 3, price: 0, unhealthy: '', image_uri:'https://images.squarespace-cdn.com/content/v1/55f9c9abe4b09e993da5f156/1539174364166-TIQK5VFA6ANJ2G8X028L/image-asset.png?format=2500w', meal_time: 'breakfast'},
  {id: 14, name: 'Porridge with shredded fish', stars: 5, price: 0, unhealthy: '', image_uri:'https://salu-salo.com/wp-content/uploads/2020/12/Fish-Congee-3.jpg.webp', meal_time: 'breakfast'},
  {id: 15, name: 'Oatmeal with sliced bananas and walnuts', stars: 3, price: 0, unhealthy: '', image_uri:'https://www.effortlessfoodie.com/wp-content/uploads/2022/03/banana-porridge-4-300x300.jpg', meal_time: 'breakfast'},
  {id: 16, name: 'Scrambled eggs with bok choy', stars: 4, price: 0, unhealthy: '', image_uri:'https://www.abetterchoice.com.au/app/uploads/2021/07/Asian-Style-Scrambled-Eggs-800x520.jpg?x89200', meal_time: 'breakfast'},
  {id: 17, name: 'Spinach and mushroom omelet', stars: 5, price: 0, unhealthy: '', image_uri:'https://www.exceedinglyvegan.com/vegan/thumbnails/mainimage/8814/9743/4249/vegan-egg-omelette.jpg', meal_time: 'breakfast'},
];


const foodChoicesForLunch = [
  {id: 1, name: 'Black bean and mushroom soup with a side of mixed greens', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://addapinch.com/wp-content/uploads/2017/10/mushroom-black-bean-soup-recipe-0020.jpg', meal_time: 'lunch'},
  {id: 2, name: 'Chickpea and bell pepper curry with a side of brown rice', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://www.sleekgeek.co.za/wp-content/uploads/2018/09/recipe-chickpeas-curry.jpg', meal_time: 'lunch'},
  {id: 3, name: 'Eggplant and black bean stir-fry with brown rice', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://proveg.com/us/wp-content/uploads/sites/9/2021/06/ezgif.com-gif-maker-8-2.jpg', meal_time: 'lunch'},
  {id: 4, name: 'Bok choy and tofu stir-fry with brown rice', stars: 3, price: 0, disease: 'Diabetes', image_uri: 'https://naturallyella.com/wp-content/uploads/2019/05/crispy_bok_choy-bowls-1.jpg', meal_time: 'lunch'},
  {id: 5, name: 'Chickpea and chicken salad with spinach', stars: 3, price: 0, disease: 'Diabetes', image_uri: 'https://img.taste.com.au/hQTQOlEO/w720-h480-cfill-q80/taste/2016/11/chicken-spinach-and-chickpea-salad-13284-1.jpeg', meal_time: 'lunch'},
  {id: 6, name: 'Chicken and asparagus salad with black beans', stars: 3, price: 0, disease: 'Diabetes', image_uri: '', meal_time: 'lunch'},
  {id: 7, name: 'Beef and cabbage stir-fry with lentils', stars: 4, price: 0, disease: 'Diabetes', image_uri: '', meal_time: 'lunch'},
  {id: 8, name: 'Broccoli and tofu stir-fry with brown rice', stars: 4, price: 0, disease: 'Diabetes', image_uri: 'https://www.myplantifulcooking.com/wp-content/uploads/2020/11/vegan-asian-tofu-broccoli-mushroom-stir-fry-2.jpg', meal_time: 'lunch'},
  {id: 9, name: 'Eggplant and lentil stir-fry with brown rice', stars: 4, price: 0, disease: 'Diabetes', image_uri: 'https://a-la-damaris.com/wp-content/uploads/2022/01/linzen-en-rijst-copy-800x530.jpg.webp', meal_time: 'lunch'},
  {id: 10, name: 'Beef and broccoli stir-fry with whole wheat noodles', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://therecipecritic.com/wp-content/uploads/2017/08/beeflomein2.jpg', meal_time: 'lunch'},
  {id: 11, name: 'Bell pepper stuffed with quinoa and ground turkey/beef', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://theheirloompantry.co/wp-content/uploads/2022/08/turkey-and-quinoa-stuffed-bell-peppers-without-rice-the-heirloom-pantry-03.jpg', meal_time: 'lunch'},
  {id: 12, name: 'Chicken and asparagus stir-fry with lentils', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://images.ricardocuisine.com/services/recipes/992x1340_59520615554412ad8d2d2d.jpg', meal_time: 'lunch'},
  {id: 13, name: 'Chicken and green bean stir-fry with brown rice', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://confessionsofafitfoodie.com/wp-content/uploads/2023/01/Ground-Chicken-Stir-Fry-.jpeg', meal_time: 'lunch'},
]

const foodChoicesForDinner = [
  {id: 1, name: 'Lentil and turkey stir-fry with quinoa', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://i0.wp.com/sepcooks.com/wp-content/uploads/2021/07/3DD96B95-F1C8-40D2-99F9-74B73EF16957_1_201_a.jpeg?zoom=2&resize=665%2C435&ssl=1', meal_time: 'dinner'},
  {id: 2, name: 'Shrimp and quinoa stir-fry with brown rice', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://minuterice.com/wp-content/uploads/2019/05/Easy-Sesame-Hoisin-Shrimp-w-Quinoa.jpg.webp', meal_time: 'dinner'},
  {id: 3, name: 'Tempeh and bell pepper stir-fry with quinoa', stars: 2, price: 0, disease: 'Diabetes', image_uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2022/12/Tempeh-Quinoa-Stir-Fry_Kikkoman.png', meal_time: 'dinner'},
  {id: 4, name: 'Mushroom and tofu stir-fry with brown rice', stars: 3, price: 0, disease: 'Diabetes', image_uri: 'https://cdn.squats.in/thumbnail/222592_FT_1210ac01-da61-4690-8f4a-c7b741e8b8d8.jpeg', meal_time: 'dinner'},
  {id: 5, name: 'Mushrooms and tempeh stir-fry with quinoa', stars: 3, price: 0, disease: 'Diabetes', image_uri: 'https://starkel.wpenginepowered.com/wp-content/uploads/2018/09/31449ad4-dca8-4761-827b-03662d20429f.jpg', meal_time: 'dinner'},
  {id: 6, name: 'Salmon and asparagus with quinoa', stars: 4, price: 0, disease: 'Diabetes', image_uri: 'http://tastendash.com/wp-content/uploads/Salmon-1.jpg', meal_time: 'dinner'},
  {id: 7, name: 'Turkey and mushroom stir-fry with brown rice', stars: 4, price: 0, disease: 'Diabetes', image_uri: 'https://m.ftscrt.com/static/recipe/de491b41-b525-4019-9681-deede03bb5ce.jpg', meal_time: 'dinner'},
  {id: 8, name: 'Whole wheat pasta with shrimp and bell peppers', stars: 4, price: 0, disease: 'Diabetes', image_uri: 'https://www.wellplated.com/wp-content/uploads/2018/10/Spicy-Shrimp-Pasta-with-red-sauce.jpg', meal_time: 'dinner'},
  {id: 9, name: 'Chicken curry (with carrots) with brown rice', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://babyfoode.com/wp-content/uploads/2019/07/curry_chicken_veggies-3-2.jpg', meal_time: 'dinner'},
  {id: 10, name: 'Grilled fish and green beans with brown rice', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://images.eatsmarter.com/sites/default/files/styles/576x432/public/grilled-swordfish-with-green-beans-and-rice-521100.jpg', meal_time: 'dinner'},
  {id: 11, name: 'Grilled chicken and spinach with brown rice', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://eatcleanbro.com/cdn/shop/products/4.-basics-with-spinach_2.png?v=1681220943&width=1920', meal_time: 'dinner'},
  {id: 12, name: 'Grilled fish with green beans and lentils', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://d1v30bmd12dhid.cloudfront.net/static/version6/content/dam/waitrose/recipes/images/g/201008r01.jpg/_jcr_content/renditions/cq5dam.thumbnail.200.200.png', meal_time: 'dinner'},
  {id: 13, name: 'Whole wheat pasta with grilled chicken and bell peppers', stars: 5, price: 0, disease: 'Diabetes', image_uri: 'https://outgrilling.com/wp-content/uploads/2022/10/Grilled-Chicken-Spaghetti-Recipe-photo.jpg.webp', meal_time: 'dinner'},
]

module.exports = {
  foodChoicesForBreakfast,
  foodChoicesForLunch,
  foodChoicesForDinner
}