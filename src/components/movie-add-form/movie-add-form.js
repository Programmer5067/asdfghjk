import './movie-add-form.css'

const MoviesAddFrom = () => {
    return (
        <div className="movies-add-form">
            <h3>Yangi kino qo'yish</h3>
            <form className="add-form d-flex">
                <input type="text" className="form-control new-post-label" placeholder="Qanday kino?" />
                <input type="number" className="form-control new-post-label" placeholder="Nechi marotaba ko'rsatilgan?" />
                <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
            </form>
        </div>
    )
}

export default MoviesAddFrom