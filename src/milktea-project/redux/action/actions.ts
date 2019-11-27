import { RouteInfo } from './../../model/RouteInfo';
import { Table } from './../../model/Table';
import * as actionType from './actionTypes';

function createAction<T>(d: T): T {
    return d;
}

export const InitData = (orderList: any) => createAction({
    type: actionType.INIT_DATA,
    orderList
});

export const AddTableListAction = (tables: Table[]) => createAction({
    type: actionType.UPDATE_STATE,
    tables
});

export const GetTableListAction = () => createAction({
    type: actionType.GET_TABLE,
});

export const UpdateOrderList = (orderList: any) =>createAction({
    type: actionType.UPDATE_ORDER_LIST,
    orderList
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
export const SetPageListFood = (pageFood: any) => createAction({
    type: actionType.SET_PAGE_LIST_FOOD,
    pageFood
});
 
export const PostOrder = () => createAction({
    type: actionType.POST_ORDER,
});

export const UpdateOrder = (order: any) => createAction({
    type: actionType.UPDATE_ORDER,
    order
});

export const CancelAction = () => createAction({
    type: actionType.CANCEL,
});

export const GetOrderFromTable = (tableId: number) => createAction({
    type: actionType.GET_ORDER_FROM_TABLE,
    tableId
});

export const GetPaymentTable = () => createAction({
    type: actionType.GET_TABLE_PAYMENT,
});

export const UpdatePaymentTable = (paymentTables: any) => createAction({
    type: actionType.UPDATE_PAYMENT_TABLE,
    paymentTables
});

export const GetPaymentOrder = (tableId: number) => createAction({
    type: actionType.GET_PAYMENT_ORDER,
    tableId
});
