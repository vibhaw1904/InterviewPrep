import users from '../data/user';
import React, { useState } from 'react';
import CategoryButtons from './CategoryButtons';
import SearchUsers from './SearchUsers';

const UserList = () => {
    const[query,setQuery]=useState("");
    
    const [selectedCategory,setSelectedCategory]=useState("all")

    const handleCategory=(category)=>{
        setSelectedCategory(category);
    }

    const filteredUsers=users.filter((user)=>{
        const matchQuery=user.name.toLowerCase().includes(query.toLowerCase());
        const matchCategory=selectedCategory==="all"||user.gender.toLowerCase()===selectedCategory;
        return matchCategory&&matchQuery;
    })
  return (
    <div className="container mx-auto p-4 items-center flex flex-col">
        <SearchUsers setQuery={setQuery} query={query}/>
        <CategoryButtons handleCategory={handleCategory}/>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700">
              Age
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-sm font-semibold text-gray-700">
              Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.filter((item)=>item.name.toLowerCase().includes(query)).map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-gray-200 text-center text-gray-700">
                {user.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-center text-gray-700">
                {user.age}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-center text-gray-700">
                {user.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
