import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Product from '../../global/Products/Products';
import Pagination from '../../global/Pagination/Pagination'

function HomePage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data)

            setLoading(false)
        }
        fetchPosts();

    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);


    const paginate = (pageNumber) => {
        if (pageNumber) {
            setCurrentPage(pageNumber)
            console.log(postsPerPage, pageNumber)

        } else {
            setPostsPerPage(postsPerPage + 20)

        }
        console.log(currentPosts)

    };

    return (
        <div >
            <header >
                <Product posts={currentPosts} loading={loading} />

                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            </header>
            <div />
        </div>
    );
}

export default HomePage;