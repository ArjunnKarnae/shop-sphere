import type { JSX } from "react"
import { useGetUserByIdQuery } from "../store/usersApi";
import type { Address, User } from "../types/User";

export const AccountDetails = ({userId}: {userId: string}): JSX.Element => {
 
  const {data, isLoading, isError}: {data?:User, isLoading: boolean, isError: boolean} = useGetUserByIdQuery(userId);

  if(isLoading){
    return <div> Loading User Data..</div>
  }
  if(isError){
    return <div> Error loading user profile</div>
  }

  const userShippingAddress: Address | undefined = data?.addresses.find(a => a.type.toLowerCase() === 'shipping');
   
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-md font-medium text-gray-700">Full Name:</label>
          <p className="mt-1 text-sm text-gray-900">{data?.firstName} {data?.lastName}</p>
        </div>
        <div>
          <label className="block text-md font-medium text-gray-700">Email Address:</label>
          <p className="mt-1 text-sm text-gray-900">{data?.email}</p>
        </div>
        <div className="md:col-span-2">
          <label className="block text-md font-medium text-gray-700">Shipping Address:</label>
          <p className="mt-1 text-sm text-gray-900">
            <span>{userShippingAddress?.unitNumber} {userShippingAddress?.street}</span><br/>
            <span>{userShippingAddress?.city} {userShippingAddress?.state}</span><br/>
            <span>{userShippingAddress?.country}</span>
          </p>
        </div>
        <div>
          <label className="block text-md font-medium text-gray-700">Phone Number:</label>
          <p className="mt-1 text-sm text-gray-900">{data?.phone}</p>
        </div>
      </div>
    </div>
    );
   
}