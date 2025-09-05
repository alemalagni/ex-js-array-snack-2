const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// Snack 1
const longBooks = books.filter(b => b.pages > 300)
const longBooksTitles = longBooks.map(l => l.title)

console.log('Titoli di libri con più di 300 pagine:', longBooksTitles)

// Snack 2
const availableBooks = books.filter(b => b.available)
const discountedBooks = availableBooks.map(a => {
    const price = ((a.price.slice(0, -1)) * 0.8).toFixed(2)
    return {
        ...a,
        price: `${price}€`
    }
})
const fullPricedBook = discountedBooks.find(d => {
    const price = parseFloat(d.price.slice(0, -1))
    return Number.isInteger(price)
})

console.log(fullPricedBook)

// Snack 3
const authors = books.map(b => b.author)
const areAuthorsAdult = authors.every(a => a.age >= 18)
authors.sort((a, b) => {
    const ageA = a.age
    const ageB = b.age
    return areAuthorsAdult ? ageA - ageB : ageB - ageA
})

console.log('Autori:', authors)

// Snack 4
const ages = authors.map(a => a.age)
const agesSum = ages.reduce((acc, c) => acc + c);
const agesAverage = agesSum / ages.length
console.log('Èta media degli autori:', agesAverage)