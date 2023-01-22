interface DirectCardButton {
    text: string
    onClick: () => void
}

export interface IDirectCard {
    title: string
    description: string
    buttons: DirectCardButton[]
}
