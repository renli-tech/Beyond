export type BaseTheme = {
    [key: string]: any
}

export type Theme = BaseTheme & {
    colors?: {
        [key: string]: any
    },
    spacing?: {
        [key: string]: any
    }
}