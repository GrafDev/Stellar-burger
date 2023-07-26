export const getAuthSelector= state=> state.authStore
export const getUserSelector= state => state.authStore.user
export const getUserEmail=state => state.authStore.user.email
export const getUserName=state=> state.authStore.user.name
export const authIsLoadingSelector = (store) => store.authStore.isLoading
export const authHasErrorSelector = (store) => store.authStore.hasError