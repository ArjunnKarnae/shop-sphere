import type { JSX } from "react";
import { AccountDetails } from "../components/AccountDetails";
import { OrderHistory } from "../components/OrderHistory";


export const Profile = (): JSX.Element => {
    const randomUserId = (Math.floor(Math.random() * 10) + 1).toString();
    return (
        <div className="space-y-2 p-2">
            <AccountDetails userId={randomUserId} />
            <OrderHistory userId={randomUserId}/>
        </div>
    );
}