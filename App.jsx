import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Candles from "./modules/Candles.jsx";
import Planner from "./modules/Planner.jsx";
import Journal from "./modules/Journal.jsx";
import Alerts from "./modules/Alerts.jsx";
import Portfolio from "./modules/Portfolio.jsx";
import Visuals from "./modules/Visuals.jsx";

const tabs = [
  { path: "/", label: "Charts", comp: <Candles /> },
  { path: "/planner", label: "Trade Planner", comp: <Planner /> },
  { path: "/journal", label: "Journal", comp: <Journal /> },
  { path: "/alerts", label: "Alerts", comp: <Alerts /> },
  { path: "/portfolio", label: "Portfolio", comp: <Portfolio /> },
  { path: "/visuals", label: "Visuals", comp: <Visuals /> }
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-48 bg-white dark:bg-gray-800 p-4">
          {tabs.map(t => (
            <NavLink
              key={t.path}
              to={t.path}
              className={({ isActive }) =>
                \`block py-2 px-3 rounded \${isActive ? "bg-blue-200 dark:bg-blue-700" : ""}\`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 p-4">
          <Routes>
            {tabs.map(t => (
              <Route key={t.path} path={t.path} element={t.comp} />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
