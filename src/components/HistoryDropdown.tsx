interface HistoryDropdownProps {
  history: string[];
  onSelect: (item: string) => void;
  onClear: () => void;
  onRemove: (item: string) => void;
}

export default function HistoryDropdown({
  history,
  onSelect,
  onClear,
  onRemove,
}: HistoryDropdownProps) {
  return (
    <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto text-sm text-black z-20">
      <li className="flex justify-between items-center px-4 py-2 font-semibold bg-gray-50 border-b border-gray-200">
        <span>Last 5 searches</span>
        <button
          onClick={onClear}
          className="text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      </li>
      {history.map((item) => (
        <li
          key={item}
          onClick={() => onSelect(item)}
          className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <span>{item}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item);
            }}
            className="ml-2 text-gray-400 hover:text-red-500"
            aria-label={`Delete ${item}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
