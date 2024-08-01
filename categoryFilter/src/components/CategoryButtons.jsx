import React from 'react';

const CategoryButtons = ({ handleCategory }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={() => handleCategory('male')}
          className="form-radio text-blue-600 cursor-pointer"
        />
        <span className="ml-2">Male</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={() => handleCategory('female')}
          className="form-radio text-blue-600 cursor-pointer"
        />
        <span className="ml-2">Female</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="gender"
          value="all"
          onChange={() => handleCategory('all')}
          className="form-radio text-blue-600 cursor-pointer"
        />
        <span className="ml-2">All</span>
      </label>
    </div>
  );
}

export default CategoryButtons;
