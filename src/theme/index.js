import { extendTheme } from "@chakra-ui/react";
export const myTheme = extendTheme({
    colors: {
        authColor: {
            100: '#C1EFFF',
            200: '#FFE9AE',
            300: '#FFDBA4',
            400: '#FFB3B3'
        }
    },
    components: {
        Button: {
            variants: {
                base: {
                    bg: "authButton.100",
                    color: "white",
                    fontSize: 'md',
                    _hover: {
                        bg: "authButton.900",
                        color: "white"
                    }
                },
                sm: {
                    bg: "modeButton.100",
                    color: "modeButton.900",
                    fontSize: 'lg',
                    _hover: {
                        bg: "modeButtonHover.100",
                        color: "modeButtonHover.900"
                    }
                },
                md: {
                    bg: "modeButton.100",
                    color: "modeButton.900",
                    fontSize: 'xl',
                    _hover: {
                        bg: "modeButtonHover.100",
                        color: "modeButtonHover.900"
                    }
                },
                lg: {
                    bg: "modeButton.100",
                    color: "modeButton.900",
                    fontSize: 'xl',
                    _hover: {
                        bg: "modeButtonHover.100",
                        color: "modeButtonHover.900"
                    }
                }
            }
        }
    }
})