export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'

export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY'

export function changeVisibility(bool) {
    return {
        type: CHANGE_VISIBILITY,
        payload: bool
    }
}