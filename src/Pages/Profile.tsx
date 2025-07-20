import type { JSX } from "react";
import { AccountDetails } from "../components/AccountDetails";
import { OrderHistory } from "../components/OrderHistory";


export const Profile = (): JSX.Element => {
    return (
        <div className="space-y-2 p-2">
            <AccountDetails />
            <OrderHistory />
        </div>
    );
}