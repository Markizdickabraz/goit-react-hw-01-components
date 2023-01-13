import TransactionsList from "./transationsList";
import transactions from "../../transactions.json";

export default function TransactionsHistory() {
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <TransactionsList items={transactions} />
    </table>
    )
}
   