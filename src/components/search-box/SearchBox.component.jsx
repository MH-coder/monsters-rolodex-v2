import React, { Component } from 'react';
import './SearchBox.styles.css'

const SearchBox = ({ onChangeHandler }) => (
    <div>
        <input className='search' type="search" placeholder='search monsters' onChange={onChangeHandler} />
    </div>
)

// class SearchBox extends Component {
//     render() {
//         const {onChangeHandler} = this.props;
//         return (
//             <div>
//                 <input className='search' type="search" placeholder='search monsters' onChange={onChangeHandler} />
//             </div>
//         );
//     }
// }

export default SearchBox;