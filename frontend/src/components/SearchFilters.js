import React from 'react';
import { Search } from 'lucide-react';

const SearchFilters = ({ searchQuery, setSearchQuery, selectedStatus, setSelectedStatus, selectedChamber, setSelectedChamber }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search bills..."
          className="w-full p-2 pl-10 border rounded-lg"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">All Statuses</option>
        <option value="Introduced">Introduced</option>
        <option value="In Committee">In Committee</option>
        <option value="Signed by Governor">Signed by Governor</option>
        <option value="Dead">Dead</option>
      </select>

      <select
        value={selectedChamber}
        onChange={(e) => setSelectedChamber(e.target.value)}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">All Chambers</option>
        <option value="House">House</option>
        <option value="Senate">Senate</option>
      </select>
    </div>
  );
};

export default SearchFilters;