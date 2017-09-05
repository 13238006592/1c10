import React,{Component} from "react";

import "./index.scss";

import axios from "axios";

import "@assets/iconfont/iconfont.css";
import "@assets/img/1585_05183628137690600.jpg"

class List extends Component{
	constructor(props) {
		super(props);
		this.state={
			listList:[]
		}
		
		
	}

	
		componentDidMount() {
		
	    axios.get("http://localhost:3000/api/list").then(res=>{
	    	console.log(res);
	    	this.setState({
	    		listList:res.data.data
	    	})
	    })
	}

	
	
	
	

	render() {
		return <div id="list">

			<div className="list-header">

				<i className="iconfont icon-fanhui"></i>
				<input type="text" placeholder="请输入您想找的优惠"/>
				<i className="iconfont icon-sousuo"></i>
				
			</div>
			
			<ul className="main">
				<li className="main-list">
					美食
					<i></i>
					<ul className="two">
						<li>全部</li>
						<li>今日新单</li>
						<li>美食</li>
						<li>娱乐休闲</li>
						<li>电影</li>
						<li>酒店</li>
						<li>生活服务</li>
						<li>丽人养生</li>
						<li>旅游</li>
					
					</ul>
					
				</li>

				

				<li className="main-list">
					商圈
					<i></i>
					<ul className="two">
						<li>全部</li>
						<li>今日新单</li>
						<li>美食</li>
						<li>娱乐休闲</li>
						<li>电影</li>
						<li>酒店</li>
						<li>生活服务</li>
						<li>丽人养生</li>
						<li>旅游</li>
					
					</ul>

				</li>
				
				

				<li className="main-list no-border">
					默认排序
					<i></i>
					<ul className="two">
						<li>默认排序</li>
						<li>距离最近</li>
						<li>销量最高</li>
						<li>价格最低</li>
						<li>价格最高</li>
						<li>评价最好</li>
						
					
					</ul>
				</li>
					
					
				
			</ul>

			{

			// <ul className="container">
			// 	this.state.datalist.map(item=>{
			// 		<li key={item.id} onClick={()=>{
						 
			// 			this.props.history.push(`/detail/${item.id}`);
			// 		}}>
			// 			<img src={item.poster.origin}/>
			// 			<h3>摩卡私营158元晚2-3人</h3>
			// 			<p>窗口撒放哪里睡觉富</p>
			// 			<span>￥158</span>/<s>196</s>
			// 			<i className="iconfont icon-denglu"></i>
			// 			<b>12</b>
			// 		</li>
			// 	})
			// </ul>
			
			}
			<ul className="container">
			{this.state.listList.map(item=>

				<li key={item.id}>
					<img src={item.image_1280}/>
					<div className="left">
						<h3>摩卡私营158元晚2-3人</h3>
						<p>窗口撒放哪里睡觉富</p>
					</div>
					<div className="down">
					<span>￥158</span><i>/</i><s>196</s>
						<i className="iconfont icon-denglu"></i>
						<b>12</b>
					</div>

				</li>
			)}
			</ul>

		</div>
	}	
}

export default List;