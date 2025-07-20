import type { JSX } from "react"

export const AccountDetails = (): JSX.Element => {
    return (
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <p className="mt-1 text-lg text-gray-900">name</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <p className="mt-1 text-lg text-gray-900">email</p>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <p className="mt-1 text-lg text-gray-900">address</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <p className="mt-1 text-lg text-gray-900">phone</p>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 cursor-pointer">
          Edit Profile
        </button>
      </div>
    </div>
    );
   
}