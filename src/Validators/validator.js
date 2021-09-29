

export const required = value => value ? undefined : 'Required'

export const maxLengthCreator = length => value  => {
    if(value.length > length ) return 'MAX LENGTH IS'+ ' ' + length
    return undefined
}

export const noGap = value => {
    if(value === ' ') return 'NoGap!!!'
    return undefined
}
