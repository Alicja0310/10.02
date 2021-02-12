const isDog = true;
let imie = "Ala ma kota."
imie = "Ala ma psa."

console.log("imie", imie)

const num1 = 15
const num2 = 3
const num3 = 5
const wynik = num2 + num1 + num3
const imiex = "Marzena"
const imiey = "Marlena"

console.log("imiex", imiex)
console.log(wynik)

const imie1 = "Jan"
const nazwisko = "Źródełko"
const wynik2 = imie1.toLowerCase() + " " + nazwisko.toLowerCase()
console.log(wynik2)



const tablica = ["Marzena" , "Marlena"  , "Magdalena" , "Marta" , "Maria" , "Monika" , "Mariola" , "Magda" , "Alicja" , 'Artur' , 'Dawid' , 'Kuba' , 'Aleksandra' , 'Ola' , 'Róża' , 'Daria' , 'Julia' , 'Asia' , 'Karolina' , 'Wiktoria' , 'Tobiasz' , 'Kacper' , 'Wiktor' , 'Piotr' , 'oskar' , 'Severus' , 'Daniel' , 'Hania' , 'Dorota' , 'Barbara']

// console.log("Imię numer1", tablica[0])
// console.log("Imię numer2", tablica[1])
// console.log("Imię numer3", tablica[2])
// console.log("Imię numer4", tablica[3])
// console.log("Imię numer5", tablica[4])
// console.log("Imię numer6", tablica[5])
// console.log("Imię numer7", tablica[6])
// console.log("Imię numer8", tablica[7])
// console.log("Imię numer9", tablica[8])
// console.log("Imię numer10", tablica[9])
// console.log("Imię numer11", tablica[10])
// console.log("Imię numer12", tablica[11])
// console.log("Imię numer13", tablica[12])
// console.log("Imię numer14", tablica[13])
// console.log("Imię numer15", tablica[14])
// console.log("Imię numer16", tablica[15])
// console.log("Imię numer17", tablica[16])
// console.log("Imię numer18", tablica[17])
// console.log("Imię numer19", tablica[18])
// console.log("Imię numer20", tablica[19])
// console.log("Imię numer21", tablica[20])
// console.log("Imię numer22", tablica[21])
// console.log("Imię numer23", tablica[22])
// console.log("Imię numer24", tablica[23])
// console.log("Imię numer25", tablica[24])
// console.log("Imię numer26", tablica[25])
// console.log("Imię numer27", tablica[26])
// console.log("Imię numer28", tablica[27])
// console.log("Imię numer29", tablica[28])
// console.log("Imię numer30", tablica[29])

tablica.forEach(item => {
    console.log("stary", item)
    item = "Hemryk" 
    console.log(item)
})


const nowaTablica =  tablica.map(item => item = "Hemryk")
console.log(nowaTablica)

const oskar = tablica.find(item => {
    if(item === "oskar") {
        return item
    }
})

const tablicaLiczb = new Array(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10)
console.log(tablicaLiczb)

const wiekszeOdJedenSome = 
tablicaLiczb.some(item => item > 1)
console.log(wiekszeOdJedenSome)

const wiekszeOdJedenEver = 
tablicaLiczb.every(item => item > 1)
console.log(wiekszeOdJedenEver)

tablicaLiczb.push(666)
console.log(tablicaLiczb)

const liczbyDo100 = new Array ()
for(let i = 0;i < 100; i++) {
    liczbyDo100.push(i + 1)
}

console.log(liczbyDo100)



const imiona = new Array ()
for(let i = 0; i < 100; i++) {
    imiona.push("Tsuki" + i)
}
console.log(imiona)

const od1Do200 = new Array ()
for(let i = 1; i < 201; i++) {
    od1Do200.push(i * 2)
}

//console.log(od1Do200)

const num1do200 = new Array ()
for(let i = 0; i < 200; i++) {
    if(i%2 === 0)
    num1do200.push(i)
}

console.log(num1do200)
let indexLiczby88
num1do200.forEach((item , index) => {
    if(item === 88) {
        indexLiczby88 = index
    }

})
console.log(indexLiczby88, num1do200,[indexLiczby88])

const od1Do1000 = new Array ()
for(let i = 0; i < 1000; i++) {
    if(i%2 !== 0)
    od1Do1000.push(i)
}

console.log(od1Do1000)