import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import { connect } from 'react-redux';
import { login } from '../actions/authenAction';

class NormalLoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        console.log(this.props.authen)
        this.props.login(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('login', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  size="large" placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  authen: state.authen
})

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data))
})

const WrappedNormalLoginForm = Form.create()(NormalLoginFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
