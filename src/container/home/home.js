import React from 'react'
import PropTypes from 'prop-types'
import { fetchBooks } from '../../features/todoSlide/todoSlide'
import { useDispatch } from 'react-redux'

function Home(props) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(fetchBooks({}))
    }
    return (
        <div>
            <p>Đây là home page</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

Home.propTypes = {

}

export default Home

