export const CHANGE_SIDEBAR_VISIBILITY = 'CHANGE_SIDEBAR_VISIBILITY'

export function changeSidebarVisibility(bool) {
    return {
        type: CHANGE_SIDEBAR_VISIBILITY,
        payload: bool
    }
}