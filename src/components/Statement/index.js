import {statement} from "../../utils/statement";
import {customer} from "../../data/customer";
import {movies} from "../../data/movies";


const Statement = () => {
    console.log(statement(customer,movies))
    return (
        <>
            <h1>Rental Record for <em>martin</em></h1>
            <table>
                <tr>
                    <td>Ran</td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>Trois Couleurs: Bleu</td>
                    <td>2</td>
                </tr>
            </table>
            <p>Amount owed is <em>5.5</em></p>
            <p>You earned <em>2</em> frequent renter points</p>
        </>
    )
}
export default Statement;