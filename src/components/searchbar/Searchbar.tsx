import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

interface SearchBarProps {
  paragraphs: Array<string>;
}

const SearchBar: React.FC<SearchBarProps> = ({ paragraphs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<number | null>(null);

  useEffect(() => {
    if (searchTerm !== "") {
      setIsLoading(true);
      if (searchRef.current) {
        clearTimeout(searchRef.current);
      }
      searchRef.current = setTimeout(() => {
        const results = paragraphs.filter((paragraph) =>
          paragraph.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        setIsLoading(false);
      }, 500); // delay of 500ms
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, paragraphs]);

  const handleClear = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="search-bar">
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result, index) => {
              const searchTermIndex = result.toLowerCase().indexOf(searchTerm.toLowerCase());
              const start = Math.max(0, searchTermIndex);
              const end = start + searchTerm.length;
              const previewEnd = Math.min(end + 3, result.length);
              const highlighted = result.slice(start, end);
              const preview = result.slice(end, previewEnd);
              const remaining = result.slice(previewEnd);

              return (
                <div key={index}>
                <Link to={`/search/${highlighted}`}>
                  <p>
                    <span>{result.slice(0, start)}</span>
                    <span style={{ backgroundColor: 'yellow' }}>{highlighted}</span>
                    <span>{preview}</span>
                    {remaining && '...'}
                  </p>
                </Link>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  </div>
  );
};

export default SearchBar;
