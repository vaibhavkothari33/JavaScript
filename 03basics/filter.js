const code = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

code.forEach((item) => {
    // console.log(item);
})

// const num = code.filter((nums) => nums > 5)
const num = code.filter((nums) => {
    return nums > 5
})
// console.log(num);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userchoice = books.filter((bk) => { return bk.genre === "Science" && bk.edition == 2014 })
// console.log(userchoice)

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = number.map((item) => item * 10).map((item) => item + 1).filter((item) => item > 40)
console.log(newnum);
// accumulator

const myTotal = newnum.reduce((acc, currval) => (acc + currval), 0)
// console.log(myTotal);
// this is useful when we need to calculate total in the shopping cart

const shoppingcart = [
    {
        coursename: "Java script in hindi",
        price: 12999
    },
    {
        coursename: "Python in hindi",
        price: 2999
    },
    {
        coursename: "Java in hindi",
        price: 11999
    },
    {
        coursename: "Cpp in hindi",
        price: 3999
    },

]
const price =shoppingcart.reduce((acc,item)=>(item.price+acc),0);
console.log(price);