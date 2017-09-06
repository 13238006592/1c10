import React,{Component} from "react";
import "./index.scss";

import "@assets/iconfont/iconfont.css";

class Login extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return <div id="login">

			<div className="login-header">
				<i className="iconfont icon-fanhui"></i>
				<span>登录</span>
				<i className="iconfont icon-zhuye"></i>
			</div>

			<section className="title">
				<div>账号登录</div>
				<div>手机短信登录</div>
			</section>

			
			<form className="account">
				<div className="box">
					<input type="text" placeholder="手机号/邮箱/用户名" name="name"/>
				</div>
				<div className="box">
					<input type="password" placeholder="密码" name="pw"/>
				</div>
				<section className="btn">
					<input type="submit" value="登录"/>
					<a href="" className="reg">免费注册</a>
					<a href="" className="reset-pw">忘记密码？</a>
				</section>
			</form>
			
			
			
			{
			// <form className="phone">
			// 	<div className="code-area">
			// 		<a href="javascript:;" className="btns">获取验证码</a>
			// 		<div className="input">
			// 			<input type="tel" placeholder="请输入11位手机号码" name="mobile"/>
			// 		</div>
			// 		<div className="input-2">
			// 			<input type="tel" placeholder="请输入收到的短信验证码" name="mobile"/>
			// 		</div>
			// 	</div>
			// </form>
			}
			
			
			<section className="login-footer">
				<div className="l">———&nbsp;使用下列账号登录&nbsp;———</div>
				<a className="other-qq" href="">
					<img src="../assets/img/qq_login.png"/>
					<span>QQ账号登录</span>
				</a>
			</section>
			
		</div>
	}	
}

export default Login;