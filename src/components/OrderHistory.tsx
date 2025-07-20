import type { JSX } from "react";
import { useGetAllOrdersQuery } from "../store/ordersApi";
import type { Order } from "../types/Order";


export const OrderHistory = (): JSX.Element => {
    const {data, isLoading, isError}: {data?: Order[], isLoading: boolean, isError: boolean} = useGetAllOrdersQuery();

    let content: JSX.Element| undefined = undefined;

    if(isLoading){
        content = <div>Loading...</div>;
    }
    else if(isError){
        content = <div>Error Loading Orders</div>;
    }
    
    const ordersRenderedContent = data?.map((order: Order) => {
        let statusColor = "";
        if(order.status === 'Shipped'){
            statusColor = "bg-yellow-200"
        }else if(order.status === 'Delivered'){
            statusColor = "bg-green-200"
        }else{
            statusColor = "bg-blue-200"
        }
        return (
            <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date.toString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>{order.status}</span></td>
            </tr>
            );
    });
    


    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Order History</h2>
            { (isLoading || isError)? 
               (content)
             : (
             <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead className={`bg-gray-50 ()? "hidden": ""}`}>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {ordersRenderedContent}
                </tbody>
            </table>
             )
           } 
        </div>
    );

}