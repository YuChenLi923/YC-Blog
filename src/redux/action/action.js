import {
  CLEAN_SERVER_DATA
} from '../type/index';
import getArticeDataAdmin from './getArticeDataAdmin';
import getArticleList from './getArticleList';
import getArticleData from './getArticleData';
import touchMenuSwitch from './touchMenuSwitch';
import getSearchResult from './getSearchResult';
import getArchives from './getArchives';
const cleartGetData = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAN_SERVER_DATA
    });
  };
};
module.exports = {
  cleartGetData,
  getArticeDataAdmin,
  getArticleList,
  touchMenuSwitch,
  getArticleData,
  getSearchResult,
  getArchives
};
