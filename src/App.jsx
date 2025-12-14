import CompanyList from "./components/CompanyList";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 min-h-0">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 CareerRadar
          </h1>
          <p className="text-gray-700 mt-1 sm:mt-2 text-base sm:text-lg font-medium">
            All your dream companies in one place
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track visits, filter opportunities, and never miss a career page again.
          </p>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 min-h-0">
          <CompanyList />
        </div>

        {/* Footer - Fixed */}
        <footer className="flex-shrink-0 mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          Made for job seekers • All links redirect to official career pages
        </footer>
      </div>
    </div>
  );
}