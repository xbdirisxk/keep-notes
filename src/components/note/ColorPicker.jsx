import React, { useContext } from 'react';
import styled from 'styled-components';
import { NotesContext } from '../../context/NotesProvider';

const ColorPicker = ({ selectedNoteId }) => {
    const [notes, setNotes] = useContext(NotesContext);

    let colorCirles = [
        {
            color: '#fff',
            class: 'bg-white',
            selected: 'circled selected-color',
        },
        { color: '#f28b82', class: 'bg-red', selected: '' },
        { color: '#fff475', class: 'bg-yellow', selected: '' },
        { color: '#ccff90', class: 'bg-green', selected: '' },

        { color: '#a7ffeb', class: 'bg-turquoise', selected: '' },
        { color: '#aecbfa', class: 'bg-dark-blue', selected: '' },
        { color: '#fdcfe8', class: 'bg-pink', selected: '' },
        { color: '#e8eaed', class: 'bg-gray', selected: '' },
    ];

    const changeColor = (newColor) => {
        setNotes(
            notes.map((note) =>
                note.id === selectedNoteId ? { ...note, color: newColor } : note
            )
        );
    };

    const handleClose = () => {
        console.log('color picker is open');
    };

    return (
        <CPicker onKeyDown={() => console.log('hello I am color picker')}>
            <div className='dropdown'>
                <div className='color-palette dropdown-menu'>
                    {colorCirles.map((circle) => (
                        <div
                            key={Math.random() * 100000}
                            onClick={() => changeColor(circle.color)}
                            className={circle.class + ' ' + circle.selected}
                        ></div>
                    ))}
                </div>
            </div>
        </CPicker>
    );
};

const CPicker = styled.div`
    .drop-down {
        position: relative;
        display: inline-block;
    }

    // Color palette
    .color-palette {
        background-color: hsla(0, 0%, 99%, 0.7);
        border-radius: 5px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
        padding: 5px 10px 3px;
        width: 160px;

        // positioning
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: 10px;
        margin-left: -30px;
        z-index: 10;
    }

    // Stickers inside palette
    .color-palette div {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 50%;
        height: 26px;
        width: 26px;
        margin: 2px;
        opacity: 1;
        border: 2px solid transparent;
        border-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        outline: none !important;
    }

    // When hovering a sticker, display grey circle around
    .color-palette div:hover {
        border-color: rgba(0, 0, 0, 0.6);
    }

    // Always circle white color, otherwise it's invisible
    .color-palette div.circled {
        border-color: rgba(0, 0, 0, 0.2) !important;
    }

    // Show centered tick on selected color
    .color-palette div.selected-color {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC41NCIgdmlld0JveD0iMCAwIDE4IDE4IiBoZWlnaHQ9IjE4cHgiPgogIDxwYXRoIGQ9Im0wIDBoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 16px 16px;
    }

    .bg-red {
        background-color: #f28b82;
    }

    .bg-yellow {
        background-color: #fff475;
    }

    .bg-green {
        background-color: #ccff90;
    }

    .bg-turquoise {
        background-color: #a7ffeb;
    }

    .bg-dark-blue {
        background-color: #aecbfa;
    }

    .bg-pink {
        background-color: #fdcfe8;
    }
    .bg-gray {
        background-color: #e8eaed;
    }
`;

export default ColorPicker;
