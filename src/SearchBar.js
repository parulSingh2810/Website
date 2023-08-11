import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios.post('http://localhost:8000/searching', { search: searchTerm })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Address, City, District, or State"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.PGName},{result.email},{result.Address}, {result.City}, {result.District}, {result.State},{result.AC}, {result.NONAC},{result.ContactPerson},{result.SinglePrice},{result.SingleImage},{result.SingleAmenitiy},{result.SingleDetails},{result.DoublePrice},{result.DoubleImage},{result.DoubleAmanitiy},{result.DoubleDetails},{result.TriplePrice},{result.TripleImage},{result.TripleAmenities},{result.TripleDetails},{result.FlatmatePrice},{result.FlatmateImage},{result.FlatmateAmenities},{result.FlatmateDetails},{result.PropertyDocuments}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
