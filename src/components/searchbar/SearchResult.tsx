import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './searchResult.css';

const SearchResult: React.FC = () => {
  const { term } = useParams<{ term: string }>();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch and display the content related to `term`
  const fetchAndDisplayContent = async () => {
    setIsLoading(true);
    // Fetch the content related to `term` from your data source
    // Display the content
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndDisplayContent();
  }, [term]);

  return (
    <div id="search-result" className="search-result">
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <h1 className="search-result-term">Search Result for "{term}"</h1>
          {/* The fetched content should be displayed here */}
        </>
      )}
    </div>
  );
};

export default SearchResult;