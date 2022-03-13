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
                themeType === 'dark'
                    ? theme.dark.inputField.background
                    : 'lightgray'};
        padding: 5px;
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.inputField.background : '#fff'};

        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 30%)'};
    }

    .input-title-field {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.inputField.background : '#fff'};
        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 30%)'};
        width: 100%;
        padding: 10px 15px;
    }
    .input-note-field {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.inputField.background : '#fff'};
        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 30%)'};
        font-size: 1rem;
        width: 100%;
        padding: 10px 15px;
    }
    input:focus {
        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : '#000'};
    }

    @media (max-width: 800px) {
        width: 90vw;
    }
`;

export default InputContainer;
