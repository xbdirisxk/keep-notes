import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    padding: 5px;
    width: 80%;

    .form {
        width: 80%;
        border-radius: 8px;
        box-shadow: 0 1px 3px 2px
            ${({ theme, themeType }) =>
                themeType === 'light'
                    ? 'lightgray'
                    : theme.dark.inputField.background};
        padding: 5px;
        background-color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#fff' : theme.dark.inputField.background};

        color: ${({ theme, themeType }) =>
            themeType === 'light' ? 'hsl(0, 0%, 30%)' : theme.dark.fontColor};
    }

    .input-title-field {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#fff' : theme.dark.inputField.background};
        color: ${({ theme, themeType }) =>
            themeType === 'light' ? 'hsl(0, 0%, 30%)' : theme.dark.fontColor};
        width: 100%;
        padding: 10px 15px;
    }
    .input-note-field {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#fff' : theme.dark.inputField.background};
        color: ${({ theme, themeType }) =>
            themeType === 'light' ? 'hsl(0, 0%, 30%)' : theme.dark.fontColor};
        font-size: 1rem;
        width: 100%;
        padding: 10px 15px;
    }
    input:focus {
        color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#000' : theme.dark.fontColor};
    }

    @media (max-width: 800px) {
        width: 90vw;
    }
`;

export default InputContainer;
