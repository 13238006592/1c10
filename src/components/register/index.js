import React,{Component} from "react";
import "./index.scss";

import "@assets/iconfont/iconfont.css";

class register extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return <div id="register">
			<div className="register-header">
				<i className="iconfont icon-fanhui"></i>
				<span>注册</span>
				<i className="iconfont icon-zhuye"></i>
			</div>

			<div className="reg1">
				<div id="err-ms">手机号码格式不正确</div>
				<div className="code-area">
					<a href="javascript:;" className="btns">获取验证码</a>
					<div className="input">
						<input type="tel" placeholder="请输入11位手机号码" name="mobile" id="tel"/>
					</div>
					<div className="input-2">
						<input type="tel" placeholder="请输入收到的短信验证码" name="mobile"/>
					</div>
					<div className="passwd">
						<input type="password" placeholder="请输入您的密码,长度至少6位" name="passwd"/>
						<a href="javascript:;">显示</a>
					</div>
				</div>
				<footer className="footer">
					<section className="reg">
						<a href="javascript:;" className="btn">完成注册</a>
					</section>
					<div className="xieyi">
						<a href="javascript:;" className="checkbox checked"></a>
						<span>我已阅读并同意</span>
						<a href="" className="link">《用户协议》</a>
					</div>
				</footer>

			</div>


		</div>
	}	
}

//验证用户名：
	
		function checkPhonenum(){
			var tel = document.getElementById("tel").value;
			var telRegex = /^1[3,4,5,7,8]\d{9}$/;
			if(!telRegex.test(tel)){
				document.getElementById().innerHTML = "手机号码格式不正确";
			} else {

			}
		}
	

export default register;