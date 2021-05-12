import * as localforage from 'localforage';

export const clientStoreConfig = {
  name: 'covid-19',
  storageName: 'clientStore',
  drive: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE
  ],
  version: 1,
  description: 'client side db'
}