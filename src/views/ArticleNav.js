import React from 'react';
import { Menu, Card } from 'antd';
import { Link } from 'react-router-dom';
import * as HttpHandler from '../conserns/HttpHandler';

class ArticleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_key: '1',
      categories: [],
      articles: [],
    }
  }

  onTabChange = (key) => {
    this.setState({ current_key: key });
    const url2 = `http://localhost:3000/api/category_articles/get_lists?category=${key}`
    HttpHandler.GetHandler(url2, this.initArticleList);
  }

  componentWillMount() {
    const url = 'http://localhost:3000//api/categories/get_lists';
    HttpHandler.GetHandler(url, this.initCategories);
    const url2 = `http://localhost:3000/api/category_articles/get_lists?category=${this.state.current_key}`
    HttpHandler.GetHandler(url2, this.initArticleList);
  }

  initCategories = (data) => {
    if(data['status'] === 1) {
      this.setState({categories: data['categories']});
    }
  }

  initArticleList = (data) => {
    if(data['status'] === 1) {
      this.setState({articles: data['articles']});
    }
  }

  render(){
    const tabList = this.state.categories.map((item) => {return {key: item.id, tab: item.name}});
    // const contentLists = this.state.articles.map((item) => {return <Link className='article-nav-link-list' key={`${item. id}`} to={`/post_show/${item.id}`} >{item.title}</Link> });
    const contentLists = this.state.articles.map((item) => {return <a className={item.id == this.props.articleId ? 'article-nav-link-list active' : 'article-nav-link-list' } key={`${item.id}`} href={`/post_show/${item.id}`} >{item.title}</a> });
    return(
      <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.current_key}
          onTabChange={(key) => { this.onTabChange(key); }}
          bordered={false}
        >
        { contentLists }
      </Card>
    );
  }
}

export default ArticleNav;
