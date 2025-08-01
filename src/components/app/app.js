import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../menu-list/menu-list"
import MoviesAddFrom from "../movie-add-form/movie-add-form"

const App = () => {
    const data = [
        { name: "Empire of Osman", viewers: 988, favourite: false, id: 1 },
        { name: "Ertugrul", viewers: 781, favourite: false, id: 2 },
        { name: "Osman", viewers: 1091, favourite: true, id: 3 },
    ]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList data={data} />
                <MoviesAddFrom />
            </div>
        </div>
    )
}

export default App
