const theme = {
    light: {
        background: '#fff',
        fontColor: '#000',
        nav: {
            icons: {
                hover: {
                    backgroundColor: 'hsl(0, 0%, 90%)',
                },
            },
            searchBox: {
                backgroundColor: 'hsl(0, 0%, 95%)',
                fontColor: 'hsl(0, 0%, 40%)',
            },
        },
        sidebar: {
            selectedItemBackground: '#feefc3',
            hover: {
                backgroundColor: 'hsl(0, 0%, 90%)',
            },
        },
        inputField: {
            background: '',
        },
        noteBox: {
            icons: {
                hover: {
                    backgroundColor: 'hsl(56, 45%, 80%)',
                },
            },
        },
    },

    dark: {
        background: '#202124',
        fontColor: '#fff',
        icons: {
            hover: {
                backgroundColor: 'hsl(0, 0%, 30%)',
            },
        },
        nav: {
            searchBox: {
                backgroundColor: 'hsl(0, 0%, 30%)',
                fontColor: 'hsl(0, 0%, 80%)',
            },
        },
        sidebar: {
            selectedItemBackground: 'hsl(37, 40%, 30%)',
            hover: {
                backgroundColor: 'hsl(0, 0%, 30%)',
            },
        },
        inputField: {
            background: 'hsl(0, 0%, 30%)',
        },
    },
};

export default theme;
