import React from "react";


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div style={{ listStyleType: 'none', width: '100%', border: 'solid red' }}>
            <button onClick={() => paginate()}>
                Load 20 more items
            </button>
            <ul style={{ listStyleType: 'none', }}>

                {pageNumbers.map(number => (
                    <li style={{ float: 'left', padding: '5px', margin: '5px', border: 'solid 1px green', width: '20px', textAlign: 'center', fontSize: '20px' }} key={number}>
                        <a onClick={() => paginate(number)} >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default Pagination;
