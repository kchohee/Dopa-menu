// helpers
import {helpers} from '../helpers/_index'
// import history from '../helpers/history'
// creators
import {actionCreator} from './actionCreators'
// actions
import {alertAction} from './alertAction'

export const indexRequest = () => ({type: actionCreator.menuItems.INDEX_REQUEST})
export const indexSuccess = (menuItems) => ({type: actionCreator.menuItems.INDEX_SUCCESS, menuItems})
export const indexFailure = () => ({type: actionCreator.menuItems.INDEX_FAILED})

// index
export const menuItemsFetch = () => dispatch => {
    const currentUser = localStorage.getItem('currentUser')
    const user = JSON.parse(currentUser)
    dispatch(indexRequest())
    return helpers.fetch.apiMenuItemsIndex(user)
    .then(
        data => {
            dispatch(indexSuccess(data.menuItems))
            return data.menuItems},
        error => {
            dispatch(indexFailure())
            dispatch(alertAction.error(error.heading, error.message))
    })
}

// export const createRequest = () => ({type: actionCreator.menuItems.CREATE_REQUEST})
// export const createSuccess = () => ({type: actionCreator.menuItems.CREATE_SUCCESS})
// export const createFailure = () => ({type: actionCreator.menuItems.CREATE_FAILED})

// create
// export const menuItemCreate =(menuItem)=>dispatch=>{
//     dispatch(createRequest())
//     helpers.fetch.apiMenuItemCreate(menuItem)
//     .then(
//         data => {
//             dispatch(createSuccess())
//             dispatch(alertAction.notification(data.heading,data.message))},
//         error => {
//             dispatch(createFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }


export const fetchRequest = () => ({type: actionCreator.menuItems.FETCH_REQUEST})
export const fetchSuccess = (menuItem) => ({type: actionCreator.menuItems.FETCH_SUCCESS, menuItem})
export const fetchFailure = () => ({type: actionCreator.menuItems.FETCH_FAILED})

// Show
export const menuItemFetch = (menuItemId) => dispatch => {
    const currentUser = localStorage.getItem('currentUser')
    const user = JSON.parse(currentUser)
    console.log(menuItemId)
    dispatch(fetchRequest())
    return helpers.fetch.apiMenuItemShow(user,menuItemId)
    .then(
        data => { 
            console.log(data.menuItem)
            dispatch(fetchSuccess(data.menuItem))
            return data.menuItem}
             ,
        error => {
            dispatch(fetchFailure(error))
            dispatch(alertAction.error(error.heading, error.message))
    })
}

// export const updateRequest = () => ({type: actionCreator.menuItems.UPDATE_REQUEST})
// export const updateSuccess = (menuItem) => ({type: actionCreator.menuItems.UPDATE_SUCCESS,menuItem})
// export const updateFailure = () => ({type: actionCreator.menuItems.UPDATE_FAILED})

// update
// export const menuItemUpdate = (menuItem) => dispatch => {
//     dispatch(updateRequest())
//     return helpers.fetch.apiMenuItemUpdate(menuItem)
//     .then(
//         data => {
//             dispatch(updateSuccess(data.menuItem))
//             dispatch(alertAction.notification(data.heading, data.message))
//             return data.menuItem},
//         error => {
//             dispatch(updateFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }

// export const deleteRequest = () => ({type: actionCreator.menuItems.DELETE_REQUEST})
// export const deleteSuccess = () => ({type: actionCreator.menuItems.DELETE_SUCCESS})
// export const deleteFailure = () => ({type: actionCreator.menuItems.DELETE_FAILED})

// Delete
// export const menuItemDelete = (menuItem) => dispatch => {
//     dispatch(deleteRequest())
//     helpers.fetch.apiMenuItemDelete(menuItem)
//     .then(
//         data => {
//             dispatch(deleteSuccess())
//             history.push('/signup')
//             dispatch(alertAction.notification(data.heading, data.message))},
//         error => {
//             dispatch(deleteFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }

export const menuItemsSessionEnd=()=>({type: actionCreator.menuItems.SESSION_END})
        
export const menuItemsAction = {
    // index
    indexRequest,
    indexSuccess,
    indexFailure,
    menuItemsFetch, 

    // create
    // createRequest,
    // createSuccess,
    // createFailure,
    // menuItemCreate,

    // fetch/show
    fetchRequest,
    fetchSuccess,
    fetchFailure,
    menuItemFetch,

    // update
    // updateRequest,
    // updateSuccess,
    // updateFailure,
    // menuItemUpdate,

    // delete
    // deleteRequest,
    // deleteSuccess,
    // deleteFailure,
    // menuItemDelete,

    // end Session
    // menuItemSessionEnd
}