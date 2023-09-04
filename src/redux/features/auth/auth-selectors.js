export const getAuth= state=> state.authStore
export const getAuthUser= state => state.authStore.user
export const getAuthUserEmail=state => state.authStore.user.email
export const getAuthUserName= state=> state.authStore.user.name
export const getAuthIsLoading = (store) => store.authStore.isLoading
export const getAuthHasErrorSelector = (store) => store.authStore.hasError