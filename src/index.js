import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
    return (
        <div><Book /></div>
    )
}

const Book = () => {
    return (
        <div></div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

