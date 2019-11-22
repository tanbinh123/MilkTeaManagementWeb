import { RouteInfo } from './../../model/RouteInfo';
import { Table } from './../../model/Table';
import * as actionType from './actionTypes';

function createAction<T>(d: T): T {
    return d;
}

export const AddTableListAction = (tables: Table[]) => createAction({
    type: actionType.UPDATE_STATE,
    tables
});

export const GetTableListAction = () => createAction({
    type: actionType.GET_TABLE,
});

export const UpdateOrderList = (order: any) =>createAction({
    type: actionType.UPDATE_ORDER_LIST,
    order
});

export const SetRouteFormInfo = (routeInfos: any) => createAction({
    type: actionType.SET_ROUTE,
    routeInfos
});

export const  SetFormInfor = (formInfo: any) => createAction({
    type: actionType.SET_FORM_INFO,
    formInfo
});

export const GetLoginInfo = () => createAction({
    type: actionType.GET_LOGIN_INFO,
});

export const SetLoginInfo = (loginInfo: any) => createAction({
    type: actionType.SET_LOGIN_INFO,
    loginInfo
});

export const GetFoodListAction = () => createAction({
    type: actionType.GET_FOOD_LIST,
});

export const SetFoodToStoreAction = (food: any) => createAction({
    type: actionType.SET_FOOD_LIST,
    food
});
