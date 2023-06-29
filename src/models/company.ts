// import { Dispatch } from 'lib/store'
import axios from "axios";
import { API_URL } from "utils/setting"
import { RematchDispatch } from '@rematch/core';
import { Dispatch } from "lib/store"
import { createModel } from '@rematch/core'
import type { RootModel } from 'models'
export const company = createModel<RootModel>()({
  state: {
    detailCompany: null
  },
  reducers: {
    setState(state: any, payload: any) {
      state = { ...state, ...payload };
      return { ...state };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async getDetail(payload: any, rootState: any) {
      try {
        // let response = await axios.get(`${API_URL}company/detail`, {
        // });  
        // let result = response.data;
        // if(isSuccessResult(response)) {
        //   this.setState({
        //     detailCompany: result?.data,
        //   })
        // }
        // return returnResult(response);
      } catch (error) {
        // return returnDataError(ERROR.ERROR_UNKNOWN, error.message)
      }

    },
  }),
})