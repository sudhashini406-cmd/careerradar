import CompanyList from "./components/CompanyList";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 py-6 overflow-hidden">
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 CareerRadar
          </h1>
          <p className="text-gray-700 mt-2 text-lg font-medium">
            All your dream companies in one place
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Track visits, filter opportunities, and never miss a career page again.
          </p>
        </div>

        <div className="flex-1 overflow-hidden">
          <CompanyList />
        </div>

        <footer className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          Made for job seekers • All links redirect to official career pages
        </footer>
      </div>
    </div>
  );
}