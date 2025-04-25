import './App.css';
import First from './First';

export default function App() {
  const categories = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art Design",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage",
    "File Sharing",
    "Animals",
    "Continuous Integration",
    "Cryptocurrency"
  ];
  const lowercaseCategories = categories.map(category => category.toLowerCase());

  return (
    <div className="app-container">
      <h1>Categories List</h1>
      <First firstList={lowercaseCategories} />
    </div>
  );
}
