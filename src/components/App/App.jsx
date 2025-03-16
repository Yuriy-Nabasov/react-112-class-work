import { useEffect, useState } from 'react';
import { fetchArticles } from '../../articleService';
import css from './App.module.css';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
    // const [clicks, setClicks] = useState(0);

    // useEffect(() => {
    //     fetchArticles()
    //         .then((data) => console.log(data))
    //         .catch();
    // }, []);

    // useEffect(() => {
    //     console.log(clicks);
    //     async function getArticles() {
    //         try {
    //             const data = await fetchArticles();
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getArticles();
    // }, [clicks]);

    // ? Pattern HTTP-запиту
    //! 1. fetch data
    //! 2. save to state
    //! 3. state update
    //! 4. component update

    const [articles, setArticles] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(false);

    // ? Pattern pagination
    //! 1. Form submit
    //! 2. http when?
    // !   1) form submission (topic change)
    // !   2) change page
    //! 3. state update
    //! 4. component update

    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(``);

    // const handleSearch = async (topic) => {
    //     try {
    //         setError(false);
    //         setIsLoading(true);
    //         setArticles([]);
    //         const data = await fetchArticles(topic);
    //         // console.log(data);
    //         setArticles(data);
    //         // setIsLoading(false);
    //     } catch (error) {
    //         // console.log(error);
    //         setError(true);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const handleSearch = (topic) => {
        console.log(`${topic}/${Date.now()}`);
        // setSearchTerm(topic);
        setSearchTerm(`${topic}/${Date.now()}`);
        setPage(1);
        setArticles([]);
    };

    useEffect(() => {
        if (searchTerm === ``) {
            return;
        }
        async function getData() {
            try {
                setError(false);
                setIsLoading(true);
                console.log(searchTerm.split(`/`)[0]);
                // const data = await fetchArticles(searchTerm, page);
                const data = await fetchArticles(
                    searchTerm.split(`/`)[0],
                    page
                );
                setArticles((prevArticles) => {
                    return [...prevArticles, ...data];
                });
            } catch {
                setError(true);
                toast.error(`Please reload there was an error!!!`);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
        console.log(page, searchTerm);
    }, [page, searchTerm]);

    return (
        <div className={css.container}>
            {/* <h1>HTTP request in React</h1> */}
            {/* <button onClick={() => setClicks(clicks + 1)}>
                Click me {clicks}
            </button> */}
            <SearchForm onSearch={handleSearch} />

            {error && <b>Whoops there was an error plz reload...</b>}

            <ArticleList items={articles} />

            {isLoading && <b>Loading data, please wait...</b>}

            {/* {articles.length > 0 && !isLoading && (
                <button onClick={() => setPage(page + 1)}>
                    Load more articles {page}
                </button>
            )} */}
            {/* або */}
            {articles.length > 0 && (
                <button onClick={() => setPage(page + 1)} disabled={isLoading}>
                    Load more articles {page}
                </button>
            )}
            <Toaster position="top-right" />
        </div>
    );
}
