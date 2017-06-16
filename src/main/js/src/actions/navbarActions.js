export const CHANGE_SUBMENU_VISIBILITY = 'CHANGE_SUBMENU_VISIBILITY'

export function changeNavbarVisibility(bool) {
    return {
        type: CHANGE_SUBMENU_VISIBILITY,
        payload: bool
    }
}