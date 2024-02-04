import './App.css';

let data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]


function App() {
  return (
      <div>
        <h1>Date and Views Table</h1>
        <button>Sort by Date</button>
        <button>Sort by Views</button>
        <table>
          <thead>
            <tr>
              <td><b>Date</b></td>
              <td><b>Views</b></td>
              <td><b>Article</b></td>
            </tr>
          </thead>
          <tbody>
           { data.map((val) => (
              <tr>
                <td>{val.date}</td>
                <td>{val.views}</td>
                <td>{val.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;
