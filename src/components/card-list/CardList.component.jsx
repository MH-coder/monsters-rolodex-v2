// import { Component } from "react";

import Card from "../card/Card.component";

import './CardList.styles.css'

const CardList = ({ monsters }) => (
    <div className="card-list">
        {
            monsters.map((filteredMonster) => (
                <Card key={filteredMonster.id} monster={filteredMonster} />
            ))
        }
    </div>
)

// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;
//         return <div className="card-list">
//             {
//                 monsters.map((filteredMonster) => (
//                     <Card key={filteredMonster.id} monster={filteredMonster} />
//                 ))
//             }
//         </div>
//     }
// }

export default CardList;