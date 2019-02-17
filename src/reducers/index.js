import { combineReducers } from 'redux';

import article from './article';
import category from './category';
import article_detail from './article_detail';
import main_content from './main_content';
import new_article from './new_article';
import authen from './authen';
import deleteArticle from './delete_article';

const reducer = combineReducers({
  article,
  category,
  article_detail,
  main_content,
  new_article,
  authen,
  deleteArticle,
});

export default reducer;