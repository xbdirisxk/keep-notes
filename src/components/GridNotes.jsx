import React from 'react';
import './styles/masonry-grid.css';
import Masonry from 'react-masonry-css';

const GridNotes = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
        >
            <div>
                <h4>Lorem ipsum dolor</h4>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Lorem
                veniam
            </div>

            <div>
                <h4>ipsum dolor sit amet</h4>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nisi amet
                neque, asperiores non saepe dicta omnis rem officiis alias
                veniam
            </div>
            <div>
                <h4>Lorem ipsum</h4>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nisi amet
                neque, asperiores non saepe dicta omnis rem officiis alias
                veniam Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                amet neque, asperiores non saepe dicta omnis rem officiis alias
                veniam
            </div>
            <div>
                <h4>ipsum</h4>
                ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </Masonry>
    );
};

export default GridNotes;
