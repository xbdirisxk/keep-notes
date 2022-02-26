import React from 'react';
import './styles/masonry-grid.css';
import Masonry from 'react-masonry-css';

const GridNotes = ({ notes }) => {
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
            {notes.map((note) => (
                <div>
                    <h4>{note.title}</h4>
                    <p>{note.body}</p>
                </div>
            ))}
        </Masonry>
    );
};

export default GridNotes;
