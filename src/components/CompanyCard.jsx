import { getDaysAgo } from "../utils/dateUtils";

export default function CompanyCard({ company, onVisit }) {
  const daysAgo = getDaysAgo(company.lastVisited);

  let visitText = "Never visited";
  if (daysAgo === 0) visitText = "Visited today";
  else if (daysAgo > 0) visitText = `Visited ${daysAgo} days ago`;

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col gap-2">
      <h2 className="text-lg font-semibold">{company.name}</h2>
      <p className="text-xs text-gray-500">
  {company.hiringType} • {company.location}
</p>

      <p className="text-sm text-gray-600">{visitText}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onVisit(company)}
          className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
        >
          Open Career Page
        </button>

        <span className="text-sm px-2 py-1 bg-gray-100 rounded">
          {company.priority}
        </span>
      </div>
    </div>
  );
}
