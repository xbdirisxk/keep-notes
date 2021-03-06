import styled from 'styled-components';

const NoteCard = styled.div`
    background-color: ${({ theme, themeType, bgColor }) =>
        themeType !== 'dark'
            ? bgColor
            : bgColor !== '#fff'
            ? bgColor
            : theme.dark.background};

    color: ${({ themeType, bgColor }) =>
        themeType !== 'dark' ? '#000' : bgColor !== '#fff' ? '#000' : '#fff'};
    text-align: left;
    margin: 10px;
    line-height: 1.3rem;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px hsl(0, 0%, 83%);
    width: ${({ view }) => (view === 'list' ? '60%' : '230px')};
    max-height: 450px;
    transition: 0.3s;

    &:hover {
        cursor: default;
        box-shadow: 0 0 5px 2.2px hsl(0, 0%, 83%);
    }
    .content {
        padding: 4px 16px 2px;
        cursor: pointer;
        overflow: hidden;
    }
    .content > * {
        padding: 4px 0;
    }

    /* icons */
    .icons {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        padding: 0 0 3px;
        font-size: 1.2rem;
        margin-right: 5px;
    }

    .icons > * {
        margin-left: 10px;
        padding: 2px;
        border-radius: 30px;
        padding: 6px 6px 1px;
        transition: 0.2s;
    }
    .icons > *:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.icons.hover.backgroundColor
                : 'hsla(56, 45%, 80%, 0.8)'};

        cursor: pointer;
    }
    .icons > .delete-icon:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.icons.hover.deleteIconColor
                : 'hsl(1, 95%, 88%)'};
    }

    /* responsice */
    @media (max-width: 750px) {
        width: 70vw;

        .content {
            font-size: 1.2rem;
            line-height: 1.5rem;
            min-height: 23vh;
        }
        .content > * {
            padding: 7px 0;
        }
    }
`;

export default NoteCard;
