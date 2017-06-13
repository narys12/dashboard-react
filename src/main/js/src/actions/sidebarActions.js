export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY'

export function changeVisibility(bool) {
    return {
        type: CHANGE_VISIBILITY,
        payload: bool
    }
}