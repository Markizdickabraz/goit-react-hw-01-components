import TransactionsList from "./transationsList";
import transactions from "../../transactions.json";
import { THead,Table } from "./transaction.styled";


export default function TransactionsHistory() {
    return (<Table>
        <THead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </THead>
        <TransactionsList items={transactions} />
    </Table>
    )
}
   