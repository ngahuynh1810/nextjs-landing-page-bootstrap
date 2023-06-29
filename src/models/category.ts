// import { Dispatch } from 'lib/store'
import axios from "axios";
import { API_URL } from "utils/setting"
import { RematchDispatch } from '@rematch/core';
import { Dispatch } from "lib/store"
import { createModel } from '@rematch/core'
import type { RootModel } from 'models'
import { IfcSampleInterface } from "typings";
export const category = createModel<RootModel>()({
  state: {
    listCategory: []
  },
  reducers: {
    setState(state, payload) {
      state = { ...state, ...payload };
      return { ...state };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async getListCategory(payload, rootState) {
      try {
      } catch (error) {
      }

    },
  }),
})