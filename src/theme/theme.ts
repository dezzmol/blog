export const getDesignTokens = (mode: string) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: "#fffbeb",
                },
                divider: "#fdc400",
                    background: {
                    default: "#ffdd94",
                    paper: "#fad787",
                },
                text: {
                    primary: "#000",
                    secondary: "#27272a",
                },

            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#dbf4ff",
                },
                divider: "#004282",
                background: {
                    default: "#000e21",
                    paper: "#000e21",
                },
                text: {
                    primary: "#fff",
                    secondary: "#71717a",
                },
            }),
    },
});