import {useMemo, useState} from "react";
import {useAppSelector} from "./useTyped";
import {createTheme} from "@mui/material";
import {getDesignTokens} from "../theme/theme";

export const useTheme = () => {

    const [mode, setMode] = useState<string>('light')
    const darkMode = useAppSelector(state => state.theme.darkTheme)

    useMemo(() => {
        if (darkMode) {
            setMode('dark')
        } else {
            setMode('light')
        }
    }, [darkMode])

    const theme = useMemo(() => {
        // @ts-ignore
        return createTheme(getDesignTokens(mode));
    }, [mode])

    return theme
}