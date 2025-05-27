interface SearchBarProps {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ city, setCity, onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="h-10 w-1/2 px-3 border rounded-md text-black"
      />
      <button
        onClick={onSearch}
        className="h-10 px-4 bg-primary text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
}
