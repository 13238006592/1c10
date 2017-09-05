import React,{Component} from "react";
import axios from "axios";
import "./index.scss";

import "@assets/iconfont/iconfont.css";
// import "@assets/img/1585_05183628137690600l.jpg"

class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			detailList:[]
		}
		
	}

	componentDidMount() {
		axios.get("http://localhost:3000/api/detail").then(res=>{
			console.log(res);
			this.setState({
				detailList:res.data
			})
		})
	}	

	render() {
		return <div id="detail">
			<div className="detail-header">
				<i className="iconfont icon-fanhui"></i>
				<span>优惠详情</span>
				<i className="iconfont icon-zhuye"></i>
			</div>
			
			
			<div className="product-image">
				<img src="../assets/img/1585_05183628137690600l.jpg"/>
			</div>

			<div className="buy">
				<span>￥158</span>
				<i>/</i>
				<s>196</s>
				<div><a href="javascript:;">立即抢购</a></div>
			</div>

			<div className="description">
				<h4>查看是否从库房内2-3人</h4>
				<p>参加撒凤凰城,CK是查看电脑12差我对.你经常cac拉长股处daxc,理市场</p>
			</div>

			<div className="people-buy">
				<div>
					<i className="iconfont icon-denglu"></i>
					<span>18人已购买</span>
				</div>
			</div>

			<div className="evaluate">
				<div>
					<img src="../assets/img/rate_star_gray.png"/>
					<span>暂无评价</span>
				</div>

			</div>

			<div className="address">
				<div className="add-left">
					
					<div>
						<img src="../assets/img/icon-path.png"/>
						<h4>摩卡私营</h4>
					</div>
					<p>摩卡私营摩卡私营摩卡私营5号楼</p>
					<div className="tel">
						<img src="../assets/img/icon-tel.png"/>
					</div>
					
				</div>
				
			</div>

			<div className="deal-detail">
				<div className="rich-content">
					<dt className="rich-title">
						摩卡私营
						<span>
							<i>￥158</i>&nbsp;
							<s>￥196</s>
						</span>
					</dt>

					<dd className="detail-title">
						<p>2-3西大街经常性</p>
					</dd>

					<dd className="list">
						<dl>
							<dd className="detail-group">
								<span className="left">小包厢两小时观影</span>
								<span className="middle">2小时</span>
								<span className="right">156元</span>
							</dd>
							<dd className="detail-group">
								<span className="left">爆米花</span>
								<span className="middle">1份</span>
								<span className="right">10元</span>
							</dd>
							<dd className="detail-group">
								<span className="left">制定茶水或饮料</span>
								<span className="middle">1份</span>
								<span className="right">30元</span>
							</dd>
						</dl>
					</dd>

					<dd className="info">
						<ul>
							<li>使用时间:17:00-00:00</li>
							<li>适用人数:2-3人;适用包厢:小包厢</li>
						</ul>
					</dd>

					<a href="">查看图文详情></a>

				</div>
			</div>
			
			
			
		</div>
	}	
}

export default Detail;