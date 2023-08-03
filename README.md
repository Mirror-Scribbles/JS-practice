# JS-practice

/ let nickname  = "mirror scribbles"

// console.log(nickname.length)

// console.log(nickname.toLocaleLowerCase())

// console.log(nickname.toLocaleUpperCase())

// console.log(nickname.indexOf("o"))

// console.log(nickname.replace("mirror", "art"))


// let nickname2 = "             black mirror                 "

// console.log(nickname2);
// console.log(nickname2.trim());

// console.log(nickname2.includes("k"));




// template String


// let nickname  = "mirror scribbles"

// let age = 24;

// let name = "julian andres"

// let job = "sitel"

// console.log(`hey coste! did you know that ${name}'s nickname was ${nickname.toUpperCase()}? also he is ${age} and is working at ${job}? I bet you did know that, did you?`)


// practicing math Object


// math, E -  math. pi 


// let num= 4.43

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.abs(num));

// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.pow(num));
// console.log(Math.random(num));












// condicionales, practica. 

// operadores logicos,

// && and 

// || o 

// Los operadores de igualdad 

// ===	igual valor y con el tipo
// !=	no es igual
// !==	no igual valor o no igual tipo
// >	mas grande que
// <	menos que
// >=	Mayor qué o igual a
// <=	Menos que o igual a

// operadores de conparacion. 

// let name =prompt("cual es tu numbre?")
// let age = 36;
//  age = prompt("que edad tienes?")

//  if(age<36) {console.log(`Hola ${name}, pense que tenias mas de 36 pero eres aun bien joven, apenas con ${age}  años, pense que eras mas viejo, hahaha`)
// } else{
//     console.log(`Hola ${name} si que estas viejito parce.`)
// }





// ingresa la edad del usuario, 

// el sitema te saluda  dependiendo que edad tenga el usuario,

// de 1 a 8 años: espero que sepas que un foturo muy brillantes te espera por delante,

// de 9 a 15 años, espero, espero que estes yendo a la escuela y te estes portando bien, 


// de 15 a 20 ya tienes mas de 15 espero que te estes preparando para el futuro ya que la vida se pone mas duras depues de los (edad)

// 30 a 45, ya an pasado unos años, que has echo con tu vida? espero que a tus 20 ayas trabajado todo lo que te propusites  a los (10 años)

// 45 a 59, me alegra saber que ayas llegado hasta este puento, espero que la vida te haya tratado bien,

// 60 a 80, sabes algo, la vida fue buena contigo.


// let age = prompt("cual es tu edad actualmente?")

// if(age>=1 && age<=8){
//     document.write("<h1>aun que aun eres un niño, pero espero que sepas, que tienes por delantes un mundo de posibilidades, y que la vida sera buena contigo.</h1>")
// }else if(age>=9 && age<=15){
// document.write(`<h1>Espero que este yendo a la escuela, y que te estes portando bien, para que asi puedas ayudar a tus padres, ya que la vida se empieza a poner dura despues de los ${age} </h1`)
// }else if(age>=16 && age<=29){
//     document.write(`<h1>ahora ya tienes ${age} años, espero que ayas estudiado y te ayas preparado para los golpes de la vida, que son mas duros depues de los 20.</h1>`)

//     }
//     else if(age>=30 && age<=45){
//         document.write(`<h1>Ya an pasado unos años espero que en tus 20s, ayas trabajado duro para que a esta edad ya tengas algo construido, ese era tu sueño, no? trabajar duro a tus 20s para que a tus ${age} ya tuvieras algo de lo que soñaste cuando niño, o todo lo que cuando niño soñaste, espero...</h1>`)
//     }else if(age>=46 && age<=59){
//         document.write("<h1>Me alegra saber que la vida te aya traido hasta este punto, espero que lo ayas echo todo bien, que tengas la familia que querias, y que ahora solo sea disfrutar de las ultimas sendas de tu vida, sin arepentimientos y con mas buenos recuerdos que malos.</h1>")
//     }else if(age>=60 && age<=80){
//         document.write(`<h1> sabes algo a tus ${age} considero que la vida fue buena contigo.</h1>`)
//     }
//     else{
//         document.write(`<h1> creo que con ${age} años, a esa edad ya estas muy viejo para un consejo mio .</h1>`)
//     }


// fin de paractica del if





// let nick = "hola"

// console.log(nick.repeat(3));






// condicional switch practica 

// sintaxis simple: 

// switch(evalucion) {
//     case n:
//         //codigo
//         break;
//         case n2:
//             // codigo
//             break;

//             default:
//                 //codigo
// }


// sintaxis multiple:
// switch(evaluaciones){
//     case n:
//     case n2:
//     case n3:
//     case n4:
//         //codigo
//         break;
//         case n5:
//         case n6:
//             //codigo
//             break;
//             default:
//                 //codigo

// }

// let day = prompt("what's today's date?")

// // day.toString()
// switch(day){
//     case "Monday":
//         console.log("today you need to wake up at 4:00 A.M")
//         break;
//         case "Tuesday":
//             console.log("today you need to wake up at 4:00 A.M")
//             break;
//             case "Wednesday":
//                 console.log("today you need to wake up at 4:00 A.M")
//                 break;
//                 case "Thursday":
//                     console.log("today you need to wake up at 9:00 A.M")
//                     break;
//                     case "Friday":
//                         console.log("today you need to wake up at 8:00 A.M")
//                         break;
//                         case "Saturday":
//                             console.log("today you need to wake up at 8:00 A.M")
//                             break;
//                             default:
//                                 console.log("not found, do you want to keep looking?")

// }


// let week = prompt("in what week are we?")

// if(week==1){
//     console.log("in this week we are going to play hide and seek");

// }else if(week==2){
//     console.log("in this week we are staydying");

// }else if(week==3){
//     console.log("in this week we are sleeping all day man");

// }else if(week==4){
//     console.log("were are going to the bitches jejej");

// }else{
//     console.log("no matches")
// }

// console.log("any other reseach?");netptunopnet


// let planet = prompt("que planeta te gustaria investigar, en la lista tenemos mercurio, venus, tierra marte jupiter, saturno, urano, neptuno")

// switch(planet){
// case "mercurio":
// console.log("El planetaMercurio: fue nombrado de esta manera en honor a Hermes, el mensajero de los dioses griegos del Olimpo. Más tarde los romanos lo bautizaron, tal y como ocurre con el resto de los planetas, con el equivalente en su mitología para los dioses griegos, en este caso Mercurio. Y con ese nombre ha llegado hasta nuestros días, Con un tamaño tan solo un poco mayor al de nuestra luna, es el planeta más pequeño del sistema solar y el más cercano al Sol. Se trata del menor de los planetas rocosos del sistema solar y de manera similar a la Luna, presenta una superficie plagada de cráteres, en parte, debido a la finísima y casi ausente atmósfera (exosfera) que le rodea. Con una velocidad de 170.5030 kilómetros por hora, también se trata del planeta que viaja más rápido a través del espacio -de aquí su nombre- ya que la velocidad de un planeta incrementa con su cercanía a la estrella que orbita.Por su proximidad al Sol, desde la superficie de Mercurio nuestro astro se vería 3 veces más grande que desde la Tierra, y su brillo sería hasta 7 veces superior. También cabría esperar que, por su cercanía al Sol, Mercurio fuera el planeta más caliente del sistema solar, sin embargo, contradiciendo la intuición, este honor es para el Venus, pues es en Venus que, debido a su densa atmósfera, se registran las temperaturas más altas de todo el sistema solar, ")
// break;

// case "venus":
// console.log("EL PLANETA VENUS :Solo tras el Sol y la Luna, Venus es el objeto más brillante que se puede ver en el firmamento desde la Tierra. Esto propició, ya desde la antigüedad, que por su brillo y belleza los romanos asociaran el planeta con la diosa de la belleza y el amor, Venus, de la cual recibe su nombre.Parte de la intensidad del brillo de Venus es debido a la cercanía con la Tierra, ya que se trata del planeta que más próximo se encuentra de nosotros. También es el segundo planeta más cercano al Sol. Se trata de otro de los 4 planetas rocosos del sistema solar y debido a la gran similitud tanto en tamaño como en densidad con nuestro planeta, en ocasiones es denominado como el planeta gemelo de la Tierra.")

// break; 

// case "tierra":
//     console.log("EL PLANETA TIERRA : Por simple que pueda parecer, el nombre de nuestro planeta, no obstante, también tiene un origen en la mitología griega. Así, en este caso, los antiguos griegos denominaron a la Tierra en honor a la diosa Gea, la cual era adorada como la creadora del universo y la madre, tanto de los dioses primordiales, los titanes, como de los primeros humanos. Al igual que sucede con el resto de planetas, posteriormente los romanos la bautizaron con el nombre de su diosa equivalente, Terra, el cual ha transcendido hasta el presente con las evidentes adaptaciones. "
//     )

//     break;
    
//     case "marte":
//         console.log("El planeta Marte recibe su nombre en honor a Ares, el dios griego de la guerra. Más tarde los romanos lo bautizaron, tal y como ocurre con el resto de los planetas, con el equivalente en su mitología para los dioses griegos, en este caso Marte. Marte, también conocido como el planeta Rojo, es el más alejado del Sol de los cuatro planetas rocosos del sistema solar, y el segundo más cercano a la Tierra, aunque cuenta aproximadamente con solo la mitad de su tamaño. Se trata de un planeta sencillo de identificar en el firmamento nocturno debido al brillo rojizo que hace honor a su nombre.")
//         break   
    
//     case "jupiter":
//         console.log(" EL PLANETA JÚPITER: Como no podía ser de otra manera, Júpiter, con más del doble de la masa que el resto de planetas juntos, es el planeta más grande del sistema solar por lo que recibe su nombre del dios entre los dioses del Olimpo, Zeus; Júpiter en la mitología romana.Y es que todo en Júpiter adquiere magnitudes extraordinarias. Para hacernos una idea, en torno a la línea del ecuador de Júpiter cabrían hasta 11 planetas Tierra puestos en fila. La velocidad a la que gira este coloso del sistema solar también es endiablada, pues no solo hay que tener en cuenta que el día en Júpiter dura apenas unas escasas 10 horas mientras que en la Tierra un día dura 24 horas, sino también que su radio es 10 veces mayor que el de nuestro planeta. Esta también es la causa de los fuertes vientos que se producen en la atmósfera de Júpiter, los cuales en el ecuador del planeta pueden alcanzar hasta los 540 kilómetros por hora, dando lugar a las tormentas más impresionantes del sistema solar, como es el caso de la Gran Mancha Roja, una tormenta que según los científicos lleva activa más de 300 años y en la cual cabrían 2 planetas como la Tierra.")
//     break

//     case "saturno":
//     console.log("EL PLANETA SATURNO: Saturno es otro de los planetas más grandes del sistema solar, por lo que al igual que Júpiter, recibe su nombre de uno de los dioses más importantes de la mitología para griegos y romanos, quienes respectivamente se referían a él como Cronos y Saturno, y en sendas mitologías fueron padres de Zeus y Júpiter. Cronos y Saturno eran, de hecho, los dioses del tiempo y la agricultura. Saturno es el planeta que a lo largo del año se puede observar durante más tiempo en el firmamento, por lo que la elección de ambas culturas para nombrar a este gigante gaseoso no es una casualidad.")
//     break
    
//     case "urano":
//     console.log("EL PLANETA URANO : El dios Urano fue en la mitología griega el dios del cielo. Sin embargo, cuando los griegos se referían al objeto que brillaba en el cielo con este nombre, no se estaban refiriendo a un planeta, si no que creían que se trataba de una estrella. Para constatar que Urano se trataba de un planeta hubo que esperar hasta el año 1781, cuando fue descubierto por Sir William Herschel, quien quiso bautizarlo en honor al rey Jorge III de Inglaterra. Georgium Sidus, el nombre propuesto por Herschel para este gigante de hielo no prosperó, y la comunidad astronómica acordó en el año 1850 que este adoptara el nombre de Urano, un nombre de origen mitológico en consonancia al resto del planetas del sistema solar.")
//     break;
    
//     case "neptuno":
//     console.log("EL PLANETA NEPTUNO : El nombre del planeta Neptuno, dios de los océanos para los romanos, en un proceso parecido al que tuvo lugar con Urano, fue adoptado por consenso dentro de la comunidad de astrónomos. Neptuno fue el primer planeta descubierto mediante cálculos matemáticos, ya que los antiguos, al igual que ocurrió con Urano, pensaban que se trataba de una estrella.")
//     break;

//     default:
//         console.log("planet not found")
// }

// console.log("que otro planeta te gustaria qie investigaramos?");


// fin switch parctica 





// Operador ternario practica : 

// sintaxis, 

// (condicion) ? true : false

// (condicion) ?

// (primera sentencia,
//     seguenda sentencia)
//     :
//     (primera sentencia,
//         seguenda sentencia)
 
// let num = 99;

// (num % 2 == 0 ) ? (console.log(`${num} es par`),

// console.log(`ya que ${num} es par, le gustaria consultar algo mas señor?`))

// : 
// (console.log(`${num} es impar`),
// console.log(`quiere intentar de nuevo con otro numero?`))


// let age = 17;

// (age>= 18 ) ? console.log(`usted es mayor de edad`) : console.log(`usted es menor de edad`); 


// (age>=18) ? 

// (console.log("si señor refactivamente usted es mayor de edad, vienvenido al mundo del laburo señor"),
// console.log("que mas le gustaria consultar señor mayor de edad? jaja")
// )
// :
// (console.log("usted no es mayor de edad, vuelva cuando tenga almenos los 18 años de edad"),
// console.log("hojala tus padres sepan que andas en estas!"));



// let numeroDia = 3;

// let weekDays = ["lunes", "martes", "miercoles", "juevez", "viernes", "sabado", "domingo"]

// let dia = (numeroDia <weekDays.length) ? weekDays[numeroDia -1] : "dia incorrecto";

// console.log(dia)




// Array practica

// let palabras = ["hola","pedro", "color"];
// let numeros =[1,2,3,4,5,6,7,8];

// let number = 90;
// console.log(numeros.length)

// console.log(palabras.with(1, "sanchez")) con with cambiamos el una de las palabrasl del arra acediendo a la pocicion y colocando la nueva palabra o numeros.
// console.log(`la palabra ${palabras[0]} tiene ${palabras[0].length} letras`)

// console.log(palabras.at(2))  también podemos utilizar el método .at(), añadido en Javascript . Con él, se puede hacer exactamente lo mismo que con [pos], sólo que además permite valores negativos,

// console.log(palabras.at(2).length) Esta característica hace que acceder al último elemento (o cercanos) sea bastante práctico, ya que hacer la misma operación con el operador [] era algo menos directo que en algunos casos se podría volver confuso o poco intuitivo:
// console.log(palabras.push("cristian", "maicol", "andres", "fransis")); Añade uno o varios elementos al final del array. Devuelve el tamaño del array.
 
// console.log(palabras.pop("color"));
// console.log(palabras)

// console.log(Array.isArray(number)); evaluamos si es un array o no
// console.log(Array.isArray(numeros));
// console.log(numeros);
// console.log(numeros.reverse()); le da la vuelata al array


// metodo .splice


// .slice  

// numeros.splice(2,0,12,34,5,76,);
// console.log(numeros);


// let colors = ["Rojo", "Verde", "Azul"]

// // console.log(colors);

// colors.push("Negro", "Blanco");
// console.log(colors);


// colors.forEach((e) =>{
// document.write(`<li> ${e}</li`)
// }
// )

// colors.forEach((colores)=>{
// console.log(colores)
// });

// de esta forma sensilla agregamos en una lista los colores del array, 



// hacer que se puedan agregar canciones a una listas, utilizando el metodo, splice, para agregar canciones, y foreach para imprimir estas canciones, 


// let songs = ["te amo, te estraño", "impossible", "gravity", "i will sorvive", "ding dong", "la llorona", "move bitch get out of da way","de amor y de miel", "destino", "in da club"]

// // songs.forEach()
// songs.push("los sueños", "everybody knows", "me enamore", "llegare")

// songs.forEach((canciones, index )=>{
// console.log(index, canciones)
// })








// bucles  practica 


// Bucle while & do...while




// while 
// let a = 1;

// while(a<=20){
// console.log(`a vale ${a}`)
// a++;
// }

// let color = ""
// while(color != "rojo"){
//     color= prompt("dame un color (escribe rojo para salir)","")
// }

// console.log("felicidades has roto el bucle")



// do while 

// let color ="";

// do{
//     color = prompt("dame un color (escribe rojo para salir)","");
// }while(color != "rojo")

// console.log("felicidades has roto el bucle")


// let pass = ""

// while(pass != 123456789){
//     pass = prompt("cual es la contraseña?")
// }
// console.log("felicidades la contraseña por fin fue ingresada de forma correcta");


// do{
//     pass = prompt("cual es la contraseña?")
// }while( pass != 123456789)
// console.log("felicidades la contraseña por fin fue ingresada de forma correcta")


// let runner = 1;

// do{
// console.log(` this is the lap ${runner} on the race`)
// runner ++;
// }while(runner<=50)

// console.log("congratulations, you have finished the run")




// Bucle for - Curso básico de JavaScript  practica


// for(let i = 0; i<10; i++){
//     console.log(i)
// }
// console.log("test one")

// for (let runner = 1; runner<=50; runner++){
//     console.log(runner)
// };

// console.log("contratulation you have finished 50 laps in this race!")

// recorrer he imprimir un array,
// forma larga

// const fruits = ["Mango", "Peach", "Banana"];

// for(let i=0; i< fruits.length; i++){
//     console.log(i)
// }

// forma corta

// for(let fruit of fruits){
//     console.log(fruit)
// }

// incrementar del 1 al mil de dos en dos

// for(let i=1; i<=10000; i+=3){
//     console.log(i)
// }


// const planetList = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];



// for(let i = 0; i < planetList.length; i++){
//     console.log(planetList[i])
// }

// planetList.forEach((index, planet)=>{
//     console.log(planet, index) 
// })


// for(const index in planetList){
//     console.log(index)
// }

// for( const planets of planetList){
//     console.log(planets)
// }

// console.log(planetList)





// objetos

// const data = {
// name : "julian",
// age : 34,
// sons : ["laura", "camila", "mateo", "cistian","camilo"]
// };

// console.log(data)

// for(const key in data){
//     console.log(data[key]);
// }


// for(const key in data){
//     console.log(key)
// }

// console.log(`Hola ${data.name} veo que tienes ${data.age} años, y tus hijos son: ${data.sons.join(", ")}.`)


// const solarSystem = {
//     solarSystemData: "assemblage consisting of the Sun—an average star in the Milky Way Galaxy—and those bodies orbiting around it: 8 (formerly 9) planets with more than 210 known planetary satellites (moons); many asteroids, some with their own satellites; comets and other icy bodies; and vast reaches of highly tenuous gas and dust known as the interplanetary medium. The solar system is part of the observable universe, the region of space that humans can actually or theoretically observe with the aid of technology. Unlike the observable universe, the universe is possibly infinite.The Sun, Moon, and brightest planets were visible to the naked eyes of ancient astronomers, and their observations and calculations of the movements of these bodies gave rise to the science of astronomy.",

//     planets : {

//         Mercury: "Mercury From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.",
//         planetTye: "Terrestrial",

//         Venus : "Similar in structure and size to Earth, Venus's thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
//         PlanetType : "Terrestrial",

//         Earth : " Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
//         planetTye : "Terrestrial",

//         Mars : "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere.",
//         planetTye: "Terrestrial",

//         Jupiter: "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red Spot is a centuries-old storm bigger than Earth.",
//         planetTye : "Gas Giant",

//         Saturn:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
//         PlanetType:  "Gas Giant",

//         Uranus : "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
//         planetTye:"Ice Giant",

//         Neptune : "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.",
//         PlanetType: "Ice Giant",

//     },

//     sun: "The Sun holds the solar system together, keeping everything – from the biggest planets to the smallest debris – in its orbit."

// };



// funciones practica giada.

// const greet =(name = "miguel, angel")=>{
// console.log(`Hola ${name}`)
// }

// greet("mirror")


// const potencia = (base, exponente =2 )=>{
//     let res = 1;
//     for(let i = 0; i < exponente; i++){
//         res *= base;
//     }
//    return res;
// }

// console.log(potencia(3,3));



// const speak =  run=> console.log(`hold on, ${run}! `)
 
// speak("wait")



// const ballow = (name = "camilo fernandez") => {
// console.log(`Hola ${name}`)
// }

// ballow()

// let age = 17;

// age <= 17  ?
// alert("Disculpa, eres menor de edad!")   
//  : 
// alert("OK, puedes continuar");
  
 

// for( let age = 1; age <=18; age++){
// console.log(age);
// }


// const numeros = [2, 7, 4, 6, 25, 72, 43, 69];


// const copy = numeros.map(x => x * 2);
// console.log(copy)



//  const numeros = [2, 7, 4, 6, 25, 72, 43, 69];

//  const mul = numeros.map(x => x *2);
//  console.log(mul)


// const pets = [
//     {nombre: "Benji", edad: 2, tipo: "cat"},
//     {nombre: "Baxter", edad: 1, tipo: "bird"},
//     {nombre: "Andy", edad: 5, tipo: "monkey"},
//     {nombre: "Babbles", edad: 2, tipo: "mause"}
// ]

// const petss = pets.map(pets => pets.tipo);

// console.log(petss)


// numeros.forEach((e)=>{
//     console.log(e);
// })


// for(let i = 1; i  <=100; i++){
//     console.log(i)



// declaracion de un objeto



// const player1 = {
//     name: "maicol",
//     life: 100,
//     powerlever: 10,
//     talk: function(){return "hola";}
// };

// console.log(player1.talk())




// const player2 = {
//     name: "maicol",
//     life: 100,
//     powerlever: 10,
//     toString: function() {
//         return `${this.name} (${this.life}/${this.powerlever})`;
//       }
// };

// console.log(`My name is ${player2.toString()}`)




// const number = 42;
// console.log(number.toString());

// const boolean = true;

// console.log(boolean.toString());

// console.log(number.toFixed(42));




// Programacion orientada a objetos, 




// const player1 = {
//     name: " Mario ",
//     id: 1,
//     powerlever: 100,
//     life: 50,
//     type: "worrior",
//     hablar(){
//         return "Odio los lunes"
//     }
// }

// const player2 = {
//     id: 2,
//     name: "Luigi",
//     powerlever: 89,
//     life: 60,
//     type: "heroe"
// }



// operadores de javascript

// Operadores de comparación
// Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
// Por ejemplo: 2 == "2" devuelve True
// Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
// Por ejemplo: 2 === "2" devuelve False

// Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
// Por ejemplo: 2 != "2" devuelve False

// Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
// Por ejemplo: 2 !== "2" devuelve True

// Y estos cuatro, seguro que ya sabes cómo funcionan:

// Mayor que (>)

// Mayor o igual que (>=)

// Menor que (<)

// Menor o igual que (<=)


// Negación lógica ! (Not). Establece una negación lógica en una expresión, es decir, que ante una expresión, cuyo estado lógico es True (verdadero), el operador hará que devuelva False (falso).

// El hierro es un metal = True.
// ! El hierro es un metal = False.

// Hay tres posibles resultados aplicando este operador a una expresión:

// Si la expresión = True el operador devuelve False.
// Si la expresión = False el operador devuelve True.
// Si la expresión = Null el operador devuelve Null.

// Conjunción lógica && (And). Establece una conjunción lógica de dos expresiones, es decir, que han de resultar True (verdadero) las dos expresiones para que el resultado final también lo sea.

// El hierro es un metal = True.
// El hierro es duro = True.
// El hierro es un metal && El hierro es duro = True.

// Hay 9 posibles resultados aplicando este operador a dos expresiones, aunque es posible incluir cuantas sean necesarias:

// Si la Expresión 1 = True && Expresión 2 = True el resultado es True.
// Si la Expresión 1 = True && Expresión 2 = False el resultado es False.
// Si la Expresión 1 = True && Expresión 2 = Null el resultado es Null.
// Si la Expresión 1 = False && Expresión 2 = True el resultado es False.
// Si la Expresión 1 = False && Expresión 2 = False el resultado es False.
// Si la Expresión 1 = False && Expresión 2 = Null el resultado es False.
// Si la Expresión 1 = Null && Expresión 2 = True el resultado es Null.
// Si la Expresión 1 = Null && Expresión 2 = False el resultado es False.
// Si la Expresión 1 = Null && Expresión 2 = Null el resultado es Null.
// Como puedes ver, si, y sólo si, ambas expresiones se evalúan como True, el resultado es True. Si cualquiera de las expresiones es False, el resultado es False.

// Disyunción lógica || (Or). Establece una disyunción lógica de dos expresiones, es decir, que el resultado se dará evaluando una expresión u otra.

// El hierro es un metal = True.
// El hierro es duro = True.
// El hierro es un metal || El hierro es duro = True.

// Hay 9 posibles resultados aplicando este operador a dos expresiones, aunque es posible incluir cuantas sean necesarias:

// Si la Expresión 1 = True || Expresión 2 = True el resultado es True.
// Si la Expresión 1 = True || Expresión 2 = False el resultado es True.
// Si la Expresión 1 = True || Expresión 2 = Null el resultado es True.
// Si la Expresión 1 = False || Expresión 2 = True el resultado es True.
// Si la Expresión 1 = False || Expresión 2 = False el resultado es False.
// Si la Expresión 1 = False || Expresión 2 = Null el resultado es Null.
// Si la Expresión 1 = Null || Expresión 2 = True el resultado es True.
// Si la Expresión 1 = Null || Expresión 2 = False el resultado es Null.
// Si la Expresión 1 = Null || Expresión 2 = Null el resultado es Null.
// Como puedes ver, si cualquiera de las expresiones, o ambas, son True, el resultado es True.

// Exclusión lógica ^ (Xor). Establece una exclusión lógica de dos expresiones, es decir, que el resultado se dará evaluando una expresión u otra, y dará True si solamente una de ellas es True, lo que implica la exclusión de la otra.

// El hierro es un metal = True.
// El hierro es duro = True.
// El hierro es un metal ^ El hierro es duro = False.

// APLICAR LOS BUCLES FOR OF FOR IN PARA LOS CONSTRUCTOS, E IMPRIMIRLOS En PANTALLAS, CREAT UN COPNSTRUSCTO DESDE SERO SIN VER TUTORIALES. 



// const player1 = {
//     name: " Mario ",
//     id: 1,
//     powerlever: 100,
//     life: 50,
//     type: "worrior",
//     hablar(){
//         return "Odio los lunes"
//     }
// }

// const player2 = {
//     id: 2,
//     name: "Luigi",
//     powerlever: 89,
//     life: 60,
//     type: "heroe"
// }



// class characters {
//     constructor( id, name, gender, specie, powerLevel, type, life,){
//         this.id = id
//         this.name = name
//         this.gender = gender
//         this.specie = specie
//         this.powerLevel = powerLevel
//         this.type = type
//         this.life= life
//     }
// }

// const Peach = new characters(1, "Princesa Peach Toadstool", "female", "human", 80, "warrior princess", 40)
//     const Mario = new characters(2, "Mario", "male", "human", 100, "warrior", 50)
//     const Bowser = new characters(3, "Bowser Morton Koopa", "male", "koopa", 100, "tank", 100)
//     const penguinKing = new characters(4, "penguin king", "male", "penguin", 32, "king", 45 )
//     const Luigi = new characters(5, "Luigi", "male", "human", 88, "support", 90)
//     const Toad = new characters(6, "Toad", "female", "mushroom", 39, "scout", 56 )

//     var personaje = prompt("que personaje le gustaria buscar?");
// alert(eval(personaje))

// class characters {
//     constructor( id, name, gender, specie, powerLevel, type, life,){
//         this.id = id
//         this.name = name
//         this.gender = gender
//         this.specie = specie
//         this.powerLevel = powerLevel
//         this.type = type
//         this.life= life
//     }
// }

// const Peach = new characters(1, "Peach", "female", "human", 80, "warrior princess", 40)
//     const Mario = new characters(2, "Mario", "male", "human", 100, "warrior", 50)
//     const Bowser = new characters(3, "Bowser Morton Koopa", "male", "koopa", 100, "tank", 100)
//     const penguinKing = new characters(4, "penguin king", "male", "penguin", 32, "king", 45 )
//     const Luigi = new characters(5, "Luigi", "male", "human", 88, "support", 90)
//     const Toad = new characters(6, "Toad", "female", "mushroom", 39,"scout", 56)

//    let character = prompt("que personaje le gustaria buscar?");
// console.log((eval(character)))



// class characters {
//     constructor( id, name, gender, specie, powerLevel, type, life,){
//         this.id = id
//         this.name = name
//         this.gender = gender
//         this.specie = specie
//         this.powerLevel = powerLevel
//         this.type = type
//         this.life= life
//     }
// }

// const Peach = new characters(1, "Peach", "female", "human", 80, "warrior princess", 40)
//     const Mario = new characters(2, "Mario", "male", "human", 100, "warrior", 50)
//     const Bowser = new characters(3, "Bowser Morton Koopa", "male", "koopa", 100, "tank", 100)
//     const penguinKing = new characters(4, "penguin king", "male", "penguin", 32, "king", 45 )
//     const Luigi = new characters(5, "Luigi", "male", "human", 88, "support", 90)
//     const Toad = new characters(6, "Toad", "female", "mushroom", 39,"scout", 56)

//    let character = prompt("que personaje le gustaria buscar?");
// console.log(JSON.stringify(eval(character)))







// class characters {
//     constructor(id, name, sex, speed, race, age, durability, rank, category, alias, identity, fate){
//         this.id = id
//         this.name = name
//         this.sex = sex
//         this.speed = speed
//         this.race = race
//         this.age = age
//         this.durability = durability
//         this.category = category
//         this.rank = rank
//         this.alias = alias
//         this.identity = identity
//         this.fate = fate
//     }
// };

// const Slayer = new characters( 1, "Unknown", "male", 60, "human", 35, 66, "General/King", "dangerous", "Doom Slayer", ["The demons first gave him the appellation, Doom Slayer, and also refer to him as the Unchained Predator, the Beast, and the Hellwalker. The UAC refers to him as DOOM Marine, or The Slayer. Before the character had any epithets in the story, he was most commonly called Doomguy in the fan community. This nickname is mentioned in Doom Eternal and used in his dialogue subtitles."], "alive")

// let CharacterData = prompt("que personale le gustaria consultar?")
// console.log(JSON.stringify(eval(CharacterData)));




// class characters {
//         constructor(id, name, sex, speed, race, age, durability, rank, category, alias, identity, fate){
//             this.id = id
//             this.name = name
//             this.sex = sex
//             this.speed = speed
//             this.race = race
//             this.age = age
//             this.durability = durability
//             this.category = category
//             this.rank = rank
//             this.alias = alias
//             this.identity = identity
//             this.fate = fate
//         }
//     };
    
//     const Slayer = new characters( 1, "Unknown", "male", 60, "human", 35, 66, "General/King", "dangerous", "Doom Slayer", ["The demons first gave him the appellation, Doom Slayer, and also refer to him as the Unchained Predator, the Beast, and the Hellwalker. The UAC refers to him as DOOM Marine, or The Slayer. Before the character had any epithets in the story, he was most commonly called Doomguy in the fan community. This nickname is mentioned in Doom Eternal and used in his dialogue subtitles."], "alive")
    
//     let CharacterData = prompt("que personale le gustaria consultar?")
//     console.log((eval(CharacterData))







// otra practica


    // class book{
        //     constructor( title, author, year, genre){
        //         this.title = title
        //         this.author = author
        //         this.year = year
        //         this.genre = genre
        //     }
        //     book(){
        //         return `${this.title} es un libro de ${ this.genre} escrito por ${this.author} en el añor ${this.year = year}`
        //     }
        // }
        
        // let books = []
        
        // while (books.length <3){
        //     let title = prompt("introduzca el titulo del libro")
        //     let author = prompt("introduzca el autor del libro")
        //     let year = prompt("introduzca el año del libro")
        //     let genre = prompt("introduzca el genero del libro").toLocaleLowerCase()
        
        //     if(title != "" && author != "" && !isNaN(year) && year.length == 4
        //     && (genre == "aventura" || genre == "terror" || genre == "fantasia" )){
        // books.push(new book(title, author, year, genre))
        //     }
        // }
        
        // const showAllbooks = () => {
        
        //     for (const book of books){
        //         console.log(books);
        //     }
            
        // }
        
        // const showAuthors = () => {
        //     console.log(books);
        // }
        
        
        // showAllbooks()





// Metodos de los arrays II


// const arr = [23, 5, 65, 1, 9, 4, 8, 46,];

// const products = [
//     {
//       brand: "APPLE",
//       operatingS: "iOS",
//       Cost: 1500,
//       count: 56,
//     }, 

//     {
//         brand: "samsung galaxy",
//         operatingS: "ANDROID",
//         Cost: 1400,
//         count: 38,
//     },

//     {
//         brand: "xiaomi",
//         operatingS: "ANDROID",
//         Cost: 500,
//         count: 10,
//     }, 
// ]

// /

// map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.


// practica de map

// const arr1 = arr.map(multipy)

// function multipy(value){
//     return value *2;
// }

// console.log(arr1)

// const arr2 = arr.map(divide)

// function divide(value){
//     return value /4;
// }

// console.log(arr2);


// const TotalsValue = products.map(item => ({ 
//    brand: item.brand,
//    operatingS: item.operatingS,
//    TotalsValue : item.Cost *item.count
// }))

// console.log(TotalsValue)


// fin de map


// const arr = [23, 5, 65, 1, 9, 4, 8, 46,];

// const Perons =[
//     { name: "mathew", age: 12,},

//     {name: "mathew", age: 34, },

//     {name: "mathew",   age: 23,},

//     {name: "mathew", age: 10,},

//     {name: "mathew", age: 16,},
// ]


// filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.


// const arrN = arr.filter((arr) => {
//     if(arr % 2 === 0){
//         return true;
//     }else{
//         return false
//     }
// })
// console.log(arrN)


// const arrP = arr.filter(arr => arr % 2 === 0);
// console.log("Resultado", arrP)

// const per = Perons.filter(P => P.age <18);

// console.log(per)



// fin de filter



// const arr = [23, 5, 65, 1, 9, 4, 8, 46,];

// const animals = ["Dril", "Impala", "Suricata", "Jirafa", "Pitón real", "Leopardo", "Flamenco común", "Búfalo rojo", "Antílope acuático", "Chimpancé", "Jabirú africano"]


// forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.

// animals.forEach((ress, index) => {
//     console.log(index, ress,)
// })


// animals.forEach(ret)

// function ret(){
//     return "animals"
// }

// console.log()



// fin foreach


// persons =[
//     {
//         name: "camila",
//         age: 34,
//     },
//     {
//         name: "andres",
//         age: 22,
//     },
//     {
//         name: "cristian",
//         age: 23,
//     },
// ]


// find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.

// const anmls = animals.find(findChimpancé);

// function findChimpancé(item) {
//     return item === "Chimpancé";
// }

// console.log(anmls)
// const anmls = animals.find



// const per = persons.find(findPerson).age

// function findPerson (persons){
// return persons.name === "andres";
// } 

// console.log(per)








// Practica del primerr bloque;

// const peliculas =[
//     {
//         Tutulo: "Mad Max",
//         año: 1979,
//     },
//     {
//         Tutulo: "Mad Max 2",
//         año: 1981,
//     },
//     {
//         Tutulo: "Mad Max Beyond Thunderdome",
//         año: 1985,
//     },
//     {
//     Tutulo: "Mad Max: Fury Road",
//     año: 2015,
// },
// {
//     Tutulo: "Furiosa",
//     año: 2024,
// },
// ]


// fin del primer bloque.  










// const name = [ "Ivan", "Lian", "Jai", "Flrin"];

// const peliculas =[
        
//          {
//             Tutulo: "Furiosa",
//              año: 2024,
//          },
//          {
//             Tutulo: "Mad Max 2",
//             año: 1981,
//          },
//          {
//             Tutulo: "Mad Max Beyond Thunderdome",
//              año: 1985,
//         },
//          {
//    Tutulo: "Mad Max: Fury Road",
//         año: 2015,
     
//          },
//          {
//             Tutulo: "Mad Max",
//            año: 1979,
//         }
//     ]

   //  const numbers = [34, 5, 7, 56, 64, 36, 97, 1, 3];

// inicio del segundo bloque. 

// sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.


// console.log(name);
// console.log(name.sort());
// console.log(numbers)
// console.log(numbers.sort())
// console.log(numbers.sort((a,b)=>a-b));

// console.log(peliculas.sort((a,b)=>a.año-b.año));



// const numbers = [1, 2, 3, 4,5, 6,55, 8,];

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];


// some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.


// const onMaleCharacter = characters.some(characters => characters.gender === "male")

// console.log(onMaleCharacter);

// const onBlueEyes = characters.some(characters => characters.eye_color === "blue")

// console.log(onBlueEyes); 

// const oneTallerCharacter = characters.some(characters => characters.height > 210)
// console.log(oneTallerCharacter);

// const oneMassLessThan50 = characters.some((characters)=> characters.mass <50)
// console.log(oneMassLessThan50);
// const rest = numbers.some(bigger);

// function bigger(item){
//  return item > 96;
// }

// console.log(rest);

// const person = [
//     {
//         name: "Juan",
//         age: 3,
//     },
//     {
//         name: "karla",
//         age: 36,
//     },
//     {
//         name: "isabel",
//         age: 10,
//     },
// ]

// const res = person.some(adult)

// function adult (person){
//     return person.age >= 18;
// }

// console.log(res)



// const numbers = [ 3, 4 , 6, 8, 6, 9];

// const persons = [ 

// {  name: "willians",  age: 54,}
// ,
// {name: "willians", age: 54,}
// ,
// { name: "willians", age: 54,}
// ];


// every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.

// const res = numbers.every((numbers, index)=>{
//     console.log(index)
//     return numbers > 2;
// })

// console.log(res)

// console.log("__________")
// const rest = numbers.some((numbers, index)=>{
//     console.log(index)
//     return numbers > 8;
// })

// console.log(rest)

// const fruits = ["Coconut", "Kiwi", "Grape", "Blackberry","Plum","Cherry", "Avocado","Watermelon","Pear", "Orange"]
// const numbers = [34, 5, 7, 56, 64, 36, 97, 1, 3];
// const names = ["Robert", "David", "Jessica", "Karen", "Betty", "Joshua", "George", "Amy", "Angela", "Helen", "Natalie"];
// const cars = [
// "Aston Martin", 
// "Volkswagen",
// "Mitsubishi",
// "Mazda",
// "Lexus", 
// "Honda",
// "Audi",
// "Alfa Romeo",
// "Lexus",
// "Dodge",
// "Nissan",
// "Ford",
// "Audi",
// "BMW",
// "Honda", 
// "TOYOTA", 
// "Mercedes-Benz",
// "Ferrari", 
// "Porsche",
// "Maserati"
//             ];


// concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.



// console.log(fruits)

// console.log(numbers)

// console.log(names)

// console.log(cars)

// const mix = fruits.concat(numbers, names, cars);

// console.log(mix);




// includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.

// console.log(cars.includes("mercedes-Benz"));

// if(cars.includes("Mercedes-Benz")) {
//     console.log("si existe!")
// }else{
//     console.log("no, it doesn't exist!" )
// };


// join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.

// const sep = cars.join(", ")
// console.log(sep)



// reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.

// const reducido = [].reduce((acc, el)=> acc + el, 0)



// indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

// console.log(cars.indexOf("Ford",))

// console.log(cars.indexOf("Nissan", 6));

// if(cars.indexOf(0 !== -1)){
//     console.log(cars.indexOf("TOYOTA"))
// }else{
//     console.log("it doesn't exist")
// }

// fin de este bloque
 



// const cars = [
//             "Aston Martin", 
//             "Volkswagen",
//             "Mitsubishi",
//             "Mazda",
//             "Lexus",
//             "Honda",
//             "Audi",                                                                                 "AlfaRomeo",
//             "Lexus",
//             "Dodge",
//             "Nissan",
//             "Ford",
//             "Audi",
//             "BMW",
//             "Honda",       "TOYOTA",                                                                               "Mercedes-Benz",                                                                        "Ferrari", 
//             "Porsche",
//             "Maserati"
//                                                                                                     ];



// findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.







// fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.




// push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

// const minCars = cars.push("Gillet", "KTM", "MG", "Shelby", "Renault", "Pagani", "Koenigsegg")

// console.log(minCars)




// pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

// const offcars = cars.pop()

// console.log(offcars)



// shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// const incars = cars.shift()

// console.log(incars)

// fin de este bloque








// unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del arrays

// const cotherCars = cars.unshift()

// console.log(cotherCars)


// slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

// const copyCars = cars.slice()

// console.log(copyCars)

// reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero

// const reCars = cars.reverse()

// console.log(reCars)


// splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// const plice = cars.splice(6, 1,)

// console.log(plice)

// fin de este bloque







// const numbers =[1, 2, 3, 5,[[5,6]] ,7,8,9, [89], 67, 54, [23, [[13, [35], 57]], 79],80,]



// lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.





// flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

// const flatted = numbers.flat(4)

// console.log(flatted)


// const names = ["Florin", "Ivan", "Liam"];
// const str = "Hello world";
// const number = 17;

// isArray() : Determina si el valor pasado es un Array.

// console.log(Array.isArray(names));
// console.log(Array.isArray(str));
// console.log(Array.isArray(number));


// from() : Crea una nueva instancia de Array a partir de un objeto iterable.


// // Final project arrays: 






// https://www.youtube.com/watch?v=7m9EiRS_Kc0

// https://github.com/jamesqquick/javascript-array-functions-practice#map


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];



// MAP
// Get an array of all names
const names = characters.map(characters =>  characters.name )
console.log(names)

// Get an array of all heights
const heights = characters.map(characters => characters.height)
console.log(heights)
// Get an array of objects with just name and height properties
const nH = characters.map(characters => 
    ({name: characters.name, heights: characters.height}));
console.log(nH);
// Get an array of all first names
const spliNames = characters.map(characters => characters.name.split(" ")[0])
console.log(spliNames)

// REDUCE
// Get the total mass of all characters
 const totalMass = characters.reduce((acc, cur) =>{
    return acc + cur.mass
 },0 );
 console.log(totalMass);

// Get the total height of all characters
const totalHeight = characters.reduce((acc, cur)=> acc + cur.height, 0)
console.log(totalHeight);

// Get the total number of characters in all the character names
const totalNumber = characters.reduce((acc, cur)=> acc + cur.name.length, 0);
console.log(totalNumber);
// Get the total number of characters by eye color (hint. a map of eye color to count)
const eyeColor = characters.map(characters => characters.eye_color);
console.log(eyeColor)

// FILTER
// Get characters with mass greater than 100
const GreaterThan100 = characters.filter(characters => characters.mass > 100 );
console.log(GreaterThan100);

// Get characters with height less than 200
const lesThan200 = characters.filter(characters => characters.height < 200)
console.log(lesThan200)

// Get all male characters
const maleChracters = characters.filter(characters => characters.gender === "male")
console.log(maleChracters)

// Get all female characters

const getFimalech = characters.filter(characters => characters.gender === "female")
console.log(getFimalech)

// SORT
// Sort by mass
const byMass = characters.sort((a,b)=>{
return b.mass - a.mass
})
console.log(byMass)

// Sort by height
const hesort = characters.sort((a, b) => a.height - b.height)
console.log(hesort)
// Sort by name
const byName = characters.sort((a,b)=>{
    if (a.name < b.name) return -1;
    return 1;
})
console.log(byName)
// Sort by gender
const byGender = characters.sort((a,b)=>{

if (a.gender === "female") return 1
return -1;

})
console.log(byGender)


// EVERY
// Does every character have blue eyes?
const allBlueEyes = characters.every((character)=>{
    return character.eye_color ==="blue";
})
console.log(allBlueEyes);

// Does every character have mass more than 40?
const allMass40 = characters.every(characters=> characters.mass > 40)
console.log(allMass40)
// Is every character shorter than 200?

const allShorter = characters.every((characters) => characters.height < 200)
console.log(allShorter)

// Is every character male?
const allMale = characters.every((characters)=> characters.gender === "male")
console.log(allMale);

// SOME
// Is there at least one male character?
const someMale = characters.some((characters) =>  {
return characters.gender === "male";
} );
console.log(someMale);

// Is there at least one character with blue eyes?
const blueEyecha = characters.some(characters => characters.eye_color ==="blue");
console.log(blueEyecha);
// Is there at least one character taller than 200?
const  tallerThan200 = characters.some(characters => characters.height > 200)
console.log(tallerThan200);
// Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some(characters => characters.mass < 50)
console.log(massLessThan50)  


/ Spread operator

// practica:

// const arr = [12,34, 68, 8, 5]

// const ne = [...arr]
// console.log(ne);


// const person1 = [
//    {
//     name: "camilo",
//     email: "camilo@gmail.com",
//     phone: "12345667"
//     },
//     {
//      name: "luisa",
//      email: "luisa@gmail.com",
//      phone: "1068963843"
//     },
//     {
//      name: "kris",
//      email: "kris@gmail.com",
//      phone: "40786573451"
//      }
// ]


// const person2 = [
//     {
//     name: "luis",
//     email: "luis@gmail.com",
//     phone: "0786865446"
//     },
//     {
//      name: "maicol",
//      email: "maicol@gmail.com",
//      phone: "1804567843"
//     },
//     {
//      name: "jhon",
//      email: "jhon@gmail.com",
//      phone: "4009773451"
//      }
// ]


// const unit = [...person1, ...person2];
// console.log(unit);
// console.log(person1);
// console.log(person2);

