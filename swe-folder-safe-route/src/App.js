import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Search from "./pages/Search/Search";
import SearchEntered from "./pages/Search/SearchEntered/SearchEntered";
import SearchResult from "./pages/Search/SearchResult/SearchResult";
import RouteOptions from "./pages/RouteOptions/RouteOptions";
import OnRoute from "./pages/OnRoute/OnRoute";

function App() {
<<<<<<< HEAD
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/search" element={<Search />} />
				<Route path="/searchEntered" element={<SearchEntered />} />
				<Route path="/searchResult" element={<SearchResult />} />
				<Route path="/routes" element={<RouteOptions />} />
			</Routes>
		</BrowserRouter>
	);
=======
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchEntered" element={<SearchEntered />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/routes" element={<RouteOptions />} />
        <Route path="/onRoute" element={<OnRoute />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> dev-flash-light-modal
}

export default App;
