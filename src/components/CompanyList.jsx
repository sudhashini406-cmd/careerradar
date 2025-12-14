
import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companies as initialCompanies } from "../data/companies";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [hiringFilter, setHiringFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  // Load from localStorage or seed data
  useEffect(() => {
    const stored = localStorage.getItem("careerRadarCompanies");
    if (stored) {
      setCompanies(JSON.parse(stored));
    } else {
      setCompanies(initialCompanies);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (companies.length > 0) {
      localStorage.setItem(
        "careerRadarCompanies",
        JSON.stringify(companies)
      );
    }
  }, [companies]);

  // Handle visit
  const handleVisit = (company) => {
    window.open(company.careerUrl, "_blank");

    const updated = companies.map((c) =>
      c.id === company.id
        ? { ...c, lastVisited: new Date().toISOString() }
        : c
    );

    setCompanies(updated);
  };

  // Apply filters
  const filteredCompanies = companies
    .filter((company) =>
      company.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((company) =>
      priorityFilter === "All"
        ? true
        : company.priority === priorityFilter
    )
    .filter((company) =>
      hiringFilter === "All"
        ? true
        : company.hiringType.includes(hiringFilter)
    )
    .filter((company) =>
      locationFilter === "All"
        ? true
        : company.location === locationFilter
    );

  return (
    <div>
      {/* Search + Filters */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4">
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-md text-sm"
        />

        <div className="flex gap-2 flex-wrap">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border px-2 py-1 rounded text-sm"
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={hiringFilter}
            onChange={(e) => setHiringFilter(e.target.value)}
            className="border px-2 py-1 rounded text-sm"
          >
            <option value="All">All Hiring Types</option>
            <option value="Freshers">Freshers</option>
            <option value="Experienced">Experienced</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border px-2 py-1 rounded text-sm"
          >
            <option value="All">All Locations</option>
            <option value="India">India</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>

      {/* Company List */}
      {filteredCompanies.length === 0 ? (
        <p className="text-sm text-gray-500 mt-6">
          No companies match your filters.
        </p>
      ) : (
        <div className="max-h-[50vh] overflow-y-auto space-y-4 mt-4">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onVisit={handleVisit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
