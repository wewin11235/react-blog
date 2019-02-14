import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Divider, Icon } from  'antd';
import style from './article.scss';

const Article = ({ article, loginSuccess, toggleEditIcon }) => (
  <div className='article-content'>
    { article
      ? <div>
          <div className='title'>
            {article.title}
            {
              loginSuccess &&
                <Icon
                  type="edit"
                  theme="twoTone"
                  className="edit-icon"
                  onClick={() => toggleEditIcon(article)}
                />
            }
          </div>
          <Divider className='divider' />
          <div className='content'>
            <ReactMarkdown source={article.content}/>
          </div>
        </div>
      : '加载中...'
    }
  </div>
)

export default Article;