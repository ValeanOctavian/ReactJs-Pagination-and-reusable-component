
import React, { useEffect, useState } from 'react';

function Product({ posts, loading }) {

    if (loading) {
        return <h1> Loading ...</h1>
    }
    return (

        <div>
            <header >
                <div>

                    {posts.map((e) => {
                        return (
                            <div key={e.id} style={{ border: 'solid red' }}>
                                <h3>
                                    {e.title}
                                </h3>
                                <h3>
                                    {e.email}
                                </h3>
                                <h5>
                                    {e.body}
                                </h5>

                                <span>
                                    {e.id}
                                </span>

                            </div>

                        );
                    })}

                </div>
            </header>
        </div>
    );
}

export default Product;