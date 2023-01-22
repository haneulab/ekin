interface PoppularBarCategory {
    text: string
    onClick: () => void
}

export interface IPopularBar {
    title: string
    categories: PoppularBarCategory[]
}
