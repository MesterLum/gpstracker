export const URL_API = 'http://212.237.63.189:3000'


export function getHeaders(){
    var h = new Headers()
    h.append('Accept', 'application/json')
    h.append('Content-Type', 'application/json')
    return h
}
export const TITLE_COLOR = '#fefefe'
export const HEADER_COLOR = '#515c6d'
export const BACKGROUND_COLOR = '#263238'